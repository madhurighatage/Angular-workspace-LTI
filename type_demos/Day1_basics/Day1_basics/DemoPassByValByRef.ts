//Primitive data types in Javascript are Passed by Value. 

let box1 = 'sugar'

let box2 = box1
box2 = 'brown sugar'
console.log(box1) // returns 'sugar'
console.log(box2) // returns 'brown sugar'

//Only the original value was passed when box2 was created, 
//they're not related to each other in any way and thus have no effect on each other.

//Objects in Javascript use Pass by Reference
const box3 = {
    name: "salt"
  }  
  const box4 = box3 // just a mem ref is passed 

  box4.name = "pepper" //name property on box4, actually telling it to update box3.name

console.log(box3.name) //returns "pepper"
console.log(box4.name) //returns "pepper"

/* sometimes the Objects we create or pull into our apps can be massive,
with hundreds or perhaps even thousands of key-value pairs. 
It would be incredibly wasteful and not performant of the computer to make 
a clone everytime.So, it simply references instead.*/

//what is i want clone or copy of box3
//ES6 gave us a very clean and nice way to do it, the spread operator.
const boxN = {
    name: "salt"
  }
const box5 = { ...boxN }
console.log(box5)