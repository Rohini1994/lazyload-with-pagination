import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';
import { UserServiceService} from '../customers/user-service.service';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  emailRegex =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

 showSucessMessage:boolean;
 serverErrorMessages:string;

  constructor(public userService:UserServiceService) { }

  ngOnInit(): void {
  }

  
  onSubmit(form:NgForm) {
    console.log('data is here');
    
    this.userService.postUser(form.value).subscribe(
      res =>{
        this.showSucessMessage = true;
        setTimeout(() => this.showSucessMessage = false,4000);
        this.resetForm(form);
      },
      err => {
        if(err.status === 422){
          this.serverErrorMessages = err.error.join('<br/>');
          
        }
        else{
          this.serverErrorMessages ='Something Went Wrong Please Contact With Admin.';
        }
      }
    );
 
   }

   
  resetForm(form:NgForm){
    this.userService.selectedUser={
      fullName: '',
      email: '',
      password: ''

    };
    form.resetForm();
    this.serverErrorMessages='';
  }

}
