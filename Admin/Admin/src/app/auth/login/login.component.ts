import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {  ConfigService } from "../../config/config.service";
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder ,private configService:ConfigService)  { 
    
  }
  loginForm = this.fb.group({
    email: ['' , Validators.required , Validators.email],
    password: ['' , Validators.required ],
 
  })
  ngOnInit(): void {
  }


  
  submit(e){
    e.preventDefault()
  console.log(this.loginForm.value)  
  this.configService.login( JSON.stringify(this.loginForm.value))

  .subscribe((data: any) =>{
    // this.loginForm.reset()

    Swal.fire({
      title: 'success',
      text: 'Send successfuly',
      icon: 'success',
      confirmButtonText: 'Ok'
    })

  }  ,(err)=>{
    // this.loginForm.reset()
    console.log(err)

    Swal.fire({
      title: 'Error',
      text: 'Something went wrong ',
      icon: 'error',
      confirmButtonText: 'Ok'
    })
    
  })
}
}


