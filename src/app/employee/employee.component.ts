import { Component, OnInit } from '@angular/core';
import { Employee } from './Employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  
  empArray:Employee[]=[
    new Employee(110011,"Tom",50000),
    new Employee(110012,"Jerry",60000), 
    new Employee(110013,"Spike",70000),
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
