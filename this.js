let obj1 = {
    name: "walter",
    sayMyName() {
        console.log(`the name is ${this.name}!`);
    }
}

let obj2 = {
    name: "walter2",
}

let callingWalter = obj1.sayMyName.bind(obj1);

console.log(callingWalter());

console.log(obj1.sayMyName.apply(obj2));