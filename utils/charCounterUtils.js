function charCounter(paramData, char) {
  let count = 0;
  let fromIndex = paramData.indexOf(char);

  while (fromIndex !== -1) {
    count += 1;
    /* eslint-disable-next-line no-plusplus */
    fromIndex = paramData.indexOf(char, ++fromIndex);
  }
  return count;
}

function charTotalCount(resourceData, param, char) {
  let totalCount = 0;
  resourceData.forEach((result) => {
    const paramData = result[`${param}`].toLowerCase();
    totalCount += charCounter(paramData, char);
  });
  return totalCount;
}

module.exports = {
  charTotalCount,
  charCounter,
};
