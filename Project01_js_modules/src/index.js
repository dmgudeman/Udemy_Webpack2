
// // const sum = require('./sum');  // this is the commonJS system
// import sum from './sum';  // this is ES2015 module system
// import './image_viewer';  // no 'from' because 1. there is no 'exports' on that module and 2. all it does is execute
//                           // code - it does not export a function or variable etc.
// const total = sum(10,5);

// console.log(total);

const button = document.createElement('button');
button.innerText = 'Click me';
button.onclick = () => {
    System.import('./image_viewer').then(module => {
        // console.log(module);
        module.default();
    });
};

document.body.appendChild(button);