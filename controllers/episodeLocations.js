const {apiDataInjector} = require('../services/apiDataInjector')
const {getLocations} = require('../utils/episodeLocationsUtils')

async function solveEpisodeLocations({resources,charCounterOutput,start}){
  allData= {}
  if(!charCounterOutput){
    allData = await apiDataInjector({resources})
  }else{
    allData = charCounterOutput.allData
  }
  let results = getLocations(allData)
  const [seconds, nanoseconds] = process.hrtime(start)
  const executionTime = `${seconds}s ${ nanoseconds / 1000000 }ms`
  
  return {
    exercise_name: "Episode locations",
    time: executionTime,
    in_time: true,
    results
  }
}

module.exports = {
  solveEpisodeLocations
}