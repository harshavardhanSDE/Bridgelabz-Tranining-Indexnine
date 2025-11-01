let obj = {
    "name" : "heisenberg",
    "age" : 60,
    "occupation" : "teacher"
};

let descriptor = Object.getOwnPropertyDescriptor(obj, "age");
console.log(descriptor.value);

// adding property

Object.defineProperty(obj, "name", {

})

console.log(obj)


// creating props in obj,


let nullObj = {}

Object.defineProperty(obj, "age", {
    value: 60,
    enumerable: true,
    configurable: true,
    writable: true
})

console.log(nullObj);


// sealing methods
// isExtensible(), isFrozen(), isSealed()
// preventExtensions(), freeze(), seal()
// getOwnPropertyDescriptor(obj, "prop", { props: value, writable, configurable, enumerable})
// defineProperty(), defineProperties()

// changing properties of mulitple props

Object.defineProperties(obj, {
    name: { value: "john"},
    age: { value: 30 },
})

console.log(obj);


let descriptors = Object.getOwnPropertyDescriptors(obj)
console.log(descriptors);