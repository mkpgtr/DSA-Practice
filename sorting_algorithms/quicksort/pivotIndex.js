function pivot (arr,start=0,end=arr.length+1){
    var pivot = arr[start];
    var swapIdx = start;

    function swap(array,i,j){
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    for (var i = start+1;i<arr.length;i++){
        if(pivot > arr[i]){
            swapIdx++;
            swap(arr,swapIdx,i)
        }
    }
    swap(arr,start,swapIdx);
    return swapIdx
}

console.log(quicksort([4,8,2,1,5,7,6,3,8,-8,3]))

function quicksort(arr,left=0,right=arr.length-1){
    if(left < right){

        
        let pivotIdx = pivot(arr,left,right);
        // left
        quicksort(arr,left,pivotIdx-1)
        //right
        quicksort(arr,pivotIdx+1,right)
        
    }

    return arr;
}