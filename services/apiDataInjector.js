const {getResourcesFirstPageData,getResourcesAllData} = require('./rickAndMortyApi')

//Provides all Data needed from RickAndMorty Api.
async function apiDataInjector({resources}){

  try{
    resourcesFirstPageData = await getResourcesFirstPageData({resources})
  }catch(err){
    console.log(err.message)
    process.exit()
  }

  let allData = {}

  try{
    resourcesAllData = getResourcesAllData({resourcesFirstPageData,resources})
    allData.character = await resourcesAllData.character
    allData.episode = await resourcesAllData.episode
    allData.location = await resourcesAllData.location
  }catch(err){
    console.log(err.message)
    process.exit()
  }
  return allData    
}

module.exports={
  apiDataInjector    
}