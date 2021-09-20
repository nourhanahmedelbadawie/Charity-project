import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Tobase4Service {

  constructor() { }
  getBase64(file) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      console.log(reader.result);
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }
}
