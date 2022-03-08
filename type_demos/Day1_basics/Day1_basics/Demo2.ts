//The let keyword was introduced to JavaScript in ES2015 and
// is now considered the standard because it’s safer than var. 

// let myary: number[] = [1, 2, 3];
// console.log(myary[0]);

// let myary1: Array<number> = [1, 2, 3,];

// var arr1 = [10, 20, 30, 40];
// for (let i in arr1) 
// {
//   console.log(i); // prints indexes: 0, 1, 2, 3
//   console.log(arr1[i]); // prints elements: 10, 20, 30, 40
// }

//  let i: number = 1;

// while (i < 5) {
//     console.log( "Block statement" + "\n"+ "execution no." +i )
//     i++;
// }

// // Declare a tuple type
 //let x: [string, number];
// // Initialize it
 //x = ["hello", 10]; // OK

// // Initialize it incorrectly
// //x = [10, "hello"]; // Error

// //scope of var // golbal avail to application 
 
var times = 5;  
if (times > 3)
 {  
   var msg = ' Hello ';   
}  
console.log(msg) //Output: Hello

// msg="welcome";
// console.log(msg);

// //scope of let within block limited - used for loops 

// let times1 = 5;  
// if (times1 > 3) 
// {  
//    var mymsg = "Hello";   
//    console.log(mymsg) 
// }  
// console.log(mymsg) // Compile error: mymsg is not defined  

