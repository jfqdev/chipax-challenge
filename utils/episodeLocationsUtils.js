function episodeMapper(episodeResource){
  let episodesLists = episodeResource.map(episode=> episode.data.results)
  let episodeList= []
  episodesLists.map(list=>{
    episodeList = episodeList.concat(list)
  })
  return episodeList
}

function characterMapper(characterResource){
  let characterLists = characterResource.map(episode=> episode.data.results)
  let characterList= []
  characterLists.map(list=>{
    characterList = characterList.concat(list)
  })
  return characterList
}

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
  let episodeList = episodeMapper(allData.episode)
  let characterList = characterMapper(allData.character)
  let results = originLocationMapper(episodeList,characterList)
  return results
}

module.exports={
  getLocations,
  episodeMapper,
  characterMapper,
  originLocationMapper
}