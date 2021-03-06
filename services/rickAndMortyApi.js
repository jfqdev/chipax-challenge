const axios = require('axios').create({ baseURL: "https://rickandmortyapi.com/api/"})

//Initial Data to deduce pagination.
function getResourcesFirstPageData(resources) {
  let resourcesFirstPageData = resources.map(resource => axios.get(`${resource}`))
  return Promise.all(resourcesFirstPageData)
}

function getResourcesAllData(resourcesFirstPageData, resources){
  let resourcesAllData = resources.map((resource, index)=>{
    let totalPages = resourcesFirstPageData[index].data.info.pages
    let allData = Array(totalPages-1).fill()
    for (let step = 1; step <= totalPages; step++) {
      allData[step - 1] = axios.get(`${resource}/?page=${step}`)
    }
    return allData
  })

  return {
    character: Promise.all(resourcesAllData[0]),
    episode: Promise.all(resourcesAllData[1]),
    location: Promise.all(resourcesAllData[2])
  }
}

module.exports = {
  getResourcesFirstPageData,
  getResourcesAllData
}