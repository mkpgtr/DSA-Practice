

function findFrequency(arr){
    const count = {};

    if(typeof(arr)==='string'){
      
        arr = arr.split('')
    }

    arr.forEach(e => count[e] ? count[e]++ : count[e] = 1 );

    return count

}


function removeSpaces (str){

    return str.replace(/\s/g, '')
}

// console.log(removeSpaces('new delhi is the capital of INdia'))
const myString = '  new delhi is the capital of india   ...'
console.log(myString.trim())
console.log(myString)