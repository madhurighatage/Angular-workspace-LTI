 //static typing ?
 // all variables and function return values should mention type 
 //C++, Java  Typescript are some examples of statically-typed languages.

 //shortcut for single / multiple line comment entry 
 //                    select lines ---ctr + /  
 //to remove -->same-> select lines ---ctr+  /

 //you can declare the types of variables,
 // and the compiler will make sure that they aren't assigned the wrong types of values. 
 
 
// let a = new String("An object !"); 
// let b = "A literal ! haha"; 
// console.log(typeof(a)); 
// console.log(typeof(b)); 
 

 
//  //If type declarations are omitted, 
//  //they will be inferred automatically from your code.
//  var somevar;
//  somevar=100; 
//  console.log(somevar);
//  somevar='abcd'; 
//  console.log(somevar);


// var myvar=100;
// console.log(myvar)
// //myvar='abc';
// console.log(myvar)
 
//  let myVar:string ='saad';
// console.log(myVar);


// // Any variable, function argument or return value can have its type defined on initialization:
// // Term type annotations means variable is declared with their data type. 
// var burger:string = 'hamburger',  // String  example, 
//     calories: number = 30,     // Numeric  it's not mandatory 
//     tasty: boolean = true;        // Boolean


// //Type annotations are used to enforce type checking. 
// //It is not mandatory in TypeScript to use type annotations.
// // However, type annotations 
// //help the compiler in checking types and helps avoid errors dealing with data types.


// // The function expects a string and an integer.
// // It doesn't return anything so the type of the function itself is void.

// var message:string = "Hello Welcome to first demo";
// console.log(message);
// // compare with java 
// // void  speak( String food,int energy ) 
// // { 

// // }

// // function speak(food: string, energy: number): void {
// //     console.log( food + " has " + energy + " calories.");
// //   }

// // speak(burger, 200);

// //Variable declared and assigned to null  
// var a1 = null;   
// console.log( a1 );   //output: null  
// console.log( typeof(a1) );   //output: object  

// //Null	
// //1.It is an object.It is an assignment value. 
// //It can be assigned to a variable which indicates 
// //that a variable does not point any object.

// //Variable declaration without assigning any value to it  
// var a2;        
// console.log(a2);  //undefined  
// console.log(typeof(a2));  //undefined  

//2.   Undefined	
//It is not an assignment value. 
//It means a variable has been declared but has not yet been assigned a value.	
//It is a type itself.

//see code in .js file after compilation , 
//it has  completely removed types completely 

// if assigned wrong value - on compilation tsc will warn 
//calories: number = '300',

//Number - All numeric values are represented by the number type, 
//there aren't separate definitions for integers, floats or others.
//String -  'single quotes' or "double quotes".
//Boolean - true or false, using 0 and 1 - compilation error.
//Any - A variable with this type can have it's value set to a string, number, or anything else.
//Arrays - two possible syntaxes: my_arr: number[]; or my_arr: Array<number>.
//Void - Used on function that don't return anything.
//other 
//https://www.typescriptlang.org/docs/handbook/basic-types.html