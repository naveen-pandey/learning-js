// Date

let mydate = new Date();
// console.log(mydate); // 2024-05-29T05:35:12.090Z
// console.log(mydate.toString()); // Wed May 29 2024 11:05:12 GMT+0530 (India Standard Time)
// console.log(mydate.toDateString()); // Wed May 29 2024
// console.log(mydate.toLocaleString()); // 5/29/2024, 11:05:12 AM
// console.log(typeof mydate); // object


//let myCreatedDate = new Date(2023, 0, 23)
//console.log(myCreatedDate.toLocaleDateString()); // 1/23/2023 months start from 0
//let myCreatedDate1 = new Date(2023, 12, 23);  // 1/23/2024

// let myCreatedDate = new Date(2023, 0, 23, 5, 3);  // 1/23/2023, 5:03:00 AM
// let myCreatedDate = new Date("2023-01-14");  // 1/14/2023, 5:30:00 AM
// let myCreatedDate = new Date("01-14-2023");  // 1/14/2023, 12:00:00 AM
// console.log(myCreatedDate.toLocaleString()); 

// let myTimestamp = Date.now();
// console.log(myTimestamp); // 1716961668146 time in ms since epoch time
// console.log(myCreatedDate.getTime()); // 1673634600000
// console.log(Math.floor(Date.now()/1000)); // 1716961916  time in sec


let newDate = new Date()
console.log(newDate); // 2024-05-29T05:55:56.095Z
console.log(newDate.getMonth() + 1); // 5   as in May month
console.log(newDate.getDay()); // 3  Mon-1 Tue-2 Wed-3

// `${newDate.getDay()} and the time `


console.log(newDate.toLocaleString('default', {
    weekday: "long",
    timeZoneName: "long"
})) // Wednesday, India Standard Time

console.log(newDate.toLocaleString('default', {
    weekday: "narrow"
})) // W

console.log(newDate.toLocaleString('default', {
    weekday: "short"
})) // Wed
