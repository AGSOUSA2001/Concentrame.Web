import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LinkCreate, LinkModel, LinkUpdate } from '../models/links';

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

  getLinkById(id: number): Observable<LinkModel> {
    return this.http.get<LinkModel>(`${this.endpoint}/${id}`)
  }

  createLinks(data: LinkCreate): Observable<LinkCreate> {
    return this.http.post<LinkCreate>(`${this.endpoint}`, data);
  }

  updateLink(id: number, data: LinkUpdate): Observable<LinkUpdate> {
    return this.http.put<LinkUpdate>(`${this.endpoint}/${id}`, data);
  }

  deleteLink(id: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.endpoint}/${id}`);
  }
}
