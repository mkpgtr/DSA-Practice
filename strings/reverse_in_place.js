function reverseInPlace (sentence){


    // console.log(sentence.split(' '))

    let str = sentence.split(' ')

    let reversedInPlace = []

    let currentWord = str[0]

    let revWord = ''

    for(let i = 0; i < str.length; i++){
        
       currentWord = str[i]

       for(let j= currentWord.length - 1; j>=0;j--){
        revWord+=currentWord[j]
       }

       reversedInPlace.push(revWord)
       revWord = ' '

    }

    return reversedInPlace
}

console.log(reverseInPlace('I am the good boy'))