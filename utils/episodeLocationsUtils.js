function originLocationMapper(episodeList,characterList){
  const results = []
  episodeList.forEach(episode=>{
    const episodeOriginLocations = []
    episode.characters.forEach(char=>{            
      const splitedChar = char.split("/");
      const charID = splitedChar[splitedChar.length - 1]
      const indexInCharacterList = charID - 1
      const characterOrigin = characterList[indexInCharacterList].origin.name;
      if(episodeOriginLocations.indexOf(characterOrigin) === -1){
        episodeOriginLocations.push(characterOrigin)
      }            
    })         
    results.push({ name: episode.name, episode: episode.episode , locations: episodeOriginLocations });
  })
  return results
}

module.exports={
  originLocationMapper
}