let firstArray = [3,7,12,34,56,90]

let secondArray = [20,30,40,50]


let data3 = []

for(i=0;i<firstArray.length;i++){
    data3[i]=firstArray[i]
}

for(i=0;i<secondArray.length;i++){
    data3[firstArray.length+i]=firstArray[i]
}

console.log(data3);