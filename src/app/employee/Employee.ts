export class Employee
{
    empId:number=0;
    empName:string="";
    empSal:number=0;

    constructor( empId:number,empName:string,empSal:number)
    {
        this.empId=empId;
        this.empName=empName;
        this.empSal=empSal;
    }
}