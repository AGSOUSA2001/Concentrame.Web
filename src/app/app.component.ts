import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'concentrame';

  constructor(public router: Router){}

  email(): void{
    window.open("https://mail.google.com/mail/u/0/?view=cm&fs=1&to=andresgilsousa@gmail.com&su=Concéntrame&body=&tf=1",'_blanck');
  }

  map(): void{
    window.open("https://www.google.com/maps/place/San+Valero+Foundation/@41.6698819,-0.8786073,18.79z/data=!4m5!3m4!1s0x0:0x66cc84d326d51c26!8m2!3d41.6697692!4d-0.878823");
  }

  openSocial(url:string): void{
    window.open(url, '_blanck');
  }
}
