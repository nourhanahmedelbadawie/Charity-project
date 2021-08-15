import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {ConfigService  } from "../../config/config.service";
import { Validators } from '@angular/forms';


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
    this.configService.PostDoner( JSON.stringify({   title: 'foo',
    body: 'bar',
    userId: 1}))
      .subscribe((data: any) => console.log(data));
  
}

sendVolunteer(){
  
  console.log(this.makeVolunteerForm.valid)
  this.configService.PostVolunteer( JSON.stringify({   title: 'foo',
  body: 'bar',
  userId: 1}))
    .subscribe((data: any) => console.log(data));

}

}
