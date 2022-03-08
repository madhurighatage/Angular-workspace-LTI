import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.css']
})
export class MyComponent implements OnInit {

  x:number=100;
  message:string="welcome to first user defined component";
  
  
  constructor() { }

  ngOnInit(): void {
  }

}
