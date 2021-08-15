import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  currentbreadcrumb:{}={
    title:"about",
    subtitle:"about",
    bg:"../../../assets/images/about/about_manner.jpg",
    link:"/about"
  }
  constructor() { }

  ngOnInit() {
  }

}
