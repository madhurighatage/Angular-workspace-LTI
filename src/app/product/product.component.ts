import { Component, OnInit } from '@angular/core';
import { Product } from './Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  prodArray:Product[]=[{ProductId:100001,ProductName:"Milk",ProductCost:100},
  {ProductId:100002,ProductName:"Bread",ProductCost:50},
  {ProductId:100003,ProductName:"Butter",ProductCost:200}]
  constructor() { }

  ngOnInit(): void {
  }

}
