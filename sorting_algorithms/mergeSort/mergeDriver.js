const {array} = require('./array_elements')
const mergeSort = require('./mergeSort')

  
  

  const startTime = process.hrtime();
  const sortedArray = mergeSort(array);
  const endTime = process.hrtime(startTime);


  const sortingTime = endTime[0] * 1000 + endTime[1] / 1000000; // Convert to milliseconds
console.log(sortedArray);
console.log(sortingTime)