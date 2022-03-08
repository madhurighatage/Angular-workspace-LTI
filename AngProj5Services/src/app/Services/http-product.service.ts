import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Product } from '../product/product';
@Injectable({
  providedIn: 'root'
})
export class HttpProductService {

  baseUrl:string="http://localhost:3000/products";

  constructor(private httpServ:HttpClient) { }

  ngOnInit(){
    this.getProducts();
  }
  public getProducts():any{
    console.log(this.httpServ.get<Product[]>(this.baseUrl));
    return this.httpServ.get<Product[]>(this.baseUrl);
  }


}
