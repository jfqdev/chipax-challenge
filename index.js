const fs = require('fs');

async function solveChallenge({resources,selectedChallenge,charParams})
{

  switch (selectedChallenge) {
    case "both":
      //solution = [solveCharCounter(charParams),solveEpisodeLocations()]
      break;
    case "charCounter":
      //solution = [solveCharCounter(charParams)]
      break;
    case "episodeLocations":
      //solution = [solveEpisodeLocations()]
      break;
  }

  //challengeJSON = JSON.stringify(solution);
  //fs.writeFileSync('challengeJSON.json', challengeJSON);
}

solveChallenge({
  resources: ['character','episode','location'], //Change only if Rick&Morty Api does.
  selectedChallenge: 'both', // "both", "charCounter", "episodeLocations",
  charParams:{letter:['c', 'e', 'l'], property:"name"} // charCounter params.
})