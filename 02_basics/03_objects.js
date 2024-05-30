// literal se singleton nahi banta
// constructor se jab bhi banega to singleton banega

Object.create  // constructor method, isme singleton banega


// object literals
const learnobj = {} // empty object 

const mySym = Symbol("key1")
//console.log(mySym) // Symbol(key1)


const JsUser = {
    name: "Naveen",
    "full name": "Naveen Pandey",  
    [mySym]: "mykey1",  // [mySym] is a syntax to use symbol as a key in object
    age: 18,
    location: "Lko",
    email: "naveen@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)  // naveen@google.com
// console.log(JsUser["email"])  // naveen@google.com
// console.log(JsUser["full name"])  // Naveen Pandey
// console.log(JsUser[mySym]) // mykey1

JsUser.email = "naveen@chatgpt.com"
// Object.freeze(JsUser) // no more changes in JsUser allowed after freezing
//console.log(JsUser)
JsUser.email = "naveen@microsoft.com"
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting); // [Function (anonymous)]

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());