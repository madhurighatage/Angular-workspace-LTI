import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-status',
  templateUrl: './form-status.component.html',
  styleUrls: ['./form-status.component.css']
})
export class FormStatusComponent implements OnInit {

  f: FormGroup;  
  var_name: AbstractControl;
 
  constructor(fb: FormBuilder) {  
    this.f = fb.group({  
      'var_name':  ['', Validators.required]  
    }); 
    this.var_name = this.f.controls['var_name'];  
  }
   
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
 
  onSubmit(value: string): void {  
    console.log('you submitted value: ', value);  
  }

}
