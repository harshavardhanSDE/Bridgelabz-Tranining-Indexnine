# Language Documentation ( TS );

## Types

### Primitive Types
#### Boolean

```typescript
let authenticated: boolean = true
```

#### `number`

```typescript
let noOfUsers: number = 100;
```

#### `string`

```typescript
let nameOfUser: string = "feynman";
```
> Note: Each character represented in a 16 bit Unicode.

#### `void` & `undefined`
```typescript
const voidFunction = () => {
    return;
}

const returnTypeOf = voidFunction()
console.log(typeof(returnTypeOf));
```
> "undefined"

> usage of `void` <br>
> `void` represents the return type of the function, indicating that the returned value to be ignored.

```typescript
function returnWithVoid(): void {
    return;
}

let toShowVoidReturn = returnWithVoid();
console.log(typeof(toShowVoidReturn));
```


