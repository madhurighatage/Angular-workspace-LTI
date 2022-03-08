//    class Car 
//    {
//     model: String;
//     doors: Number;
//     isElectric: Boolean;
    
//     constructor(model: String, doors: Number, isElectric: Boolean) {
//         this.model = model;
//         this.doors = doors;
//         this.isElectric = isElectric;
//     }
//     make(): void {
//         console.log('This car is ' +this.model + " which has " +this.doors );
//     }
// }

//  let myCar = new Car('Innova', 4, false);
//  myCar.make(); 

// class customer{
//     custName :string;
//     custId:number;
//     balance:number;
//     constructor(cName: string,c:number,bal:number) {
//         this.custName = cName;
//         this.custId=c;
//         this.balance=bal;
//         }
//     show():string {
//         return "Hello, " + this.custName +"Your Id :" +this.custId +"Your balance:" + this.balance;
//     }
// }
// let custObj = new customer('Jay',101,5000);
// let msg=custObj.show();
// console.log(msg); // hello Jay 






//  // Our properties:
//     // By default they are public, but can also be private or protected.
// class Menu { 

//     items: Array<string>;  // The items in the menu, an array of strings.
//     pages: number;         // How many pages will the menu be, a number.

//     constructor(item_list: Array<string>, total_pages: number) {
//       this.items = item_list;
//       this.pages = total_pages;
//     }
//     list(): void {
//       console.log("Our menu for today:");
//       for (var i = 0; i < this.items.length; i++) {
//         console.log(this.items[i]);
//       }
//     }  
//   }  

//    let sundayMenu = new Menu(["pancakes", "waffles", "orange juice"], 1);  
//      sundayMenu.list();  

//   //inheritance example
//   class HappyMeal extends Menu {   

//     constructor(item_list: Array<string>, total_pages: number) {
//          super(item_list, total_pages);
//     }  
//     // Just like the properties, methods are inherited from the parent.
//     // to override the list() function , we can redefine it.
//     list(): void {
//     //  super.list();
//      // console.log("Our special menu for children:");
//       for (var i = 0; i < this.items.length; i++) {
//         console.log(this.items[i]);
//       }  
//     }
//   }
  
//   // Create a new instance of the HappyMeal class.
//   var menu_for_children = new HappyMeal(["candy", "drink", "toy"], 1);  
//   menu_for_children.list(); 
 
//Access specifiers  //public, private and protected.
//  class Employee1 {
//     private empCode: number;
//     empName: string;
// }

// let emp1 = new Employee1();
// //emp1.empCode = 123; 
// emp1.empName = "Swati";//OK 