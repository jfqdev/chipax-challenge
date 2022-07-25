const { apiDataInjector } = require('../services/apiDataInjector');
const { originLocationMapper } = require('../utils/episodeLocationsUtils');

async function solveEpisodeLocations(resources, start, charCounterOutput) {
  let allData = {};
  if (!charCounterOutput) {
    allData = await apiDataInjector(resources);
  } else {
    allData = charCounterOutput.allData;
  }
  const results = originLocationMapper(allData.episode, allData.character);
  const [seconds, nanoseconds] = process.hrtime(start);
  const executionTime = `${seconds}s ${nanoseconds / 1000000}ms`;
  const inTime = seconds <= 2;

  return {
    exercise_name: 'Episode locations',
    time: executionTime,
    in_time: inTime,
    results,
  };
}

module.exports = {
  solveEpisodeLocations,
};
