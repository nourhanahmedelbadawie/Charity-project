import { Component, OnInit } from "@angular/core";
import { GetStaticDataService } from "src/app/config/get-static-data.service";
<<<<<<< HEAD
import { baseUrl } from "src/environments/environment";
=======
>>>>>>> df7ecfe78ea44ab757be34bf3fabeaa0c077ee1f

@Component({
  selector: "app-partners",
  templateUrl: "./partners.component.html",
  styleUrls: ["./partners.component.scss"],
})
export class PartnersComponent implements OnInit {
  PartnertData: any;
<<<<<<< HEAD
  currentbreadcrumb: { title: string; subtitle: string; bg: string; link: string; };
=======
>>>>>>> df7ecfe78ea44ab757be34bf3fabeaa0c077ee1f
  constructor( private getStaticDataService:GetStaticDataService ) { }

  ngOnInit() {

         // get Partner  Data 
         this.getStaticDataService.getPartnerData(
          ).subscribe(data=>{
           this.PartnertData= (data)
           console.log(this.PartnertData)
<<<<<<< HEAD
           this.currentbreadcrumb = {
            title: "Partners",
            subtitle: "Partners",
            bg:`${baseUrl}${this.PartnertData.data.cover_path}`,
            link: "/partners",
          };
       

     })
     
  }
  
=======
         
       
       
     })
     
  }
  currentbreadcrumb: {} = {
    title: "Partners",
    subtitle: "Partners",
    bg: "../../../assets/images/Home/banner/banner.png",
    link: "/partners",
  };
>>>>>>> df7ecfe78ea44ab757be34bf3fabeaa0c077ee1f
}
    
