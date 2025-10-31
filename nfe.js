let nameFunc = function findAndPrint() {
    let ab = "12345";
    return ab;

}


// findAndPrint() is available inside the declaration. and not outside the block.
let obj = new Object();


console.log(typeof Object.getOwnPropertyDescriptors(obj))
console.log(nameFunc())