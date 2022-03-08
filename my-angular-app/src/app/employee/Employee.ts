export class Employee
{
    empNo:number=0;
    empName:string="";
    empSal:number=0;

    constructor( empNo:number,empName:string,empSal:number)
    {
        this.empNo=empNo;
        this.empName=empName;
        this.empSal=empSal;
    }
}