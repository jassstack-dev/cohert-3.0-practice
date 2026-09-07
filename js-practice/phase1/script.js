// _____________scope in Javascript___________________


// scope -> scope ka mtlb hai kisi variable code ko kis area mai access karna hai 

// type of scope 

// funtional scope 
// block scope

// block scope -> {}  isko ek block scope bolte hai matlb iski saari cheeje isi ke andar access kar skte hai 

// {
//     let age = 10;
//     console.log(age)  // ye value de dega bcz ham code ko block ke andar hi access kar rhe hai to ye value dega 
// }
       
// console.log(age)  //undefined --> bcz ham ise na block scope se bahar use console kara rhe hai jo ki ek undefiend value dega 

// ab samajh jo main hai tere lie 

// let , const --> block scope hote  hai 


{
    let fullname = "vimal"
    let lastName = "kumar"

    // console.log(`${fullname} ${lastName}`)  //ye value accessible hai kyonki ye block scope ke andar hai agar isi ko tum bahar access karoge to undefined dega dekhlo khud code chalake 
}

//  console.log(`${fullname} ${lastName}`)  // undefined 


// ***************isi ko block scope kahate hai**********************

// ab baat karte hai var scope ki ise ek example se samjhenge 

// {
//     var num = 10;

// }

// console.log(num)   // ye tumhe value de dega to ye block scope to nhi hai 


// var ek function scope hai 


//**************************** function scope ********************************


// jo variable function ke andar hi access ho skta  hai and  use function scope kahate hai 

function ancd(){
    let a = 10;

    console.log(a)   // ye ise andar hi accessible hai mtlb function ke andar hi agar ham ise bahar access karne ki sochenge to hoga nhi
}

// ancd()  //ye access hoga andar wala

// and ab ab ise direct print karenge to ye undefined dega  

// console.log(a)  // a is not defined 

// to ye hota hai function scope

// function test(){
//     let a = 10;
    
//     if(true){
//         console.log(a)   // yanah accessible hai 
//     }
// }

// test()  

// but idhar dekh bhai tu 

function test() {

    if (true) {
        var a = 10;
        let b = 20;
        const c = 30;
    }

    console.log(a); // ✅ 10
    console.log(b); // ❌   b ko access ni kar ksta ye because wo block ke andar hai 
    console.log(c); // ❌   c ko access ni kar ksta ye because wo block ke andar hai 
}

// test()


// symbol ----> symbol ek unique value deta hai ek example se samajh bhai 

// let a = Symbol(10)
// let b = Symbol(20)

// console.log(a)
// console.log(b)

// dono mai value same lag rhi  hai but real mai value same nhi ahi

// console.log(a === b) // false

// data types  --> 1) primitive types - string, number, boolean, undefined, null, symbol, bigInt 2) Non-Primitive Type --> object, function , array , object


// undefined --> mtlb iska decralation to hai but ise hamne abhi koi value nhi di hai 
//  null --> mtlb ye empty hai iske pass koi value hai hi nahi ya samajhlo ise hamne jaanbhujkar null value di  hai 

// hamesha yaad rakhan null ka type object hota hai ---> This is a bug from 1995 that was never fixed because too much code depends on it. Tell your students this story — they'll remember it forever.


// ________________Type Conversion vs Type Coercion____________________

// type conversion

// mtlb kisi another type ki  value ko kisi or type mai chnage karna like 

// let  a = "10"
// let b = 10
// console.log(a+b)  // iska output hoga 1010 kyonki jab string hoti hai wo concatinate karti hai add kar deti hai agar hame inhe sach mai add karna hai type conversion padega mtlb string ko number banana padega 

// console.log(Number(a) + b)  // ab string ko number bana dia to ab ye add ho ajyefa 

// mtlb simple ---> bhai conversion means --> kisi another type ki value ko kisi  or type ki value mai chnage karna 

// coersion --> means do type ki values 

// console.log("5" + 3);     // "53"   ← string concatenation
// console.log("5" - 3);     // 2      ← number subtraction
// console.log("5" * "2");   // 10
// console.log(true + 1);    // 2      (true becomes 1)
// console.log(false + 1);   // 1      (false becomes 0)
// console.log(null + 1);    // 1      (null becomes 0)
// console.log(undefined + 1); // NaN  (undefined becomes NaN)

// console.log("5" - 3); //sirf iske alaba na kisi or mai ye kaam ni karega
// numbers to numbers ye concatinate nhi karta 

// ______________truthy and falsy______________

// false
// 0
// -0
// 0n
// ""
// null
// undefined
// NaN


// truthy
// "hello"    // truthy
// "0"        // truthy
// "false"    // truthy
// 1          // truthy
// -1         // truthy
// []         // truthy
// {}         // truthy

// let x = 5;
//  let y = x++
//  x++

// console.log(x)

// Ternary Operator (Shorthand if-else)

    // Syntax: condition ? valueIfTrue : valueIfFalse

    // let age = 30;

    // let status  = age >= 18? "adult " : "minor"
    // console.log(status)


// String Method 

// let str  = "anjali kumari"
// console.log(str.toUpperCase())
// console.log(str.includes("anjali"))  //ye batata hai ye string mai available hai letter bhi ho ya koi word kahi se bhi 

// console.log(str.indexOf("kumari"))  //ye index deta hai

// console.log(str.slice(2,5))
// console.log('kumari', "riyar")
// console.log(str.split(","))  // ye words mai todke de degi 
// console.log(str.split(""))
// console.log("    hi   ".trim())
// console.log(str.repeat(3))
// console.log(str.charAt(3))  // ye words mia letter ki index batata hai 


// length        → kitne characters
// toUpperCase   → CAPITAL
// toLowerCase   → small
// indexOf       → position dhundho
// includes      → hai ya nahi?
// slice         → part nikalo
// substring     → part nikalo
// replace       → badlo
// split         → todkar array banao
// trim          → extra outer spaces hatao
// repeat        → repeat karo
// startsWith    → starting check
// endsWith      → ending check
// charAt        → index ka character
// [index]       → index ka character


// let rand = Math.floor(Math.random() * (max - min + 1)) + min;

// _______________loop____________________



// for loop
let  n = 10;

for (let i = 1; i <=10 ; i++ ){
    console.log(i*5)
}

// while loop

let count = 0;

while(count <10){
    console.log("while loop chala and value di ", count)
    count++
}


// do...while Loop  

let num = 0

do{
    console.log(num)
    num++
}while(num <=10)

// for...of Loop (for arrays and strings)

let fruit = ["banana", "papaya", "orange"]

for(let index of fruit){
    console.log(index)
}

let word = "vimal"

for (let i  of word){
    console.log(i)
}

// for...in Loop (for objects — brief intro)

let person = { name: "Aman", age: 25 };
for (let key in person) {
    console.log(key, ":", person[key]);
}



