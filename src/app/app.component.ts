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
    window.open("https://www.google.es/maps/place/C.+Monasterio+de+la+Oliva,+8,+50002+Zaragoza/@41.6495744,-0.8618916,17.54z/data=!4m5!3m4!1s0xd59145af9d143dd:0xb5e9fdc6b37e9b4c!8m2!3d41.6497509!4d-0.8601936?hl=es");
  }

  openSocial(url:string): void{
    window.open(url, '_blanck');
  }
}
