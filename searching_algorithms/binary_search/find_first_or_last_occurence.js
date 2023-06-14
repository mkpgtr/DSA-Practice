function findFirstOccurrence(arr, target) {
    let start = 0;
    let end = arr.length - 1;
    let result = -1;
  
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
  
      if (arr[mid] === target) {
        result = mid; // Update the result, but continue searching in the left half
        end = mid - 1;
      } else if (arr[mid] < target) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  
    return result;
  }
  
  // Example usage
  const arr = [1, 2, 3, 3, 3, 4, 5, 5, 6];
  const target = 5;
  const firstIndex = findFirstOccurrence(arr, target);
  console.log(firstIndex); // Output: 2
  