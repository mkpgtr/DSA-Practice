
function reverse(str){

    let len = str.length;
    let i = len - 1
    let word = ''
  
 
    while(i >= 0){
        word+=str[i]
        i--
    }


    return word
}




function first10CharsWithLastWord(str){

let lastWord = ''

let i = str.length - 1


while(str[i]!==" "){
    lastWord+=str[i]
    i--
  }


   
 return reverse(lastWord)
  
}

function first10Chars(sentence){
    let i = 0;
  
    
    let chars = ''
    while(i <= 10){
        if(sentence[i]!==" "){
          
            chars += sentence[i]
        }
        i++;
    }

    return chars

}



let sentence = 'there was a gold fish in the local village pond'

console.log(first10Chars(sentence) + first10CharsWithLastWord(sentence))