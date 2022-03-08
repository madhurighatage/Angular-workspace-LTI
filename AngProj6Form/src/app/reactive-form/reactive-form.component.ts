import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  //During injection an instance of FormBuilder will be created 
  //and we assign it to the fb variable (in the constructor).
  //control - creates a new FormControl
  //group - creates a new FormGroup ( key value pair )  //vname - key  // Meenal- value 
myForm: FormGroup;
vname:string="";
vpsw:string=""; 
//constructor injection 
  constructor(fb: FormBuilder) 
  {
     this.myForm = new FormGroup({
      var_name: new FormControl(''),
      var_psw: new FormControl(''),
    });
  }
  onSubmit(value: string): void {    
    console.log('you submitted value: ', value);
    this.vname=this.myForm.value.var_name;
    this.vpsw=this.myForm.value.var_psw;
  }
  ngOnInit() {
  }  


}
