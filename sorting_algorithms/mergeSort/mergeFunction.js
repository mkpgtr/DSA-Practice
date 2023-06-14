function merge(leftArr, rightArr) {
    let mergedArr = [];
    let leftIndex = 0;
    let rightIndex = 0;
    
    // Compare elements from both arrays and add them to mergedArr in the correct order
    while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
      if (leftArr[leftIndex] <= rightArr[rightIndex]) {
        mergedArr.push(leftArr[leftIndex]);
        leftIndex++;
      } else {
        mergedArr.push(rightArr[rightIndex]);
        rightIndex++;
      }
      
    }
    
    // Add the remaining elements from the left or right array
    mergedArr = mergedArr.concat(leftArr.slice(leftIndex)).concat(rightArr.slice(rightIndex));
    
    return mergedArr;
  }

  module.exports = merge