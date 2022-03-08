class Employees {
    public empName: string;
    protected empCode: number;

    constructor(name: string, code: number){
        this.empName = name;
        this.empCode = code;
    }
}
class SalesEmployee extends Employees{
    private department: string;
    
    constructor(name: string, code: number, department: string) {
        super(name, code);
        this.department = department;
        this.empCode=1234;
    }
}
let e1 = new SalesEmployee("John Smith", 123, "Sales");
console.log(e1);
//e1.empCode; //Compiler Error


//ReadOnly
class Emp {
    readonly empCode: number;
    empName: string;
    
    constructor(code: number, name: string)     {
        this.empCode = code;
        this.empName = name;
    }
}

let e2 = new Emp(10, "John");
//e2.empCode = 20; //Compiler Error

