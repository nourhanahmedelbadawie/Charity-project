import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  currentbreadcrumb:{}={
    title:"Contact",
    subtitle:"Get In Touch",
    bg:"../../../assets/images/about/about_manner.jpg",
    link:"/contact"
  }
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
  }

  
  contactForm = this.fb.group({
    name: [''],
    email: [''],
    number: [''],
    subject: [''],
    msg: ['']

  });


  sendcontactForm(){
    console.log(this.contactForm)
  }

}
