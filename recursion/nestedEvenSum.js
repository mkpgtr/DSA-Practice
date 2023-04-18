const obj1 = {
    outer: 2,
    obj: {
      inner: 2,
      otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: "sup"
      }
    }
  }

  function nestedEvenSum (obj) {
    var keys = Object.keys(obj);
    var result = 0;
    // for (var i = 0; i < keys.length; i++) {
    //     var val = obj[keys[i]];
    //     if (typeof val === "number" && val % 2 === 0) {
    //         result += val;
    //     } else if (val instanceof Object && Object.keys(val).length > 0) {
    //         result += nestedEvenSum(val);
    //     } else {
    //         // Ignore all other values
    //     }
    // }

    for(key of keys){
        let val = obj[key]
        // ! check type and also check if it is even
        if (typeof val === "number" && val % 2 === 0) {
                    result += val;
                }
                // ! if there is a property and that property is an object and also has atleast one key
        else if(val instanceof Object && Object.keys(val).length > 0){
            result = result + nestedEvenSum(val);

        }else{
            // ! this else part can also be thought of as the base case
            console.log('object is empty so return the result computed until now')
            return result
        }
    }
    return result;
}
  const res = nestedEvenSum(obj1)

  console.log(res)