import { Component, OnInit } from '@angular/core';
import { HttpProductService } from '../Services/http-product.service';
import { Product } from './Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  prodList: Product[] = [];

  // prodArray:Product[]=[{ProductId:100001,ProductName:"Milk",ProductCost:100},
  // {ProductId:100002,ProductName:"Bread",ProductCost:50},
  // {ProductId:100003,ProductName:"Butter",ProductCost:200}]
  // constructor() { }
  constructor(private httpService: HttpProductService) {}
  ngOnInit(): void {
    this.getProducts();
  }
  public getProducts() {
    return this.httpService.getProducts().subscribe((response: Product[]) => {
      console.log('Products ::: ');
      this.prodList = response;
      console.log(this.prodList);
    });
  }
}
