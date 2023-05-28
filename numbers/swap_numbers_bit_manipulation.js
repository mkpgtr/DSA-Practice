function swapNumb(a,b){

    console.log("a: " + a + " and b: " + b);
  a = a ^ b;
  b = a ^ b;
  a = a ^ b;
  console.log("a: " + a + " and b: " + b);

   

}

console.log(swapNumb(-3,4))