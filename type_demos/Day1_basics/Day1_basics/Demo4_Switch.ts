//can include constant or variable expression which can return a value of any data type.
//There can be any number of case statements within a switch. 
//The case can include a constant or an expression.
//We must use break keyword at the end of each case block to stop the execution of the case block.
//The return type of the switch expression and case expression must match.
//The default block is optional.

let day : number = 3;

switch (day) {
    case 0:
        console.log("It is a Sunday.");
        break;
    case 1:
        console.log("It is a Monday.");
        break;
    case 2:
        console.log("It is a Tuesday.");
        break;
    case 3:
        console.log("It is a Wednesday.");
        break;
    default:
        console.log("No such day exists!");
        break;
}