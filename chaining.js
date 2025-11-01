let obj = {
    "name" : "something",
    "age" : 15,
    "val": 0,
    funcWithChain() {
        return "something chained";
    },
}


// WHEN NOT TO USE OPTIONAL CHAINING:
/*
* 1. Do not try to assign values to the result of an optional chaining
* 2. using string literals
* 3. Cannot be used in 'new' constructor. => new something?.data;
*
* */




console.log(obj?.name)

// returns undefined, as there is no "something" prop in obj;
console.log(obj?.something);


/*
* using
* obj.first && obj.first.second vs obj?.first, obj?.second
*
*
*
* optional chaining cannot be used in undeclared variables,
* */

let someval = obj?.val;
console.log(someval);


/*
* Optional chaining in function
* */

let chainedFunc = obj.funcWithChain?.();
console.log(chainedFunc);

/*
* chaining in expression
* */

const propName = "name";
console.log(obj?.[propName]);


// NOTE: if the left-hand value of ?. is 'null' or 'undefined' the expression will not be evaluated.

// using optional chaining with nullish coalescing

let name = obj?.val ?? "no name";
console.log(`name: ${name}`);