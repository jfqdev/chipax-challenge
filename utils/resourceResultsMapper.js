function resourceResultsMapper(resource) {
  let resourceLists = resource.map(episode=> episode.data.results)
  let resourceList= []
  resourceLists.forEach(list => {
    resourceList = resourceList.concat(list)
  })
  return resourceList
}

module.exports={
    resourceResultsMapper,
}