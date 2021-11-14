import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetStaticDataService } from 'src/app/config/get-static-data.service';
<<<<<<< HEAD
import { baseUrl } from "../../../environments/environment";
=======
>>>>>>> df7ecfe78ea44ab757be34bf3fabeaa0c077ee1f

@Component({
  selector: 'app-achievment',
  templateUrl: './achievment.component.html',
  styleUrls: ['./achievment.component.scss']
})
export class AchievmentComponent implements OnInit {
<<<<<<< HEAD
 
  achievementData: any;
  baseUrl=baseUrl
  currentbreadcrumb: { title: string; subtitle: string; bg: string; link: string; };
=======
    currentbreadcrumb:{}={
    title:"Achievement",
    subtitle:"Achievement",
    bg:"../../../assets/images/about/about_manner.jpg",
    link:"/achievement"
  }
  achievementData: any;
>>>>>>> df7ecfe78ea44ab757be34bf3fabeaa0c077ee1f

  constructor( private getStaticDataService:GetStaticDataService ,private route: ActivatedRoute) { }

  ngOnInit() {
    
     // get Achivement  Data 
     this.getStaticDataService.getOneAchData(this.route.snapshot.paramMap.get('id')
     ).subscribe(data=>{
      this.achievementData= (data)
      console.log(this.achievementData)
    
  
    })
<<<<<<< HEAD
    this.currentbreadcrumb={
      title:"Achievement",
      subtitle:"Achievement",
      bg:`${baseUrl}${this.achievementData.cover_path}`,
      link:"/achievement"
    }
=======
>>>>>>> df7ecfe78ea44ab757be34bf3fabeaa0c077ee1f
  }
 
}
