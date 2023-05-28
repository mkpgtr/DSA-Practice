function countRotations(arr, n)
{
    // We basically find index of minimum
    // element
    let min = arr[0], min_index = 0
    for (let i = 0; i < n; i++)
    {
        if (min > arr[i])
        {
            min = arr[i];
            min_index = i;
        }
    }
    return min_index;
}

// Driver Code
 
let arr = [15, 18, 2, 3, 6, 12];
let n = arr.length;

console.log(countRotations(arr,n))