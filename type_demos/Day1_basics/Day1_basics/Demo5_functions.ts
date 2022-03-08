// function Sum(x: number, y: number) : number 
// {
//     return x + y;
// }
// let s=Sum(2,3); 
// console.log("sum" +s);

//Anonymous functions 

//which is defined as an expression. This expression is stored in a variable.
// So, the function itself does not have a name. 
//These functions are invoked using the variable name that the function is stored in.

// let greeting = 
// function() 
// {
//     console.log("Anonymous function");
// };

// greeting(); 

// //functions with parameters and return types

// let findTotal = function(x: number, y: number) : number
// {
//     return x + y;
// }

// let  res=findTotal(2,3);
// console.log(res);

//Optional Parameters  
//The parameters that may or may not receive a value can be appended with a '?' to mark them as optional.

// function Greet1(greeting: string, name?: string ) : string {
//     return greeting + ' ' + name + '!';
// }
// let str1=Greet1('Hello','Steve');//OK, returns "Hello Steve!"
// console.log(str1);

// str1=Greet1('Hi'); // OK, returns "Hi undefined!".
// console.log(str1);

//Default Parameter  // either set all values // or defualt values should be for the last varaibles 
// function Greets(name: string="Jay", greeting: string ) // error 
// default args followed by non default arg 

function Greets(name: string, greeting: string = "Hello") : string {
    return name + ' ' + greeting + '!';
}

let str=Greets('Steve');//OK, returns "Hello Steve!"
console.log(str)
Greets('Steve', 'Hi'); // OK, returns " Steve Hi!".
Greets('Bill'); //OK, returns "Bill Hello!"