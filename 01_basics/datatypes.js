// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object


//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); // false

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "naveen",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId); //symbol
console.log(typeof outsideTemp); //object
console.log(typeof myFunction); //function but we call it Function object

// https://262.ecma-international.org/5.1/#sec-11.4.3


/////////////////////////////////////////////////////////////////////////////////////////////////

// Stack (in Primitive)  => copy milta hai
// Heap (in Non Primitive) => reference milta hai

let my = "dotcom"
let an = my
an = "hiii"
console.log(my); // dotcom
console.log(an); // hiii

let user1 = {
    email:"u@g.com",
    upi : "as@ybl"
}

let user2 = user1
console.log(user1); // { email: 'u@g.com', upi: 'as@ybl' }
console.log(user2); // { email: 'u@g.com', upi: 'as@ybl' }

user2.email = "idfs@m.com"
console.log(user1); // { email: 'idfs@m.com', upi: 'as@ybl' }
console.log(user2); // { email: 'idfs@m.com', upi: 'as@ybl' }
