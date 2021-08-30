import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent implements OnInit {
  currentbreadcrumb:{}={
    title:"Document",
    subtitle:"Document",
    bg:"../../../assets/images/about/about_manner.jpg",
    link:"/doc"
  }
  constructor() { }

  ngOnInit() {
  }
  pdfSrc = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";

}
