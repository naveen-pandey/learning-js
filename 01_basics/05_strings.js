const name = "naveen"
const repoCount = 50

 // console.log(name + repoCount + " Value"); // naveen50 Value

  
 /*string interpolaion*/ 
 console.log(`Hello my name is ${name} and repo count is ${repoCount}`)  //Hello my name is naveen and repo count is 50

const gameName = new String('naveen-com')
console.log(gameName[0]); // n
console.log(gameName.__proto__); // {}

console.log(gameName.length); // 10
console.log(gameName.toUpperCase()); // NAVEEN-COM
console.log(gameName.charAt(2)); // v
console.log(gameName.indexOf('t')); // -1


const newString = gameName.substring(0, 4)
console.log(newString); // nave

const newString1 = gameName.slice(0, 4)
console.log(newString1); // nave

const newString2 = gameName.slice(-8, 4) // only in slice we can give negative values
console.log(newString2); // ve


const newStringOne = "   naveen    "
console.log(newStringOne); //   naveen
console.log(newStringOne.trim()); // naveen

const url = "https://naveen.com/naveen%20pandey" //https://naveen.com/naveen-pandey

console.log(url.replace('%20', '-')) // 

console.log(url.includes('mee')) // false

console.log(gameName.split('-')); // [ 'naveen', 'com' ]  returns an array