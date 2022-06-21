import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LinkModel } from '../models/links';

@Injectable({
  providedIn: 'root'
})
export class LinkService {

  endpoint = '';

  constructor(private http: HttpClient) {
    this.endpoint = `${environment.apiURL}/Links`;
  }
  
  getAllLinks(): Observable<LinkModel[]> {
    return this.http.get<LinkModel[]>(`${this.endpoint}`);
  }
}
