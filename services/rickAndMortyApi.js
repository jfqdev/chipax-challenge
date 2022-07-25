/* eslint-disable no-plusplus */
const axios = require('axios').create({ baseURL: 'https://rickandmortyapi.com/api/' });

// Initial Data to deduce pagination.
function getResourcesFirstPageData(resources) {
  const resourcesFirstPageData = resources.map((resource) => axios.get(`${resource}`));
  return Promise.all(resourcesFirstPageData);
}

function getResourcesAllData(resourcesFirstPageData, resources) {
  const resourcesAllData = resources.map((resource, index) => {
    const totalPages = resourcesFirstPageData[index].data.info.pages;
    const allData = Array(totalPages - 1).fill();
    /* eslint-disable-next-line no-plusplus */
    for (let step = 1; step <= totalPages; step++) {
      allData[step - 1] = axios.get(`${resource}/?page=${step}`);
    }
    return allData;
  });

  return {
    character: Promise.all(resourcesAllData[0]),
    episode: Promise.all(resourcesAllData[1]),
    location: Promise.all(resourcesAllData[2]),
  };
}

module.exports = {
  getResourcesFirstPageData,
  getResourcesAllData,
};
