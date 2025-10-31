let arr = new Array([1, 2, 3, 4, 5]);
let arr2 = new Array([1, 2, 3, 4, 5]);
// printing values in an array
arr.forEach((item) => {
    console.log(item);
});

// at()

console.log(arr.at(2));

//concat().flat()

console.log(arr.concat(arr2).flat());

// copyWithin()

console.log(arr.copyWithin(1, 1, 4));


// every()

console.log( arr.every((item) => item > 0) ? 'all above 0' : "nothing");

// toString

console.log(arr.toString())


// sorted

console.log("reversed: " + arr.reverse())
// console.log(arr.toSorted())
