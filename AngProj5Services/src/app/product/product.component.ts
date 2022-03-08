import { Component, OnInit } from '@angular/core';
import { HttpProductService } from '../Services/http-product.service';
import { ProductService } from '../Services/product.service';
import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  prodList:Product[]=[];
  // constructor(private waiterService:ProductService){
    
  // }
 // ngOnInit(): void {
  //   this.prodList= this.waiterService.getProducts();    
  //    console.log(this.prodList);
  // }
  constructor(private httpService:HttpProductService){

  }
  ngOnInit(): void {
    this.getProducts();
  }

  public getProducts()

  {
  
  
  
    return this.httpService
  
    .getProducts()
  
    .subscribe((response: Product[]) =>{
  
                            console.log("getting response  ")
  
                            this.prodList=response;
  
                            console.log(this.prodList);
  
                              }
              ) }
}
/*

public getProductList()

  {

 return this.httpSer.getProductList().subscribe(

    (response) => {                           //Next callback

      console.log('response received in compo : ' +response);

      this.prdList = response;

      console.log(this.prdList);

    },

    (error) => {                              //Error callback

      console.error('Request failed with error')

      alert(error);

    },

    () => {                                   //Complete callback

      console.log('Request completed')

    })  

  }*/
