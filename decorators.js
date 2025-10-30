/*
* Note: For changing behaviour of class, properties, or providing metadata.
*
*/


// the decorator function takes in 3 values,: key - val - descriptor : propertyDescriptor ( Object.getOwnPropertyDescriptor)

function wrapper(key, val, descriptor){
    console.log(key, val, descriptor);
    return descriptor;
}

class decorated {
    @wrapper
    decoratedFunc() {
        console.log("decorated");
    }
}


let decoratedFuncObj = new decorated();
decoratedFuncObj.decoratedFunc();


/*
xxxxxxxxxxxx---------xxxxxxxxxxxxxxxxx---------------xxxxxxxxxxxxxxx-----
    NO NATIVE IMPLEMENTATION OF DECORATORS IN JS ( BROWSER AND ALSO IN NODE ), CURRENTLY IN REVIEW OF
    STANDARDISING THE SYNTAX: BUT SUPPORTED IN TS/ OR OTHER TRANS-PILERS.
 */