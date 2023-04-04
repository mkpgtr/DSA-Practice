const givenArray = [4,3,13,2,12,7,23]

const k = 4

// output with givenArray and k=4 should be 7 because 7 is the 4th smallest element in the array

const sortedArray = givenArray.sort((a,b)=>a>b)

console.log(sortedArray[k-1])