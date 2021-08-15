import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { ConfigService } from 'src/app/config/config.service';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  loader:boolean=true
  options: FormGroup;
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto')

  ngOnInit() {
    setTimeout(()=>{
   this.loader=false

    } ,2000)
  }

 
 


  constructor(private fb: FormBuilder ,private configService:ConfigService ) {

  }
        // Make Donation Form 

        subscribeForm =  this.fb.group({
type: ['', Validators.required], 
email:  ['',[Validators.required, Validators.email]],

});




subscribe(){
  console.log( this.subscribeForm.value)
}
      }
  


