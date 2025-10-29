// creating a new number object using the Number() constructor.

let number = new Number();

// console.log(number);

let number1 = number.constructor(9);

// console.log(number1.toString());


// expotential : to convert the given number to exponential notation.

let raisedTo10 = number1.toExponential(2)
console.log(raisedTo10)

// toFixed()

let fixedTo2 = number1.toFixed(2);
console.log(fixedTo2)

let date = new Date();
console.log(`${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()} : ${date.getMilliseconds()}`);
console.log( date.getTime())