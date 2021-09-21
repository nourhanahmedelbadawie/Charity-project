import { FormBuilder, Validators } from '@angular/forms';
import { Component, HostListener, OnInit } from "@angular/core";

import { AngularEditorConfig } from "@kolkov/angular-editor";

@Component({
  selector: "app-single-achievment",
  templateUrl: "./single-achievment.component.html",
  styleUrls: ["./single-achievment.component.scss"],
})
export class SingleAchievmentComponent implements OnInit {
  constructor(private fb:FormBuilder) {}
  fileName=null
  fileName2=null

  


  dragAreaClass: string;
  onFileChange(event: any) {
    let files: FileList = event.target.files;
    this.saveFiles(files);
  }
  onFileChange2(event: any) {
    let files: FileList = event.target.files;
    this.saveFiles2(files);
  }
  ngOnInit() {
    this.dragAreaClass = "dragarea";
  }

  saveFiles(files: FileList) {
    console.log(files);

    this.fileName = files[0].name;
  }
  
  saveFiles2(files: FileList) {
    console.log(files);

    this.fileName2 = files[0].name;
  }

  // submotion form
  achForm = this.fb.group({
    title: ["", Validators.required],
    intro: ["", Validators.required],
    body: ["", Validators.required],
  });
 submit(){
  console.log(this.achForm.value) 
 }
}
