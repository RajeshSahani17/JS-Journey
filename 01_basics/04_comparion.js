//console.log(2 > 1); 
//console.log(2 >= 1); 
//console.log(2<1); 
//console.log(2 == 1); 
//console.log(2 != 1); 
 
//console.log("2" > 1);// true
//console.log("02" > 1 ); // true

//console.log(null > 0); // false
//console.log(null == 0); // false
//console.log(null >= 0 ); //true
/*
the reason is that an equality check == and 
comparions < , > , >=, <= work differently.
Comparisons convert null to a number , treating it as 0
That's why (3) null >= 0 is true 
and null > 0 is false.
*/
//console.log(undefined == 0); // false
//console.log(undefined > 0); // false
//console.log(undefined < 0); // false

// === // StrictCheck

console.log("2" === 2); // false because it strictly check the datatypes of both operands and then compare. 
console.log("2" == 2); // true beause it does not strictly checks the datatype and just compare them.

