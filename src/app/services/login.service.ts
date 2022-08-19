import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserLogin } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  endpoint = 'https://concentrameapi.azurewebsites.net/Login';

  constructor(private http: HttpClient) {
  }

  loginUser(data: UserLogin): Observable<boolean> {
    return this.http.post<boolean>(`${this.endpoint}`, data);
  }

}
