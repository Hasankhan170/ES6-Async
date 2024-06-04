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
// Arrow functions  //p        // arrow functions aik compact syntax provide karte hain jo ke traditional function expressions ke mukabley chhote aur zyada readable hote hain.
// Enhanced object literals //p  // enhanced object literals ka istemal object literals ko define karne ka ek asan aur zyada expressive tareeqa hai. Enhanced object literals se aap objects ko define karte waqt kuch mukhtalif features ka faida utha sakte hain jo traditional object literals mein available nahi hota 
// Iterators & For..of  //p  // JavaScript mein for...of aur for...in loops dono ka istemal objects ya arrays ke elements ko iterate karne ke liye hota hai, lekin dono mein thoda farq hai.
// Map  //p
// Array methods  //p
// Higher-order function  //p      // wo function jo apna under as an argument aik callback leta ha us function ko higher order function kehta hain!
// CallBack  //p        //callback function wo function hota ha jo ma kisi bhi function ka as an argument bhejdeta krdeta ho
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

// const obj1 ={a: 1, b: 2}
// const obj2 ={c: 3, d: 4}

// const merge = {...obj1,...obj2}

// console.log(merge);


// const arr = [1,2,3,4,5]
// const arr2 = [6,...arr]

// console.log(arr2);







//Rest parameter // rest parameter syntax ka istemal karke aap aik function ko kitni bhi arguments accept karne ki sahulat de sakte hain aur un sab ko aik array mein store kar sakte hain.


// function hello(...number){
//     return number.reduce((total,num)=> total + num,0)
// }

// console.log(hello(1,2,3,4,5))


// function hello(...username) {
//   console.log(username);
// }
// hello("abdullah", "usman", "ammar", "zain", "hassan");


// function hello(greeting,...user){
//     return `${greeting} ${user.join(',')}`
// }

// console.log(hello('hello', 'abdullah', 'usman', 'ammar', 'zain', 'hassan'));




// Arrow functions // arrow functions aik compact syntax provide karte hain jo ke traditional function expressions ke mukabley chhote aur zyada readable hote hain.

// const hello = (userName)=>{
//     return userName
// }
// console.log(hello('abdullah'));


// const num = (mul)=> mul * 2

// console.log(num(5));


// const hello = ()=>{
//     return `hasan`
// }
// console.log(hello())




// Enhanced object literals //  enhanced object literals ka istemal object literals ko define karne ka ek asan aur zyada expressive tareeqa hai. Enhanced object literals se aap objects ko define karte waqt kuch mukhtalif features ka faida utha sakte hain jo traditional object literals mein available nahi hota


// const userName = 'hasan'
// const age = 12

// const obj ={
//     userName,
//     age
// }

// console.log(obj);

// const property = 'my property'

// const obj = {
//     [property] : 'hasan'
// }

// console.log(obj);

// const myObject = {
//     myMethod(param) {
//       return `Hello, ${param}!`;
//     },
//   };
  
//   console.log(myObject.myMethod('hasan'));






// Iterators & For..of   // JavaScript mein for...of aur for...in loops dono ka istemal objects ya arrays ke elements ko iterate karne ke liye hota hai, lekin dono mein thoda farq hai.
// for loop use in array
// in loop use in obj


// const iterable = ['a','b','c']

// for(const hasan in iterable){
//     console.log(hasan);
// }


// const obj = {
//     userName : 'hasan',
//     age: 12,
//     gender : 'male'
// }

// for(const key in obj){
//     console.log(obj[key]);
// }


// Ternary Operator 


// const num = 60;

// num > 20 ?  console.log('passed') : console.log('failes')


// num > 70 ? console.log('behtreen') : num > 50 ? console.log('passed') : console.log('failes');




