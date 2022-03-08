
//In TypeScript 2.0, the readonly modifier was added to the language.
// Properties marked with readonly can only be assigned to during initialization 
//or from within a constructor of the same class.
 //All other assignments are disallowed.
class user 
{
    readonly uname:string;
    readonly pass:string;
    constructor(n:string,p:string)
    {
        this.uname=n;
        this.pass=p;
    }
     changePass(u: user, newpass: string): user {
     //  u.pass=newpass;
      return u;
    }
};
let user1= new user("jay","jay123");
//user1.uname="vijay";
//user1.pass="viajy123"

 type Point = {
    readonly x: number;
    readonly y: number;    
  };  
  const origins: Point = { x: 0, y: 0 };

 function moveX(p: Point, offset: number): Point {
    //p.x += offset;
    return p;
  }
  

  //The moveX function should not modify the x property of the point it was given.
  // Because of the readonly modifier,
  // the TypeScript compiler will yell at you if you try:
  
  //Forbidden assignment to readonly property in TypeScript
  //Instead, moveX should return a new point with updated property values, which could look like this:
  
  function moveX1(p: Point, offset: number): Point {
    return {
      x: p.x + offset,
      y: p.y
    };
  }
 
/* 

//A const variable cannot be re-assigned, just like a readonly property.

Essentially, when you define a property, you can use readonly to prevent re-assignment. This is actually only a compile-time check.

When you define a const variable (and target a more recent version of JavaScript to preserve const in the output), the check is also made at runtime.

So they effectively both do the same thing, but one is for variables and the other is for properties.

const x = 5;
// Not allowed
x = 7;

class Example {
    public readonly y = 6;
}
var e = new Example();

// Not allowed
e.y = 4;
Important note... "cannot be re-assigned" is not the same as immutability.

const myArr = [1, 2, 3];

// Not allowed
myArr = [4, 5, 6]

// Perfectly fine
myArr.push(4);

// Perfectly fine
myArr[0] = 9;

n array in JS/TS is a mutable object. So myArr is a constant reference to a mutable object. You can't point it at some other array, but you can change the contents of the array. You (myArr) have picked up a box ([1, 2, 3]) and glued it to your hands (const). The glue means you can't let it go and pick up another box (myArr = [4, 5, 6]) or anything else (myArr = 'something else'). But the glue doesn't stop someone from putting something into the box (myArr.push(4)) or replacing some of its contents

const Arr = [1,2,3];

Arr[0] = 10;   //OK
Arr.push(12); // OK
Arr.pop(); //Ok

//But
Arr = [4,5,6] // ERROR
But in case of ReadonlyArray you can not change the array as shown above.

arr1 : ReadonlyArray<number> = [10,11,12];

arr1.pop();    //ERROR
arr1.push(15); //ERROR
arr1[0] = 1;   //ERROR */