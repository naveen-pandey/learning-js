const accountId = 98765
let accountEmail = "naveen@google.com"
var accountPassword = "12345" 
accountCity = "Lucknow"

// accountId=2 // not allowed

accountEmail = "np@google.com"
accountPassword = "54321" 

accountCity = "Delhi"
let accountState;
console.log(accountId);

/* don't use var because of issue in block scope and functional scope */

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);