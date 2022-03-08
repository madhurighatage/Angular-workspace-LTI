let num1: number = 10, num2 = 20;
//simple  if 
if (num1 < num2) 
{
    console.log('num1 is less than num2');
} 
 let no1: number = 10, no2 = 20;
if (no1 > no2) 
{
    console.log('no1 is greater than no2');
} 
else
{
    console.log('no1 is less than or equal to no2.'); //This will be executed
}


let x1: number = 10, y1 = 20;

if (x1 > y1) 
{
    console.log('x1 is greater than y1.');
} 
else if (x1 < y1)
{
    console.log('x is less than y.'); //This will be executed
}
else if (x1 == y1) 
{
    console.log('x1 is equal to y1');
}

let a: number = 10, b = 20;

a > b? console.log('a is greater than b.'): console.log('a is less than or equal to b.')