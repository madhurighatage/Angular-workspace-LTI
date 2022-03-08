import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../product/Product';

@Injectable({
  providedIn: 'root'
})
export class HttpProductService {

  
  baseUrl:string="http://localhost:3000/products";

  constructor(private httpProdServ:HttpClient) { }

  ngOnInit(){
    this.getProducts();
  }
  public getProducts():any{
    console.log(this.httpProdServ.get<Product[]>(this.baseUrl));
    return this.httpProdServ.get<Product[]>(this.baseUrl);
  }
}
