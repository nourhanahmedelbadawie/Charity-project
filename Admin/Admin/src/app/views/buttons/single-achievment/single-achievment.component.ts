import { Component, HostListener, OnInit } from '@angular/core';

import { AngularEditorConfig } from '@kolkov/angular-editor';



@Component({
  selector: 'app-single-achievment',
  templateUrl: './single-achievment.component.html',
  styleUrls: ['./single-achievment.component.scss']
})
export class SingleAchievmentComponent implements OnInit {

  constructor() { }
  html: '';
error
htmlContent="e"
 modules = {
  toolbar: [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],

    [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
    [{ 'direction': 'rtl' }],                         // text direction

    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'font': [] }],
    [{ 'align': [] }],

    ['clean'],                                         // remove formatting button

    ['link', 'image', 'video']                         // link and image, video
  ]
};
  
  dragAreaClass: string;
  onFileChange(event: any) {
    let files: FileList = event.target.files;
    this.saveFiles(files);
  }
  ngOnInit() {
    this.dragAreaClass = "dragarea";



  }

  saveFiles(files: FileList) {

    if (files.length > 1) this.error = "Only one file at time allow";
    else {
      this.error = "";
      console.log(files[0].size,files[0].name,files[0].type);
    }
  }



  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '100rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [
      ['bold']
      ],
    customClasses: [
      {
        name: "quote",
        class: "quote",
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ]
  };

 
}