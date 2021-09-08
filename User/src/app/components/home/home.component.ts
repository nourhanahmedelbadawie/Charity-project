import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {ConfigService  } from "../../config/config.service";
import { Validators } from '@angular/forms';
import Swal from 'sweetalert2'



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // breadcrumb
    currentbreadcrumb:{}={
    title:"Change child's life",
    subtitle:"Organisation is set up to provide help and save money Organisation is set up to provide help and save money",
    bg:"../../../assets/images/about/about_manner.jpg",
    link:"",
    home:true
  }




  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto')

  ngOnInit() {
   
  }

 
 

  constructor(private fb: FormBuilder ,private configService:ConfigService ) {

      }
            // Make Donation Form 

makeDonationForm =  this.fb.group({
  name: ['', Validators.required], 
  email:  ['',[Validators.required, Validators.email]],

});


makeVolunteerForm =  this.fb.group({
  name: ['', Validators.required], 
  email:  ['', [Validators.required, Validators.email]],

});
sendDonar(){
  
    console.log(this.makeDonationForm.valid)
    this.configService.PostDoner( JSON.stringify(this.makeDonationForm.value))

      .subscribe((data: any) =>{
        this.makeDonationForm.reset()

        Swal.fire({
          title: 'success',
          text: 'Send successfuly',
          icon: 'success',
          confirmButtonText: 'Ok'
        })

      }  ,(err)=>{
        this.makeDonationForm.reset()

        Swal.fire({
          title: 'Error',
          text: 'Something went wrong ',
          icon: 'error',
          confirmButtonText: 'Ok'
        })
        
  
      })
      
      
  
}

sendVolunteer(){
  
  console.log(this.makeVolunteerForm.value)
  this.configService.PostVolunteer(JSON.stringify(this.makeVolunteerForm.value))
    .subscribe((data: any) =>{
      this.makeVolunteerForm.reset()
      console.log(data)
          Swal.fire({
          title: 'success',
          text: 'Send successfuly',
          icon: 'success',
          confirmButtonText: 'Ok'
        })
    } 
    ,(err)=>{
      this.makeVolunteerForm.reset()
      console.log(err)
      Swal.fire({
        title: 'Error',
        text: 'Something went wrong ',
        icon: 'error',
        confirmButtonText: 'Ok'
      })

    });

}


}
