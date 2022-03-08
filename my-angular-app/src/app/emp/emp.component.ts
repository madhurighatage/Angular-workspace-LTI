import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {

  firstName:string="Madhuri";
  lastName:string="Ghatage";
  gender:string="Female";
  age:number=27;

  constructor() { }

  ngOnInit(): void {
  }

}
