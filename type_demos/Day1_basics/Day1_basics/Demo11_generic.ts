//Generics provide a way to make components work with any data type 
//and not restrict to one data type.
 //So, components can be called or used with a variety of data types. 

//  function getArray(items : any[] ) : any[] {
//     return new Array().concat(items);
// }

// let myNumArr = getArray([100, 200, 300]);
// console.log(myNumArr)
// let myStrArr = getArray(["Hello", "World"]);
// console.log(myStrArr)
// let myStrArr1 = getArray(["Hello", 1000]);
// console.log(myStrArr1)


function identity<T>(arg: T): T {    
    return arg;    
}    

let output1 = identity<string>("myString");
let output2 = identity<number>( 100 );  
console.log(output1);  
console.log(output2);  


// function getItems<T>(items : T[] ) : T[] {  
//     return new Array<T>().concat(items);  
// }  
// let arrNumber = getItems<number>([10, 20, 30]);  
// let arrString = getItems<string>(["Hello", "JavaTpoint"]);  


class StudentInfo<T,U>  
{   
    private Id: T;  
    private Name: U;  
    setValue(id: T, name: U): void {   
        this.Id = id;  
        this.Name = name;  
    }  
    display():void {   
       console.log('Id ='+ this.Id + 'Name = '+ this.Name);  
    }  
}  
let st = new StudentInfo<number, string>();  
st.setValue(101, "Virat");  
st.display();  
let std = new StudentInfo<string, string>();  
std.setValue("201", "Rohit");  
std.display();  

