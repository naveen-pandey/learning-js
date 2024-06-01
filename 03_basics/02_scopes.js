
// var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a); // 10
    
}

// var is no longer used because of scope issues

// console.log(a); // 300
// console.log(b); 
// console.log(c);  


function one(){
    const username = "naveen"

    function two(){
        const website = "google"
        console.log(username);
    }
   // console.log(website); //  website not defined, out of scope

   // two()

}

one()

if (true) {
    const username = "naveen"
    if (username === "naveen") {
        const website = " youtube"
        console.log(username + website); // naveen youtube
    }
    // console.log(website); // website not defined, out of scope
}

// console.log(username); // username not defined, out of scope


// // ++++++++++++++++++ interesting ++++++++++++++++++


// console.log(addone(5)) // 6

function addone(num){
    return num + 1
}

addone(6)

// addTwo(5) // cannot access addTwo before initialization

const addTwo = function(num){  // addTwo here can also be called as expressions, variables are too powerful in JS
    return num + 2
}
