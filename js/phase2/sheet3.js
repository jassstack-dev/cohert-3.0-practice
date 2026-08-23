// ### Intermediate Question

// You are given an array of prices.

// Print each price with `"₹"` before it.

let prices = [100, 250, 399, 499];

prices.forEach((v)=>{
    console.log("₹"+v)
})

// ### Hard Question

// You are given an array of students.
let students = [
  { name: "Anubhav", marks: 85 },
  { name: "Rahul", marks: 42 },
  { name: "Aman", marks: 90 },
];

// Print:

// - `"Pass"` if marks are greater than 50
// - `"Fail"` otherwise

students.forEach((v)=>{
   if(v.marks >50){
    console.log(`${v.name} - Pass`)
   }else{
    console.log(`${v.name} - Fail`)
   }
})


// ### Intermediate Question

// Convert all names into uppercase.

let names = ["anubhav", "rahul", "aman"];

const newName = names.map((a)=>{
    return a.toUpperCase()
})

console.log(newName)

// Create a new array where:

// - Every product has a new property `discountPrice`
// - Discount is 10%

let products = [
  { name: "Laptop", price: 50000 },
  { name: "Phone", price: 20000 },
];

const newPrice =  products.map((a)=>{
    
    
    return {
        ...a,
        discountPrice: a.price - (a.price*10/100)
    }
})

console.log(newPrice)


// Filter all even numbers.

let nums = [1,2,3,4,5,6,7,8];


const nums11 = nums.filter((a)=>{

    return a%2 === 0;
})

console.log(nums11)

// Return only active users.
let users = [
  { name: "Anubhav", active: true },
  { name: "Rahul", active: false },
  { name: "Aman", active: true },
];


const activeUsers = users.filter((a)=>{
return a.active === true
})


console.log(activeUsers)

// Find total sum of array.
let numr= [10,20,30,40];

const nump = numr.reduce((total,num)=>{
   return total + num; 
},0)

console.log(nump)


// Count frequency of elements.

let fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];


let emptyObject  = {}

const fruitsFrequency = fruits.reduce((total, fruit)=>{
    if(total[fruit]){
        total[fruit]++
    }else{
        total[fruit] =1
    }

    return total;
},emptyObject)

console.log(fruitsFrequency)


// Find first number greater than 50.


let numpy = [20, 35, 60, 80];

const result = numpy.find((a)=>{
    return a > 50;
})

console.log(result)


// Find a user with username "admin".
let userS = [
  { username: "rahul" },
  { username: "admin" },
  { username: "aman" }
];

const adminUser = userS.find((u)=>{
    return u.username === "admin";
})

console.log(adminUser)


// Find index of number 90.
let A = [10, 40, 90, 50];

const aIndex = A.findIndex((a)=>{
    return a === 90;
})

console.log(aIndex)


// Find index of first failed student.
let student = [
  { name: "A", marks: 90 },
  { name: "B", marks: 30 },
  { name: "C", marks: 70 },
];

// Condition:

// - Failed if marks < 40

const failedStudent = student.findIndex((a)=>{
  return a.marks <40
});

console.log(failedStudent)


// Check if any number is negative.

let nu = [10, 20, -5, 40];

const negNum = nu.some((a)=>{
    return a <0;
})

console.log(negNum)


// Check if any product is out of stock.
let Products = [
  { name: "Laptop", stock: 5 },
  { name: "Phone", stock: 0 },
];


const outProducts = Products.some((s)=>{
    return s.stock === 0
})

console.log(outProducts)

// Check if all numbers are positive.
let numPositive = [10, 20, 30, 40];

let trueNUm = numPositive.every((b)=>{
    return b >0
})


console.log(trueNUm)

// check all student  is passed 
// passing marks - 40
let Students = [
  { name: "A", marks: 80 },
  { name: "B", marks: 45 },
  { name: "C", marks: 60 },
];

let passedStudents = Students.every((p)=>{
    return p.marks  >=40
})

console.log(passedStudents)