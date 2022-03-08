import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-validations',
  templateUrl: './validations.component.html',
  styleUrls: ['./validations.component.css']
})
export class ValidationsComponent implements OnInit {

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  title = 'Angular Reactive forms';

  contactForm = new FormGroup({
    firstname: new FormControl('',[Validators.required,Validators.minLength(5)]),
    lastname: new FormControl('',[Validators.required, Validators.maxLength(15), 
      Validators.pattern("^[a-zA-Z]+$")]),
    // email:new FormControl('',[Validators.email,Validators.required]),
    //gender: new FormControl('',[Validators.required]),   
  })

   get firstname() {
    return this.contactForm.get('firstname');
  }   
  get lastname() {
    return this.contactForm.get('lastname');
  }  
  // get email() {
  //   return this.contactForm.get('email');
  // } 
  //  get gender() {
  //   return this.contactForm.get('gender');
  // } 
   onSubmit() {
    console.log(this.contactForm.value);
  }

}
