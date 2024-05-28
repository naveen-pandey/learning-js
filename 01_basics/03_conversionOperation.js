let score = 33

console.log(typeof score); //number
console.log(typeof (score)); //number

let score1 = "33"

console.log(typeof score1); //string
console.log(typeof (score1)); //string

let valueInNumber = Number(score1);
console.log(typeof valueInNumber); //number


let score2 = "33abc"
let valueInNumber1 = Number(score2)
console.log(typeof valueInNumber1); //number
console.log(valueInNumber1) //NaN

let score3 = null
let score4 = undefined
let valueInNumber2 = Number(score3)
let valueInNumber3 = Number(score4)
console.log(typeof valueInNumber2) //number but value=0
console.log(typeof valueInNumber3) //number but value=NaN

let score5 = true
let valueInNumber4 = Number(score5)
console.log(typeof valueInNumber4) //number but value=1


// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = 1 
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn); //true, if "" then false
console.log(typeof booleanIsLoggedIn); //boolean

// "" => false
// "naveen" => true
