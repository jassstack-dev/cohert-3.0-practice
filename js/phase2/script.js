// Create a function named greet that prints "Hello World".

function greet(){
    console.log("hello world")
}

greet()


// Create a function add(a, b) that returns the sum.

function add(a,b){
    return a+b;
}

console.log(add(3,6))

// Write a function to calculate the square of a number.

function sqrt(a){
    return a*a
}

console.log(sqrt(6))

// Create a function that checks whether a number is even or odd.

function find(a){
    if(a%2 === 0){
        return 'even number'
    }else{
        return "odd number"
    }
}

console.log(find(10))
console.log(find(15))

// Write a function that converts Celsius to Fahrenheit.

function cToF(celsius){
    return (celsius * 9/5)+32;
}

console.log(cToF(78)) //172.4

// Create a function with default parameter "Guest".

function def(name= "guest"){

return name;
}

console.log(def())  //default
console.log(def("vimal")) 

// Write a function that returns the greater of two numbers.

function greater(num1, num2){
    if(num1>num2){
        return `${num1} is greater than num2`
    }
    else if(num2 >num1){
        return `${num2} is greater than num1`
    }
    else{
        return `${num1} & ${num2} are equal`
    }
}

console.log(greater(10,16))
console.log(greater(10,10))

// Create a function to calculate area of rectangle.
function area(l,b){
    return `area of reactange is ${l*b}` ;
}

console.log(area(10,15))


// Write a function that returns "Adult" if age ≥ 18 else "Minor".

function age(age){
     if(age >= 18){
        return "Adult"
     }else{
        return "Minor"
     }
}

console.log(age(16))
console.log(age(19))


// Create a function to reverse a string.

function reverseString(string){
    let rev = string.split("").reverse().join("")  //here split make a array of char and reverse reverse the character and join again making it string
    return rev
}

console.log(reverseString("vimal"))

// Write a function expression for multiplication.

let expression = function(a,b){
    return a*b
}

console.log(expression(10,13))

// Convert a normal function into an arrow function.

function normalFunciton(a){
return a;
}

let arrowFunciton = (a)=>{
return a
}

console.log(normalFunciton(16))
console.log(arrowFunciton(67))

// Create a function that accepts unlimited numbers and returns their sum using rest operator.  

function unlimited(...numbers){
    return numbers.reduce((total, num) => total + num, 0)
}

console.log(unlimited(10,12,1,2,1,2,12,))

// Write a function that counts vowels in a string.
function countVowel(str){
    let count = 0;

    for(let char of str){
        if("aeiou".includes(char.toLowerCase())){
            count++
        }
    }
    return count;
}

console.log(countVowel("vimal"))
console.log(countVowel("Priyanka"))
console.log(countVowel("neetu"))

// Create a function that checks if a string is palindrome.

function palindrome(str){
    let reverseString = str.split("").reverse().join("")

    if(str === reverseString){
        return `${str} is palindrome`
    }else{
        return  `${str} is not palindrome`
    }
}

console.log(palindrome("madam"))
console.log(palindrome("aaaa"))

// Write a callback function example using setTimeout.

let fun = ()=>{
    console.log("bhai chalade ise")
}

setTimeout(fun,5000)

// Create a higher-order function that executes another function twice.

function firstFunction(){
    console.log("first function run")
}

function anothetFunction(f){
    f()
    f()
}

anothetFunction(firstFunction)


// Write a function that returns another function.

function vimal() {
    function another() {
        return "second function";
    }

    return another;
}

let result = vimal();

console.log(result());


// Create a pure function for subtraction.

function subtraction(a,b){
    return a-b;
}

console.log(subtraction(14,20))


// Create an impure function using global variable modification.

let total = 0;
function tota(){
   return total += 5;
    
}

console.log(tota())

// ==========================================================================================


// Part 2 — Advanced Functions (21–35)

// Write a recursive function for factorial.
function factorial(n){
    if(n === 1){
        return  1;
    }

    return n * (factorial(n-1));

}

console.log(factorial(10));

// 




// Create an IIFE that prints "Executed".

(function abcd() {
   console.log("Executed")
})();

// Explain output:
function test() {
    return;
    console.log("Hello");
}
console.log(test());  // undefined


// Create custom implementation of map.



function custom(){
    let arr = [10,20,30]
    let newArr = [];
    for (let value  of arr){
        newArr.push(value *2)
    }
return newArr;
}
console.log(custom())

// Create custom implementation of filter.

function filter(arr){
    let  newArr = []

    for(let val of arr ){
        if(val >=20){
            newArr.push(val)
        }
    }
    return newArr
}

console.log(filter([20,30,4,302]))


// Create custom implementation of reduce.

function reduce(arr){

    newVal = 0;

    for(let val of arr){
        newVal += val;
    }

    return newVal

}

console.log(reduce([10,20,30]))

// Create custom forEach.

function foreach(arr){
    
    for(let val of arr){
        console.log(val)
    }
    return 'bhqai sdone hai '
}

console.log("forEach:")
console.log(foreach([10,20,30]))


// # Part 3 — Arrays Basics (36–55)

// ## Beginner

// 1. Create an array of 5 fruits.
// 2. Print first and last element of array.
// 3. Find length of array.
// 4. Add element at end using `push`.
// 5. Remove last element using `pop`.
// 6. Add element at beginning using `unshift`.
// 7. Remove first element using `shift`.
// 8. Reverse an array.
// 9. Sort numbers ascending.
// 10. Sort numbers descending.


// 1. Create an array of 5 fruits.
let fruit = ["apple", "banana", "papaya", "orange", "guava"]
console.log(fruit)

// Print first and last element of array.
console.log(fruit[0])
console.log(fruit[fruit.length-1])


// Find length of array.
console.log(fruit.length)

// add element at end using `push`.
fruit.push("grapes")
console.log(fruit)

// Remove last element using `pop`.
fruit.pop()
console.log(fruit)

// Add element at beginning using `unshift`.
fruit.unshift("grapes")
console.log(fruit)

// Remove first element using `shift`.
fruit.shift()
console.log(fruit)

// 8. Reverse an array.
console.log(fruit.reverse())
// 9. Sort numbers ascending.

let num =  [10,20,30,40,49]

console.log(num.sort((a,b)=> a-b))
// 10. Sort numbers descending.
console.log(num.sort((a,b)=> b-a))


// ## Intermediate

// ## Intermediate

// 1. Use `splice` to remove elements.
let arr = [1, 2, 3, 4, 5];

arr.splice(1,2)
console.log(arr)
// 2. Use `splice` to insert elements.
arr.splice(2,0,5)
console.log(arr)
// 3. Use `slice` to copy array.
let veg = ["aloo", "tamatar", "samosa", "chai", "ghee"]
let veg2 = veg.slice(1,3)
console.log(veg)
console.log(veg2)
// 4. Find index of an element.

const arr5 = [1,2,4,5]
console.log(arr5.indexOf(4))


// 5. Check if array contains a value.
const array1 = [1,3,4,5]

if(array1.includes(3)){
    console.log('array not null')
}else{
    console.log("array null")
}
// 6. Join array elements with .
const v = ["tomato", "potato"]
console.log(v.join("."))
// 7. Merge two arrays using spread operator.
const a1 = ["vimal", "jass"]
const a2 = ["priyanka", "jyoti"]

const a3 = [...a1,...a2]
console.log(a3)
// 8. Copy array using spread operator.

let a4 = [...a1]


a4.push("tanu")
console.log(a4)


// 9. Find maximum value using `Math.max`.

const num7 = [1,6,4,19]
let max = Math.max(...num7)
console.log(max)

// 10. Swap two variables using destructuring.

let u = 9;
let k = 20;

[u,k] = [k,u]

console.log(u)
console.log(k)

