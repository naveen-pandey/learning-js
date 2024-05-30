function sayMyName() {
    console.log("N");
    console.log("A");
    console.log("V");
    console.log("E");
    console.log("E");
    console.log("N");
}

sayMyName();

// function addTwoNumbers(num1, num2) {
//     console.log(num1+num2);
// }
// addTwoNumbers(2,3); // 5
// addTwoNumbers(2,"3"); // 23
// addTwoNumbers(2,"a"); // 2a



// const result = addTwoNumbers(3, 5)

//  console.log("Result: ", result); // Result undefined


//  function addTwoNumbers(num1, num2) {
//     const result = console.log(num1+num2);
//     return result;
//  }

//  addTwoNumbers(2,3) //5


// function loginUserMessage(username) {
//     return `${username} just logged in`
// }

// console.log(loginUserMessage("naveen")) // naveen just logged in
// console.log(loginUserMessage()) // undefined just logged in


function loginUserMessage(username = "np") {
    return `${username} just logged in`
}
console.log(loginUserMessage("naveen")) // naveen just logged in  // value np was overwritten by naveen



