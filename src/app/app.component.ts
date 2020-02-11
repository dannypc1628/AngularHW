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
  keyin( $event) {
    console.log($event);
    this.textlength = $event.target.value.length;
    if ($event.key === 'Escape') {
      this.textlength = 0;
      $event.target.value = '';
     }
  }
}
