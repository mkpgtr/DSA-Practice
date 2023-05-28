const arr = [1,1,2,3,4,4,4,4,5,8,10,10]


function evenRepeatedNumbers(arr){

    let charCount = {}

    for(var i = 0; i < arr.length; i++){
        if(charCount[arr[i]] === undefined){
            charCount[arr[i]] = 1
        
        }
        else{
            charCount[arr[i]] += 1
        }
    }

    let repeated = []

 
    for(key in charCount){
        if(charCount[key]%2==0){
            repeated.push(key)
        }
    }

    return repeated
   

    return charCount
    
}

console.log(evenRepeatedNumbers(arr))