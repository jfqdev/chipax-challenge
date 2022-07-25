const { solveCharCounter } = require('./controllers/charCounter.js');
const { solveEpisodeLocations } = require('./controllers/episodeLocations.js');
const { outputHandler } = require('./utils/outputHandler');

async function solveChallenge({ resources, selectedChallenge, charParams }) {
  const start = process.hrtime();
  let charCounterOutput; let episodeLocationsOutput; let solution; let
    startEpisodeTimer;
  switch (selectedChallenge) {
    case 'both':
      charCounterOutput = await solveCharCounter(resources, charParams, start);
      startEpisodeTimer = process.hrtime();
      episodeLocationsOutput = await solveEpisodeLocations(resources, startEpisodeTimer, charCounterOutput);
      solution = [charCounterOutput.solution, episodeLocationsOutput];
      break;
    case 'charCounter':
      charCounterOutput = await solveCharCounter(resources, charParams, start);
      solution = [charCounterOutput.solution];
      break;
    case 'episodeLocations':
      episodeLocationsOutput = await solveEpisodeLocations(resources, start);
      solution = [episodeLocationsOutput];
      break;
    // skip default
  }
  outputHandler(solution, __dirname, selectedChallenge);
}

solveChallenge({
  resources: ['character', 'episode', 'location'], // Change only if Rick&Morty Api does. Do not alter order.
  selectedChallenge: 'both', // "both", "charCounter", "episodeLocations",
  charParams: { letter: ['c', 'e', 'l'], property: 'name' }, // Letters can be changed. Do not change property.
});
