const { getResourcesFirstPageData, getResourcesAllData } = require('./rickAndMortyApi');
const { resourceResultsMapper } = require('../utils/resourceResultsMapper');

// Provides all Data needed from RickAndMorty Api.
async function apiDataInjector(resources) {
  let resourcesFirstPageData; let
    resourcesAllData;
  try {
    resourcesFirstPageData = await getResourcesFirstPageData(resources);
  } catch (err) {
    /* eslint-disable-next-line no-console */
    console.log(err.message);
    process.exit();
  }

  const allData = {};

  try {
    resourcesAllData = getResourcesAllData(resourcesFirstPageData, resources);
    allData.character = await resourcesAllData.character;
    allData.character = resourceResultsMapper(allData.character);
    allData.episode = await resourcesAllData.episode;
    allData.episode = resourceResultsMapper(allData.episode);
    allData.location = await resourcesAllData.location;
    allData.location = resourceResultsMapper(allData.location);
  } catch (err) {
    /* eslint-disable-next-line no-console */
    console.log(err.message);
    process.exit();
  }
  return allData;
}

module.exports = {
  apiDataInjector,
};
