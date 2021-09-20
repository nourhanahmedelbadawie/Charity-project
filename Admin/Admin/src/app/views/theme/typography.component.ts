import { Component, OnInit, HostListener } from "@angular/core";
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { Tobase4Service } from "../../common/tobase4.service";

@Component({
  templateUrl: 'typography.component.html'
})
export class TypographyComponent {

  constructor(private tobase4Service:Tobase4Service) { }
  error: string;
  dragAreaClass: string;
  fileName:string=null
  onFileChange(event: any) {
    let files: FileList = event.target.files;
    this.saveFiles(files);
  }
  ngOnInit() {
    this.dragAreaClass = "dragarea";
  }
  @HostListener("dragover", ["$event"]) onDragOver(event: any) {
    this.dragAreaClass = "droparea";
    event.preventDefault();
  }
  @HostListener("dragenter", ["$event"]) onDragEnter(event: any) {
    this.dragAreaClass = "droparea";
    event.preventDefault();
  }
  @HostListener("dragend", ["$event"]) onDragEnd(event: any) {
    this.dragAreaClass = "dragarea";
    event.preventDefault();
  }
  @HostListener("dragleave", ["$event"]) onDragLeave(event: any) {
    this.dragAreaClass = "dragarea";
    event.preventDefault();
  }
  @HostListener("drop", ["$event"]) onDrop(event: any) {
    this.dragAreaClass = "dragarea";
    event.preventDefault();
    event.stopPropagation();
    if (event.dataTransfer.files) {
      let files: FileList = event.dataTransfer.files;
      this.saveFiles(files);
    }
  }

  saveFiles(files: FileList) {

    if (files.length > 1) this.error = "Only one file at time allow";
    else {
      this.error = "";
      this.fileName=files[0].name
      // console.log(files[0].name,files[0].type);
     
console.log(this.tobase4Service.getBase64(files[0]))
    }


    
  }

  
}