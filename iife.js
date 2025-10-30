// iife: immediate invocation of function expression

// this -> in context of iife.
(
    function(){
        console.log(this) //undefined
    }
)();


// this in object;

let obj = {
    "name" : "heisenberg",
    func () {
        console.log(this.name);
    },
};

// using apply/call/bind
(
    function(){
        console.log(this.name);
    }
).apply(obj); //heisenberg

(
    function(){
        console.log(this.name);
    }
).call(obj); //heisenberg


(
    function(){
        this.func();
    }

).bind(obj)(); //heisenberg


// using arrow functions in iife and `this`;

// (
//     () => {
//         console.log(this.name);
//     }
// ).bind(obj)();


/*
* -----------------------*--------------------*-------------------------------
* Note: using bind/apply/call to arrow function doesn't supply the `this` binding.
*/






