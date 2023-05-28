function isPrime(num){
    if(num <= 1) return false

    for(let i = 2;i<=Math.sqrt(num);i++){
        if(num%i===0){
            return false
        }
    }

    return true
}

function displayPrimeNumbers(n) {
    for (let i = 2; i <= n; i++) {
      if (isPrime(i)) {
        console.log(i);
      }
    }
  }

displayPrimeNumbers(100)