// Primitives

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt


const score = 100
const scoreValue = 100

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const  id = Symbol('123')
const anotherId =  Symbol('123')

console.log(id === anotherId);

const bigNumber = 23834364786237493n


// Reference (Non Primitive)

// Arrays, Objects, Functions

const heros = ["shaktiman", "naaagraj", "doga"];


let myObj = {
    name : "Rajesh Sahani",
    age : 23,
}

const myFunction = function(){
    console.log("Hello WOrld");
}

console.log(typeof bigNumber); // bigint
console.log(typeof scoreValue); // Number
console.log(typeof myFunction); // object Function
console.log(typeof heros); // object
console.log(typeof null); // OBJECT