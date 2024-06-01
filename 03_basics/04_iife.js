// Immediately Invoked Function Expressions (IIFE)


(function barfi() {  //named IIFE, name is barfi
    console.log('DB connected')
})();  // ; here is must to end the context, now the below function will work
// this runs successfully showing DB connected


//()() //first () is function definition and second () is for execution call

// Global scope ke pollution ko hatane ke liye IIFE ka use kia

( () => {
    console.log("DB Connected")
})();

( (name) => {
    console.log(`DB Connected ${name}`)
})('naveen') // DB Connected naveen