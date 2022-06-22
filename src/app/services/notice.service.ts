import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NoticeModel, NoticeReadModel } from '../models/notices';

@Injectable({
  providedIn: 'root'
})
export class NoticeService {

  endpoint = '';

  constructor(private http: HttpClient) {
    this.endpoint = `${environment.apiURL}/Notices`;
  }

  getAllNotices(): Observable<NoticeModel[]> {
    return this.http.get<NoticeModel[]>(`${this.endpoint}`);
  }

  getLastNotices(): Observable<NoticeModel[]> {
    return this.http.get<NoticeModel[]>(`${this.endpoint}/lastNotices`);
  }

  getNoticeById(id: number): Observable<NoticeReadModel> {
    return this.http.get<NoticeReadModel>(`${this.endpoint}/${id}`)
  }

  getNoticesByCategory(category: string): Observable<NoticeModel[]> {
    return this.http.get<NoticeModel[]>(`${this.endpoint}/category/${category}`);
  }

  getLastNoticesByCategory(category: string): Observable<NoticeModel[]> {
    return this.http.get<NoticeModel[]>(`${this.endpoint}/lastNoticesCategory/${category}`);
  }
}
