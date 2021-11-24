import { Component } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.css'],
  interpolation: ['[[', ']]'],
})
export class ImgComponent {
  public result: string = '';

  public imgLink: string = '';

  inputImg(event: any) {
    this.imgLink = event.target.value;
  }

  addImg() {
    this.result = this.imgLink;
    this.imgLink = '';
  }
}
