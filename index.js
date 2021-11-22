const {solveCharCounter} = require('./controllers/charCounter.js')
const {solveEpisodeLocations} = require('./controllers/episodeLocations.js')
const fs = require('fs');
//const util = require('util')

async function solveChallenge({resources,selectedChallenge,charParams})
{
  const start = process.hrtime()
  let charCounterOutput,episodeLocationsOutput,solution
  switch (selectedChallenge) {
    case "both":
      charCounterOutput = await solveCharCounter({resources,charParams,start})
      const startEpisodeTimer = process.hrtime()
      episodeLocationsOutput = await solveEpisodeLocations({resources,charCounterOutput,start: startEpisodeTimer})
      solution = [charCounterOutput.solution, episodeLocationsOutput]
      break;
    case "charCounter":
      charCounterOutput= await solveCharCounter({resources,charParams,start})
      solution = [charCounterOutput.solution]
      break;
    case "episodeLocations":
      episodeLocationsOutput = await solveEpisodeLocations({resources,start})
      solution = [episodeLocationsOutput]
      break;
  }

  challengeJSON = JSON.stringify(solution);
  fs.writeFileSync('challengeSolution.json', challengeJSON);
  //console.log(util.inspect(solution, false, null, true /* enable colors */))

}

solveChallenge({
  resources: ['character','episode','location'], //Change only if Rick&Morty Api does.
  selectedChallenge: 'both', // "both", "charCounter", "episodeLocations",
  charParams:{letter:['c', 'e', 'l'], property:"name"} // charCounter params.
})