import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-partners",
  templateUrl: "./partners.component.html",
  styleUrls: ["./partners.component.scss"],
})
export class PartnersComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  currentbreadcrumb: {} = {
    title: "Partners",
    subtitle: "Partners",
    bg: "../../../assets/images/about/about_manner.jpg",
    link: "/partners",
  };
}
