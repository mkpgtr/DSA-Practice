const { mostDigits, getDigit } = require("./HelperMethods");

function radixSort (nums){
    let maxDigitCount = mostDigits(nums)
    for ( let k = 0; k < maxDigitCount; k++){
        let digitBuckets = Array.from({length : 10},()=> []);
         for (let i = 0; i < nums.length;i ++){
            let digit = getDigit(nums[i],k)
            digitBuckets[digit].push(nums[i]);
         }
         nums = [].concat(...digitBuckets);
    }

    return nums;
} 



console.log(radixSort([53,354,53030,44303,443,24]))