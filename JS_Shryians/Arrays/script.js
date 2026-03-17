// let arr = [1, 2, 3, 4, 5];
// arr.shift();

// -----------------------------------------------

// let arr2 = [1, 2, 3, 4, 5];
// arr2.unshift(10);


// --------------------------------------

// let arr2 = [1, 2, 3, 4, 5];
// let newArr = arr2.slice(0, 3);


// ------------------------------------------

// let arr = [1, 2, 3, 4, 5];
// arr.reverse();


// -----------------------------------------------
// SORT numbers in ascending order.
// let arr = [11, 62, 3, 4, 25];
// let sr = arr.sort(function (a, b) {
//     return a - b;
// });


// ------------------------------------------------
// SORT NUMBERS IN DESCENDING ORDER
// let arr = [11, 62, 3, 4, 25];
// let sr = arr.sort(function (a, b) {
//     return b - a;
// });


// ---------------------------------------------------------------


// MAP - 
// let arr = [11, 62, 3, 4, 25]
// let newarr = arr.map(function (val) {
//     return 12
// })
// console.log(newarr); // 12 12 12 12 12



// let arr = [11, 62, 3, 4, 25];
// let newarr = arr.map(function (val) {
//     if(val > 10) return val;
// })
// console.log(newarr);

// --------------------------------------------------------------

// let arr = [1, 2, 3, 4, 5, 6];
// let ans = arr.reduce(function(accumulatoor , val) {
//     return accumulatoor + val;
// }, 0);

// console.log(ans);   //21


// --------------------------------------------------------------------------
// let arr = [1, 2, 3, 1, 4, 5, 6];

// let va = arr.find(function (val) {
//     return val === 1;
// })

// console.log(va);    //1

//------

let arr = [
    { id: 1, key: 1 },
    { id: 2, key: 2},
    { id: 3, key: 1},
];

let va = arr.find(function (val) {
    return val.key === 1;
})

console.log(va);