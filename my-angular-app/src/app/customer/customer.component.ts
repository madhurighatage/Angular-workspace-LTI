import { Component, OnInit } from '@angular/core';
import { Customer } from './customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  custArry:Customer[]=[ { custNo:101,custName:"madhuri",custAdd:"Kolhapur",city:"Kolhapur",country:"India"},
                        { custNo:102,custName:"vishal",custAdd:"pune",city:"pune",country:"India"},
                        { custNo:103,custName:"Pallavi",custAdd:"Kolhapur",city:"Kolhapur",country:"India"}];
  constructor() { }

  ngOnInit(): void {
  }

}
