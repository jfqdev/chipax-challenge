
function charTotalCount( resourceData, param, char ){
    let totalCount = 0
    resourceData.forEach(result=>{
        let paramData = result[`${param}`].toLowerCase()
        totalCount += charCounter(paramData, char)
    })   
    return totalCount
}

function charCounter( paramData, char){
  let count = 0;
  let fromIndex = paramData.indexOf(char);

  while(fromIndex !== -1 ){
      count += 1
      fromIndex = paramData.indexOf(char, ++fromIndex);
  }
  return count
}

module.exports= {
    charTotalCount,
    charCounter
}