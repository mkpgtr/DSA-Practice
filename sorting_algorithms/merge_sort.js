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

  const array = [34, 56, 89, 45, 90, 43, 12,45, 90, 43, 12, 56, 23, 56, 23, 14, 9, 8, 45,45, 90, 43, 12, 56, 90];

  const startTime = process.hrtime();
  const sortedArray = mergeSort(array);
  const endTime = process.hrtime(startTime);


  const sortingTime = endTime[0] * 1000 + endTime[1] / 1000000; // Convert to milliseconds
console.log(sortedArray);
console.log(sortingTime)