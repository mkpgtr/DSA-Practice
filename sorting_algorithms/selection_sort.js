const {array} = require('./array_elements')
function selectionSort(arr) {
    const len = arr.length;
  
    for (let i = 0; i < len - 1; i++) {
      let minIndex = i;
  
      for (let j = i + 1; j < len; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
  
      if (minIndex !== i) {
        // Swap elements
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      }
    }
  
    return arr;
  }
  
  
  const startTime = process.hrtime();
  const sortedArray = selectionSort(array);
  const endTime = process.hrtime(startTime);
  
  console.log(sortedArray);

  const sortingTime = endTime[0] * 1000 + endTime[1] / 1000000; // Convert to milliseconds
console.log(sortedArray);
console.log(sortingTime)


  