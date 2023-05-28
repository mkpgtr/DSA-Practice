// function mergeTwoSortedArrays(a,b){
    
//     var merged = [],
//     aElem = a[0],
//     bElem = b[0],
//     i=1,
//     j=1;

//     if(a.length===0){
//         return b;
//     }
//     if(b.length===0){
//         return a;
//     }

//     while(aElem || bElem){
//         if((aElem && !bElem) || aElem < bElem){
//             merged.push(aElem)
//             aElem = a[i++]
//         }
//         else{
//             merged.push(bElem)
//             bElem = b[j++]
//         }
//     }

//     return merged
// }

// console.log(mergeTwoSortedArrays([1,2,5,3,0],[9,3,6,420,4]))



//manually

function mergeTwoSortedArrays(a,b){
    const merged = [];

    let i = 1;
    let j= 1;

    let aElem = a[0];
    let bElem = b[0];

    if(a.length===0){
        return b
    }

    if(b.length===0){
        return a
    }

    while(aElem || bElem){
        if((aElem && !bElem) || aElem < bElem){
            merged.push(aElem)
            aElem = a[i++]
        }
        else{
            merged.push(bElem)
            bElem = b[j++]
        }
    }

    return merged
}

console.log(mergeTwoSortedArrays([4,39,6,5],[3,5,2,4,5]))