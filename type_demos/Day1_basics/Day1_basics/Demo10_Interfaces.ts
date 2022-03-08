interface Person {
    name: string
    age: number
}
interface Empls extends Person {
    gender: string
    empCode: number
}

let empObject = <Empls>{};

empObject.name = "Abhishek"
empObject.age = 25
empObject.gender = "Male"
empObject.empCode = 43

console.log("Name: " + empObject.name);
console.log("Employee Code: " + empObject.empCode);  


//multiple inheritance 

// interface Person {   
//     name:string    
//  }  
//  interface PersonDetail {   
//      age:number  
//      gender:string  
//  }  
// interface Employee extends Person, PersonDetail {   
//      empCode:number  
//  }  
 
//  let empObject = <Employee>{};   

//  empObject.name = "Abhishek"  
//  empObject.age = 25   
//  empObject.gender = "Male"  
//  empObject.empCode = 43  
//  console.log("Name: "+empObject.name);  
//  console.log("Name: "+empObject.age);  
//  console.log("Name: "+empObject.gender);  
//  console.log("Employee Code: "+empObject.empCode);  

  

