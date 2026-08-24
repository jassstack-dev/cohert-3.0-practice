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

let highestMarks = Math.max(...Object.values(marks))

const name = Object.keys(marks).find(
    key => marks[key] === highestMarks
)

console.log(name)

// find total salary 
const salaries = {
  john: 1000,
  alex: 2000,
  bob: 1500
}

const salariesSum = Object.values(salaries).reduce((tot, num)=>{
    return tot + num
},0)

console.log(salariesSum)


// print city, pincode

const users = {
  name: "Anubhav",
  address: {
    city: "Bhopal",
    pincode: 462001
  }
}

console.log(users.address.city)
console.log(users.address.pincode)

// Create an object with:

// - name
// - marks
// - method called `getResult`

const employee = {
    name: "vimal",
    marks : 56,
    getResult : function(){
        return this.marks >40 ? "pass" : "Failed"
    }
}

console.log(employee.getResult())


// convert array to in object
const arr = [["name", "Anubhav"], ["age", 24]]

let obj = Object.fromEntries(arr)
console.log(obj)


// Count frequency of each character.

const veer = "veera"

const freq = {};

for(let char of veer){
    if(freq[char]){
        freq[char]++
    }else{
        freq[char] = 1
    }
}

console.log(freq)


// Group users by age.

const Users = [
  { name: "A", age: 20 },
  { name: "B", age: 21 },
  { name: "C", age: 20 }
]

const result = {}

for(let user of Users){
    if(!result[user.age]){
        result[user.age] = []
    }
        result[user.age].push(user)
    
}

console.log(result)


// Check whether this property exists:
// "user.address.city"
// inside an object dynamically.
// Hint:
// Use:
// split(".")

const bro = {
    friend : "rahul",
    address: {
        city : "aligarh",
        pin : "3567378"
    }
}

const property = "address.city";

let keys = property.split(".")

let current = bro;

for (let key of keys) {
    if (key in current) {
        current = current[key];
    } else {
        console.log(false);
        break;
    }
}

console.log(true);


// Check if two objects have same keys and values.

const a = {a:1,b:2}
const b = {a:1,b:2}

// i cant solve it right now bcz samajh ni aa rha how am i solve it  



// Remove duplicate objects from array based on id.
const id = [
  {id:1,name:"A"},
  {id:2,name:"B"},
  {id:1,name:"A"}
]

const ids = {}

for(let key of id){
    if(ids[id.key]){
        ids[id.key]++
    }else{
        ids[id.key] = 1
    }
}

console.log()

//