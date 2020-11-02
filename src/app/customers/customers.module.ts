import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';



@NgModule({
  declarations: [CustomersComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    FormsModule
  ]
})
export class CustomersModule { 
  constructor(){
    console.log('Login Module Loaded');
  }
}
