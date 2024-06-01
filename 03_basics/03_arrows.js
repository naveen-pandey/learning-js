const user = {
    username: "naveen",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to the website`); // this is used for current context
        console.log(this);
    }
}

// console.log(user.welcomeMessage) // [Function: welcomeMessage]
// //console.log(user.welcomeMessage()) // naveen, welcome to the website
//                                    // undefined
// user.welcomeMessage(); // // naveen, welcome to the website

// user.username = "sam"
// user.welcomeMessage() // sam, welcome to the website

// console.log(this) // {} , here this refers to empty object in node
// Browser ke andar global object is Window object because firstly JS was run in browsers
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()


// function chai() {
//     let username = "naveen"
//     console.log(this); // lot of things
//     console.log(this.username) // undefined
// }
// chai() 

const abc = () => {
    let username = "naveen"
    console.log(this); // {}
    console.log(this.username) // undefined
}
abc()


// const addTwo = (num1, num2) => {
//      return num1+num2;    // explicit return 
// }


// const addTwo = (num1, num2) => num1+num2 // implicit return, another way of writing function
    
// console.log(addTwo(3,4)); // 7


// const addTwo = (num1, num2) => (num1+num2) // another way, focus on round brackets, curly brackets require a return statement

const addTwo = (num1, num2) => ({username:"naveen"})  // object to be returned requires curly brackets
console.log(addTwo(3,4)); // { username: 'naveen' }

const myArray = [2, 5, 3, 7, 8]
myArray.forEach()