import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  currentbreadcrumb:{}={
    title:"Partners",
    subtitle:"Partners",
    bg:"../../../assets/images/about/about_manner.jpg",
    link:"/services"
  }
}
