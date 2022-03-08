import { Injectable } from '@angular/core';
import { Product } from '../product/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { 

  }

  public getProducts(){
    let prodList:Product[]=[
      new Product(111,"Mobile",6000),
      new Product(112,"Charger",600),
      new Product(113,"Headphone",3000),
      new Product(114,"Powerbank",800),
    ];
    return prodList;
  }
}
