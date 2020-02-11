import { Component } from '@angular/core';
import { element } from 'protractor';
import { escape } from 'querystring';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  url = 'http://blog.miniasp.com/';
  imgurl = '/assets/images/logo.png';

  textlength = 0;
  constructor() {
  }
  changeTitle(altKey: boolean) {
    if (altKey) {
      this.title  = 'The Will Will Web';
    }
  }
  keyin(keyword: string) {
    console.log(keyword);
    this.textlength = keyword.length;
  }
  keyesc(input: HTMLInputElement) {
    this.textlength = 0;
    input.value = '';
  }
}
