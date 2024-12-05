import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '../Models/Login.Model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'https://localhost:7242/api/auth';

  constructor(private http: HttpClient) {}

  login(login: Login): Observable<any> {
    return this.http.post<any>(this.apiUrl, login);
  }

  isLoggedIn(): boolean {
     const token = localStorage.getItem('token'); return !!token; 
    }

    logout(): void {
      localStorage.removeItem('token');
    }
    

}