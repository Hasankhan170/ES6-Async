// function hello(){
//     const num = 80;
//     if(num > 70){
//         console.log('behtreen');
//     }else if(num > 50){
//         console.log('pass');
//     }else{
//         console.log('not pass');
//     }
// }
// hello()


// async await 

// async function hello(){
//     const res = await axios("https://fakestoreapi.com/products")
//     console.log(res.data);
// }

// hello()





// Variable Scoping
// Closure
// Generators
// Modules
// Exponentiation Operator
// Optional chaining
// Object Methods (keys,values,freez,entries)
// Destructuring //p 
// Template literals //p
// Destructuring //p
// Default parameters //p
// Rest parameter //p
// Spread Operator //p
// Arrow functions  //p
// Enhanced object literals //p
// Iterators & For..of  //p
// Map  //p
// Array methods  //p
// Higher-order function  //p
// CallBack  //p
// Promises  //p
// Ternary Operator //p



// Destructuring // ek obj ko break krne ka kam krta ha

// const person = {
//     userName: 'Mohammad',
//     age: 20,
//     address: {
//         city: 'Karachi',
//         country: 'Pakistan'
//     }
// }

// const {userName,age,address:{city,country}} = person;

// console.log(userName,age,{country});



// Template literals

// const greetUser = `hello Template literals`

// console.log(greetUser);


// const nested = `This is a ${`nested ${`template`} literal`}!`;

// console.log(nested);


// function toUpperCase(str) {
//     return str.toUpperCase();
// }

// const dynamicString = `This is ${toUpperCase('awesome')}!`;
// console.log(dynamicString);