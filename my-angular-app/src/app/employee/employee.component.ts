import { Component, OnInit } from '@angular/core';
import { HttpEmployeeService } from '../Services/http-employee.service';
import { Employee } from './Employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  
  // empArray:Employee[]=[
  //   new Employee(110011,"Tom",50000),
  //   new Employee(110012,"Jerry",60000), 
  //   new Employee(110013,"Spike",70000),
  // ];
  empList:Employee[]=[];
  constructor(private httpEmpService:HttpEmployeeService){
  }
  ngOnInit(): void {
    this.getEmployees();
  }
  public getEmployees()
  {  
    return this.httpEmpService
    .getEmployees()  
    .subscribe((response: Employee[]) =>{
      console.log("Employees ::: ")
      this.empList=response;
      console.log(this.empList);
    }
    )}
}
