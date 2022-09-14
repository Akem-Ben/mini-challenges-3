function listSorting(needle, haystack) {
    //We declare our required variables
    let lastArray = -1;
    let lastIndex;
//We loop through the haystack array
    for(let i = 0; i < haystack.length; i++){
      const a = haystack[i]
        if(a.includes(needle)){
            lastArray = i;
            lastIndex = a.lastIndexOf(needle)
        }
    }
    if(lastArray != -1){
        return [lastArray, lastIndex]
    }
    else {
        return -1
    }
if(typeof haystack[0] != array){
  return haystack.lastIndexOf(needle)
}
}
module.exports = listSorting;
