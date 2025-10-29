# Notes : `.this` keyword;

Def: The `this` keyword is a hidden parameter provided by the compiler,

## Outcomes/ Goals
1. Understanding usage of `this` in various scopes.
2. understanding behaviours of `call()`, `apply()`, and `bind()` methods of function prototypes.
3. Behaviours of `this` in `"use strict"` directive.
4. 

## invocation
1. The value of `.this` keyword depends on how the function is invoked, and not how it is defines.

```javascript
let obj = {
    val : 10,
    someFunc() {
        return this.val;
    }
}

console.log(obj.someFunc()) //out: 10, getting the value form 'val' prop

```
Above is an example of calling `this` with object.




## usage of `.this` in various scopes;
### 1. Normal function
1. When invoked in a normal defined, standalone function not in an object, `this` returns to the global object (non-strict), such as window ( in browser env) and `undefined` in strict mode (directive) or runtime in ( node env).

### 2. arrow function


diff: 
the difference in return of `this` in formal and arrow function, is for the reason that, in formal function it is by default global scoped, but the return of arrow is due to the fact that it inherits the value of `this` from parent scope which in here is the global object.

## usage of `bind()`, `apply()` and `call()` to binding scopes
1. 