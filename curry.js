function main( toprocessFunc) {
    return (input1) => {
        return ( input2) => {
            return toprocessFunc(input1, input2)
        }
    }
}

function add(a, b) {
    return a + b;
}
console.log(main(add)(12)(14));
