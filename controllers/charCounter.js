const { charTotalCount } = require('../utils/charCounterUtils');
const { apiDataInjector } = require('../services/apiDataInjector');

async function solveCharCounter(resources, charParams, start) {
  const allData = await apiDataInjector(resources);

  const characterCharCount = charTotalCount(allData.character, charParams.property, charParams.letter[0]);
  const episodeCharCount = charTotalCount(allData.episode, charParams.property, charParams.letter[1]);
  const locationCharCount = charTotalCount(allData.location, charParams.property, charParams.letter[2]);

  const results = [
    {
      char: charParams.letter[0],
      count: characterCharCount,
      resource: resources[0],
    },
    {
      char: charParams.letter[1],
      count: episodeCharCount,
      resource: resources[1],
    },
    {
      char: charParams.letter[2],
      count: locationCharCount,
      resource: resources[2],
    },
  ];

  const [seconds, nanoseconds] = process.hrtime(start);
  const executionTime = `${seconds}s ${nanoseconds / 1000000}ms`;
  const inTime = seconds <= 2;

  return {
    allData,
    solution: {
      exercise_name: 'Char counter',
      time: executionTime,
      in_time: inTime,
      results,
    },
  };
}

module.exports = {
  solveCharCounter,
};
