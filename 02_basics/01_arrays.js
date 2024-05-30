// arrays


const myArr = [0, 1, 2, 3, 4, 5]  // js array copy operations create shallow copies
const myHeros = ["dhruv", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]); // 1

// Array Methods
// myArr.push(6);
// console.log(myArr); 
// myArr.push(7);
// console.log(myArr);
// myArr.pop();
// console.log(myArr);

// myArr.unshift(9) // adds 9 to the beginning of array
// console.log(myArr)
// myArr.shift() // removed 9 from the beginning of array
// console.log(myArr)


// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

//  console.log(myArr); // [ 0, 1, 2, 3, 4, 5 ]
//  console.log( newArr); // 0,1,2,3,4,5   this is a String now


//  slice, splice

console.log("A", myArr) // A [ 0, 1, 2, 3, 4, 5 ]

const myn1 = myArr.slice(1, 3) 
console.log("B ", myn1);  //  B [1,2]
console.log(myArr); // [ 0, 1, 2, 3, 4, 5 ]

const myn2 = myArr.splice(1, 3)
console.log(myn2); // [1,2,3]
console.log(myArr); // [0,4,5] // splice manipulates the original array whereas slice doesn't
