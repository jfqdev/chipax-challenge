const {resourceResultsMapper} = require('./resourceResultsMapper')

function originLocationMapper(episodeList,characterList){
  results = []
  episodeList.forEach(episode=>{
    const episodeOriginLocations = []
    episode.characters.forEach(char=>{            
      splitedChar = char.split("/");
      charID = splitedChar[splitedChar.length - 1]
      indexInCharacterList = charID - 1
      characterOrigin = characterList[indexInCharacterList].origin.name;
      if(episodeOriginLocations.indexOf(characterOrigin) === -1){
        episodeOriginLocations.push(characterOrigin)
      }            
    })         
    results.push({ name: episode.name, episode: episode.episode , locations: episodeOriginLocations });
  })
  return results
}

function getLocations(allData){
  let episodeList = resourceResultsMapper(allData.episode)
  let characterList = resourceResultsMapper(allData.character)
  let results = originLocationMapper(episodeList,characterList)
  return results
}

module.exports={
  getLocations,
  originLocationMapper
}