function square(number) {
    // Using Math.pow()
    const result = Math.pow(number, 2);
    return result;
  
    // Alternatively, using multiplication
    // const result = number * number;
    // return result;
  }
  
  // Example usage
  const num = 5;
  const squared = square(num);
  console.log(squared);