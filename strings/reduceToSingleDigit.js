function reduceToSingleDigit(number) {
    while (number >= 10) {
      let sum = 0;
      while (number > 0) {
        sum += number % 10;
        number = Math.floor(number / 10);
      }
      number = sum;
    }
    return number;
  }
  
  // Example usage:

  console.log(reduceToSingleDigit(888));