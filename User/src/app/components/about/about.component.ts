<<<<<<< HEAD
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { GetStaticDataService } from "src/app/config/get-static-data.service";
import { baseUrl } from "../../../environments/environment";
=======
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetStaticDataService } from 'src/app/config/get-static-data.service';
>>>>>>> df7ecfe78ea44ab757be34bf3fabeaa0c077ee1f

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"],
})
export class AboutComponent implements OnInit {
<<<<<<< HEAD
  baseUrl = baseUrl;
  aboutData: any = {};
  currentbreadcrumb: {
    title: string;
    subtitle: string;
    bg: string;
    link: string;
  };
  choose: { title: any; num: string; content: any; }[];
=======
  currentbreadcrumb:{}={
    title:"about",
    subtitle:"about",
    bg:"../../../assets/images/about/about_manner.jpg",
    link:"/about"
  }

  
 
  aboutData: any;

  constructor( private getStaticDataService:GetStaticDataService ) { }

  ngOnInit() {
    
     // get Achivement  Data 
     this.getStaticDataService.getAboutData(
     ).subscribe(data=>{
      this.aboutData= (data)
      console.log(this.aboutData)
     }
     )
    }
    
  
  chooseContent:number=0
  choose:{}[]=[{
    title:"Places To Get Lost"
    ,num:
    "01",
    content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur in maxime impedit deserunt molestiae nesciunt ab voluptatum ad obcaecati a et quidem officia quam"
  },{
    title:"Help Peaple"
    ,num:
    "02",
    content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur in maxime impedit deserunt molestiae nesciunt ab voluptatum ad obcaecati a et quidem officia quam"
>>>>>>> df7ecfe78ea44ab757be34bf3fabeaa0c077ee1f

  constructor(private getStaticDataService: GetStaticDataService) {}

<<<<<<< HEAD
  ngOnInit() {

    this.getStaticDataService.getAboutData().subscribe((data) => {
      this.aboutData = data;
      console.log("this.aboutData");

      this.currentbreadcrumb = {
        title: "about",
        subtitle: "about",
        bg: `${baseUrl}${this.aboutData.AboutUsMain.cover_path}`,
        link: "/about",
      };
      this.choose= [
        {
          title: this.aboutData.AboutUsWhyChooseUs01.title,
          num: "01",
          content: this.aboutData.AboutUsWhyChooseUs01.intro,
        },
        {
          title: this.aboutData.AboutUsWhyChooseUs02.title,
          num: "02",
          content: this.aboutData.AboutUsWhyChooseUs02.intro,
        },
        {
          title: this.aboutData.AboutUsWhyChooseUs03.title,
          num: "03",
          content: this.aboutData.AboutUsWhyChooseUs03.intro,
        },
        {
          title: this.aboutData.AboutUsWhyChooseUs04.title,
          num: "04",
          content: this.aboutData.AboutUsWhyChooseUs04.intro,
        },
      ];
    });
  }
=======
  
>>>>>>> df7ecfe78ea44ab757be34bf3fabeaa0c077ee1f

  chooseContent: number = 0;
  
  setChooseContent(i) {
    console.log(i);
    this.chooseContent = i;
  }
}
