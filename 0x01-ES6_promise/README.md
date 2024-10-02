# ES6 Promises

## Promise objects

### Creating a Promise

A Promise can be created using the `Promise` constructor:

```javascript
const myPromise = new Promise((resolve, reject) => {
    // asynchronous operation
    if (/* success */) {
        resolve('Success!');
    } else {
        reject('Failure!');
    }
});
```

### Using `.then()` and `.catch()`

The `.then()` method is used to handle the resolved value of a Promise, while `.catch()` handles any errors:

```javascript
myPromise
    .then((value) => {
        console.log(value); // Success!
    })
    .catch((error) => {
        console.error(error); // Failure!
    });
```

### `Promise.all()`

`Promise.all()` takes an array of Promises and resolves when all of them resolve, or rejects if any of them reject:

```javascript
Promise.all([promise1, promise2, promise3])
    .then((values) => {
        console.log(values); // [value1, value2, value3]
    })
    .catch((error) => {
        console.error(error);
    });
```

### `Promise.race()`

`Promise.race()` takes an array of Promises and resolves or rejects as soon as one of them resolves or rejects:

```javascript
Promise.race([promise1, promise2, promise3])
    .then((value) => {
        console.log(value); // First resolved value
    })
    .catch((error) => {
        console.error(error); // First rejected error
    });
```

## Async/Await

### What are `async` and `await`?

The `async` and `await` keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains.

### Using `async` and `await`

The `async` keyword is used to declare an asynchronous function. The `await` keyword is used to wait for a Promise to resolve or reject within an `async` function.

#### Example

```javascript
async function fetchData() {
    try {
        let response = await fetch('https://api.example.com/data');
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}

fetchData();
```

In this example, `fetchData` is an asynchronous function that waits for the `fetch` call to complete and then processes the response. If an error occurs, it is caught and logged.
