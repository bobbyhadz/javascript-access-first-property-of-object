// EXAMPLE 1 - Access the First Property of an Object in JavaScript

const obj = {one: '1', two: '2', three: '3'};

const firstValue = Object.values(obj)[0];
console.log(firstValue); // 👉️ '1'

// ------------------------------------------------------------------

// // EXAMPLE 2 - Access the First Property of an Object using Object.entries()

// const obj = {one: '1', two: '2', three: '3'};

// const entries = Object.entries(obj);

// // 👇️ [ [ 'one', '1' ], [ 'two', '2' ], [ 'three', '3' ] ]
// console.log(entries);

// const [firstKey, firstValue] = entries[0];
// console.log(firstKey); // 👉️ one
// console.log(firstValue); // 👉️ 1

// ------------------------------------------------------------------

// // EXAMPLE 3 - Access the First Property of an Object using `for...in`

// const obj = {one: '1', two: '2', three: '3'};

// let firstKey;

// for (const key in obj) {
//   firstKey = key;
//   break;
// }

// console.log(firstKey); // 👉️ one

// console.log(obj[firstKey]); // 👉️ 1

// ------------------------------------------------------------------

// // EXAMPLE 4 - Access the First Property of an Object using Object.keys()

// const obj = {one: '1', two: '2', three: '3'};

// const firstValue = obj[Object.keys(obj)[0]]; // 👉️ '1'
// console.log(firstValue);

// ------------------------------------------------------------------

// // EXAMPLE 5 - Access the First Property of an Object using `lodash.find()`

// import _ from 'lodash';

// const obj = {one: '1', two: '2', three: '3'};

// const firstKey = _.find(obj);
// console.log(firstKey); // 👉️ '1'
