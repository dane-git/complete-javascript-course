# Asynchronous javascript 

## Synchrounus example:
```javascript
const second = () => {
  console.log('Second');
}

const first = () => {
  console.log('first First');
  second();
  console.log('The End')
}

first();
```
## Asynchrounus example:

```javascript
const second = () => {
  setTimeout(() => {
    console.log('in second setTimeout');
  }, 2000);
};

const first = () => {
  console.log('first First');
  second();
  console.log('The End')
}

first();
```
### another asynchronous example
```javascript
const image = document.getElementById('img').src;

processLargeImage(image, () => {
  // this callback function is the asynchronous part and is executed after processLargeImage is done.
  console.log('Image Processed!')
});
```
## Why asynchronous code?
1. Allow asynchronous functions to run in the 'background'.
2. We pass in callbacks that run once the function has finished its work.
3. Move on immediately: NON-BLOCKING!

<hr />
## How does asynchronous code actually work?
### THE EVENT LOOP
 
