function reverse(myString){
    if (myString === "") // This is the terminal case that will end the recursion
    return "";
  
  else
    return reverse(myString.substr(1)) + myString.charAt(0);
}

console.log(reverse('angry birds')) //sdrib yrgna