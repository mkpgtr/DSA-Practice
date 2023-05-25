function recursionReverse(myString){


    if(myString==='') return ""

    else return recursionReverse(myString.substr(1) ) + myString.charAt(0)
}

console.log(recursionReverse('hello world'))


