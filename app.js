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
// Destructuring //p             // ek obj ko break krne ka kam krta ha
// Template literals //p        // randaring ka kam krta ha
// Default parameters //p      // parameter ma pehly sy value de sakty hain
// Rest parameter //p          // rest parameter syntax ka istemal karke aap aik function ko kitni bhi arguments accept karne ki sahulat de sakte hain aur un sab ko aik array mein store kar sakte hain.
// Spread Operator //p         // spread operator ka istemal object ya array ko expand karne ke liye kiya jata hai. Is operator ko teen dots (...) ke zariye denote kiya jata hai. 
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



// Template literals // randaring ka kam krta ha



// const greetUser = `hello Template literals`

// console.log(greetUser);


// const nested = `This is a ${`nested ${`template`} literal`}!`;

// console.log(nested);


// function toUpperCase(str) {
//     return str.toUpperCase();
// }

// const dynamicString = `This is ${toUpperCase('awesome')}!`;
// console.log(dynamicString);





// Default parameters // parameter ma pehly sy value de sakty hain

// function greet(name = 'Guest'){
//     return `hello, ${name}`
// }

// console.log(greet());
// console.log(greet('hasan'));


// function creatUser(userName = 'tayyab', age = 20){
//     return {userName , age}
// }

// console.log(creatUser());
// console.log(creatUser('hasan'));
// console.log(creatUser('ahsan',50));

// function value(num =10){
//     return `value is ${num}`
// }

// console.log(value());
// console.log(value(undefined));
// console.log(value(null));
// console.log(value(0));
// console.log(value(''));






//spread operator // spread operator ka istemal object ya array ko expand karne ke liye kiya jata hai. Is operator ko teen dots (...) ke zariye denote kiya jata hai. 






//Rest parameter // rest parameter syntax ka istemal karke aap aik function ko kitni bhi arguments accept karne ki sahulat de sakte hain aur un sab ko aik array mein store kar sakte hain.


// function hello(...number){
//     return number.reduce((total,num)=> total + num,0)
// }

// console.log(hello(1,2,3,4,5))


// function hello(...username) {
//   console.log(username);
// }
// hello("abdullah", "usman", "ammar", "zain", "hassan");