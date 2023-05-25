String.prototype.manishWalaReverse = function (){
    if(!this || this.length <2) return this;
    
    return this.split('').reverse().join('');
  }

let str = 'kuch bhi random sa string'


// yeh mera khudka reverse function hai 
console.log(str.manishWalaReverse())