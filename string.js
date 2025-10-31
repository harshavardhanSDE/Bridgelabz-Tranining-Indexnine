let s = new String("This is a string");
let s2 = new String("this ia a 2nd string");

let stringWithSpaces = "   this with beginning and end with space       "
// priting a character at some index
console.log(s.charAt(8));
console.log(s[8]);


// printing length

console.log(s.length)

// printing the code of character a specified index
console.log(s.charCodeAt(0));

// concating two string
console.log( s.concat(s2));


// checking if a string ends with
console.log( s.endsWith("g") ? `the string ends with g` : `the string does not ends with g`);


// checking if a string has a specified substring

console.log( s.toLowerCase().includes("this") ? "the string includes 'this' " : "not with 'this'");

// trim

console.log(s.trim().toUpperCase());

// with symbol iterator

let iterator = s[Symbol.iterator]();

for ( let iter of iterator ) {
    console.log( iter );
}

