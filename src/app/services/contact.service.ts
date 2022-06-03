import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactModel } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  endpoint = '';

  constructor(private http: HttpClient) {
    this.endpoint = 'https://formspree.io/f/xvollnbk';
   }

  sendEmail(contact:ContactModel): Observable<ContactModel>{
    return this.http.post<ContactModel>(this.endpoint,contact);
  }
}
