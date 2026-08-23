// ### 1. Create an Object

// Create an object for a student with:

// - name
// - age
// - course

// Then print all values.


student = {
    name: "vimal",
    age:24,
    course: "cohert 3.0"
}

console.log(student)


// 2. Access Properties

// Print:

// - brand
// - model
// using both:

// - dot notation
// - bracket notation

const car = {
  brand: "BMW",
  model: "M4",
  year: 2022
}

console.log(car.brand,car.model)
console.log(car['brand'], car['model'])

// Change the age of a user from 20 to 25.

const user = {
  name: "Anubhav",
  age: 20
}

user.age = 25
console.log(user)

// Add a new property:
//isAdmin: true

user.isAdmin =  true

console.log(user)


// Remove the password property from the object.
const account = {
  username: "john",
  password: "12345"
}

delete account.password
console.log(account)

// Write a function that returns how many properties an object has.

// 3

function countProperties(a){
    return Object.keys(a).length;
}

console.log(countProperties({a:1,b:2,c:3}))

// Print all keys and values from this object.
const person = {
  name: "Rahul",
  age: 22,
  city: "Delhi"
}

for(let val in person){
    console.log(val)
}

// Check whether "email" exists inside an object or not.
if(Object.keys === "email"){
    console.log("exist")
}else{
    console.log('not exited')
}

// merge two object in the one 
const obj1 = { a: 1, b: 2 }
const obj2 = { c: 3, d: 4 }

const obj3 = {...obj1, ...obj2}
console.log(obj3)


// convert object to  an array
const User = {
  name: "Aman",
  age: 21
}

console.log(Object.entries(User))


// 11. Find Highest Value

const marks = {
  Anubhav: 95,
  Rahul: 82,
  Aman: 90
}

console.log(Math.max(...Object.values(marks)))