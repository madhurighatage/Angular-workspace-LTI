import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../employee/Employee';

@Injectable({
  providedIn: 'root',
})
export class HttpEmployeeService {
  baseUrl: string = 'http://localhost:8080/emp';

  constructor(private httpEmpServ: HttpClient) {}

  ngOnInit() {
    this.getEmployees();
  }
  public getEmployees(): any {
    console.log(this.httpEmpServ.get<Employee[]>(this.baseUrl+"/jpalistall"));
    return this.httpEmpServ.get<Employee[]>(this.baseUrl+"/jpalistall");
  }
}
