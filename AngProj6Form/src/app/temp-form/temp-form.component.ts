import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp-form',
  templateUrl: './temp-form.component.html',
  styleUrls: ['./temp-form.component.css']
})
export class TempFormComponent implements OnInit {
  vname: string="";
  vpsw: string="";
  constructor() { }
  ngOnInit() {
  }  

  onSubmit(myForm: any): void {
    
    console.log('you submitted value:', myForm);
    this.vname = myForm.var_name;
    this.vpsw = myForm.var_psw;
  }

}
