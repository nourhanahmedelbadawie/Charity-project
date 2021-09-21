import { Component, HostListener, Inject, OnInit } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { getStyle, rgbToHex } from "@coreui/coreui/dist/js/coreui-utilities";
import Swal from "sweetalert2";
import { FormBuilder, Validators } from "@angular/forms";
import { Tobase4Service } from "../../common/tobase4.service";
import { ConfigService } from "../../config/config.service";

@Component({
  templateUrl: "colors.component.html",
})
export class ColorsComponent implements OnInit {
  fileName: string = null;
  imageFilename2: string = null;
  imageFilename3: string = null;

  dragAreaClass: string;
  CountSection=[1]
  addCountSection(){
    this.CountSection.push(this.CountSection.length);
  }
  onFileChange(event: any, flag) {
    let files: FileList = event.target.files;
    this.saveFiles(files, flag);
  }
  onpdfChange(){
    
  }
  ngOnInit() {
    this.dragAreaClass = "dragarea";
  }
  constructor(
    private tobase4Service: Tobase4Service,
    private fb: FormBuilder,
    private configService: ConfigService
  ) {}

  saveFiles(files: FileList, flag) {
    console.log(files);

    flag === 1 ? (this.fileName = files[0].name) : false;
    flag === 2 ? (this.imageFilename2 = files[0].name) : false;
    flag === 3 ? (this.imageFilename3 = files[0].name) : false;
  }
  // submotion form
  docForm = this.fb.group({
    title: ["", Validators.required],
    subtitle: ["", Validators.required],
    about_section_title: ["", Validators.required],
    about_section_subtitle: ["", Validators.required],
  });
  submit() {
    this.configService
      .sendHomeScreen(JSON.stringify(this.docForm.value))

      .subscribe(
        (data: any) => {
          // this.loginForm.reset()

          Swal.fire({
            title: "success",
            text: "Send successfuly",
            icon: "success",
            confirmButtonText: "Ok",
          });
        },
        (err) => {
          // this.loginForm.reset()
          console.log(err);

          Swal.fire({
            title: "Error",
            text: "Something went wrong ",
            icon: "error",
            confirmButtonText: "Ok",
          });
        }
      );
  }
}
