const merge = require('./mergeFunction')
function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
    
    // Divide the array into two halves
    const mid = Math.floor(arr.length / 2);
    const leftArr = arr.slice(0, mid);
    const rightArr = arr.slice(mid);
    
    // Recursive calls to mergeSort for the divided halves
    const sortedLeftArr = mergeSort(leftArr);
    const sortedRightArr = mergeSort(rightArr);
    
    // Merge the sorted halves
    return merge(sortedLeftArr, sortedRightArr);
  }

  module.exports = mergeSort