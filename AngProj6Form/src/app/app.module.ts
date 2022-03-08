import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TempFormComponent } from './temp-form/temp-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { FormStatusComponent } from './form-status/form-status.component';
import { ValidationsComponent } from './validations/validations.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TempFormComponent,
    ReactiveFormComponent,
    FormStatusComponent,
    ValidationsComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
