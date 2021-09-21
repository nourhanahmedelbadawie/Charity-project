import { Component, OnInit } from '@angular/core';
import {  GetStaticDataService} from "../../config/get-static-data.service";

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
  constructor(
    private getStaticDataService:GetStaticDataService )  { }

  ngOnInit() {

    
  }
  // http://178.62.19.101:8888/index.php/api
  pdfSrc = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";

}
