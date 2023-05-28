function isPalindrome(string){
    let str = string.toLowerCase()
    var i, len = str.length;
    for(i =0; i<len/2; i++){
      if (str[i]!== str[len -1 -i])
         return false;
    }
    return true;
  }

String.prototype.removeSpaces =function(){
    var str = this
    var newStr = []

    for(i=0;i<str.length;i++){
        if(str[i] !== " "){
            // isse saare letters ek array me aa jayenge alag alag elements bankar
            // 
            newStr.push(str[i])
        }
    }
    
// aur yahan par hum commas ko remove karte hain
   return newStr.join('').replace(/,/g, '')

}

// console.log(isPalindrome('madam'))

let myString = 'A Santa dog lived as a devil god at NASA' 



function checkPalindrom(str) {
    return str === str.split('').reverse().join('').toLowerCase();
}
console.log(isPalindrome(myString.removeSpaces())) //true

console.log(checkPalindrom(myString))