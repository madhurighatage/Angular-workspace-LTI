//Fat arrow notations are used for anonymous functions i.e for function expressions. 
//They are also called lambda functions in other languages.
// function display() {
//   console.log("Hello code from Display");
// }
// display(); 

// let sum = (x: number, y: number): number => { return x + y;}

// let total=sum(10, 20);
// console.log(total)

// //arrow fun without para
// let Print = () => console.log("Hello TypeScript");

// Print(); //Output: Hello TypeScript

//fuction overloading
// function add(a:string, b:string):string;

// function add(a:number, b:number): number;

// function add(a: any, b:any): any {
//     return a + b;
// }

// //add("Hello ", "Steve"); // returns "Hello Steve" 
// let n=add(10, 20);
// console.log(n);


//Rest Parameters similar to your vargs in java 
// function Greet(greeting: string , ...names: string[]) {
//     console.log( greeting + " " + names.join(", ") + "!");
// }

// Greet("Hello", "Steve", "Bill"); // returns "Hello Steve, Bill!"
// Greet("Hello", "Steve"); // returns "Hello Steve!"
// Greet("Hello");// returns "Hello !"

//Arrow Function in Class
class Employee {
    empCode: number;
    empName: string;

    constructor(code: number, name: string) {
            this.empName = name;
            this.empCode = code;
    }

      display = () => console.log(this.empCode +' ' + this.empName)
}
let emp = new Employee(1, 'Ram');
emp.display(); 


// //const num = (num: number) => ( ) => {  return stmts }

// //Arrow Functions have two main benefits:
// //A shorter syntax than typical functions
// //No binding of this


// //Function Expression 
// //Syntax const name = function(parameters){ statements }

// const double = function(num){
//     return num * 2;
//   }
//   let d=double(3);
//   console.log(d)

// // Arrow Function 
// //Syntax  const name = (parameters) => { statements  }

// const double1 = (num) => {   return num * 2;  }

//   let d1=double1(3);
//   console.log(d1)

//   // arrow function can actually be simplified much more. 

//   const double2 = num => num * 2;

//   //The number of parameters in an arrow function affects the syntax of that function.
// // 0 Parameters, arrow functions use empty parenthesis:
// //() => { statements }

// // 1 Parameter, arrow functions can omit the parenthesis around the parameter:
// //parameter => { statements }
// // 2+ Parameters, parameters go inside parenthesis:
// //(param1, param2, ...) => { statements }

// //: If an arrow function is simply returning a single line of code,
// // you can omit the statement brackets and the return keyword. 
// //This tells the arrow function to return the statement.
// /* 
// let name = function(parameters){
//     return expression
//   }

//   or 

//  // Key Takeaways
// //The number of parameters an arrow function accepts is key to determining the syntax of the function
// //If returning a single line of code from an arrow function, omitting the brackets and return keyword will return the remaining statement.


//   let name = (parameters) => expression */

// const add3 = function(num1, num2, num3){
//     return num1 + num2 + num3;
//   }


// const sum3 = (num1, num2, num3) => num1 + num2 + num3;
// console.log(sum3);

// const square = function(num){
//     return num ** 2;
//   }
//   const sqr = num => num ** 2;

//   const sayHi = function()
//   {
//     console.log('Hi');
//   }
//   const sayHe = () => {    console.log('Hi');  }

