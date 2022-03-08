import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalcService {

    //add( 10,20,30)
  //add(10,20)
  //add(10,20,30,40,50)

  public add(...params: number[]): number {
    console.log("add method called...");
    let result = 0;
    for (let val of params) {
        result += val;
    }
    return result;
  } 
 
  public multi(x:number, y :number): number {
    console.log("multi method called...");
    let result = 0;
    
    result=x*y;
    return result;
  } 

  constructor() { }
}
