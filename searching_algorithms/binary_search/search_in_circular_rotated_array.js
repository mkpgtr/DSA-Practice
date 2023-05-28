function searchElement(arr, target) {
    let start = 0;
    let end = arr.length - 1;
  
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
  
      if (arr[mid] === target) {
        return mid; // Found the target element
      }
  
      // If the left half is sorted
      if (arr[start] <= arr[mid]) {
        if (target >= arr[start] && target < arr[mid]) {
          end = mid - 1; // Target is in the left half
        } else {
          start = mid + 1; // Target is in the right half
        }
      }
      // If the right half is sorted
      else {
        if (target > arr[mid] && target <= arr[end]) {
          start = mid + 1; // Target is in the right half
        } else {
          end = mid - 1; // Target is in the left half
        }
      }
    }
  
    return -1; // Element not found
  }
  
  // Example usage
  const arr = [4, 5, 6, 7, 0, 1, 2]; // Rotated version of [0, 1, 2, 4, 5, 6, 7]
  const target = 7;
  const index = searchElement(arr, target);
  console.log(index); // Output: 2 (index of the target element)
  