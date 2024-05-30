// const tinderUser = new Object()  // singleton object
const tinderUser = {}  // non singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

 // console.log(tinderUser); // { id: '123abc', name: 'Sammy', isLoggedIn: false }

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "naveen",
            lastname: "pandey"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// console.log(obj3)  // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

const obj3 = Object.assign({}, obj1, obj2, obj4)
// console.log(obj3) // { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

// const obj3 = {...obj1, ...obj2} // { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }
// // console.log(obj3);


// const users = [
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
// ]

// users[1].email
// // console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // return type is array giving keys of tinderUser object
// console.log(Object.values(tinderUser));  // return type is array giving values of tinderUser object
// console.log(Object.entries(tinderUser)); // [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

// // console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "naveen"
}

// course.courseInstructor

const {courseInstructor: instructor} = course  //  courseInstructor is alias as instructor

//console.log(courseInstructor);
console.log(instructor); // naveen

// {
//     "name": "np",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {}, 
    {}
]
 