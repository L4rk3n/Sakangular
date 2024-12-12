import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Login } from '../Models/Login.Model';
import {jwtDecode} from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'https://localhost:7242/api/auth';
  public loggedInSubject = new BehaviorSubject<boolean>(this.isLoggedIn());
  public loggedIn$ = this.loggedInSubject.asObservable();

  public adminSubject = new BehaviorSubject<boolean>(this.isAdmin());
  public admin$ = this.adminSubject.asObservable();

  constructor(private http: HttpClient) {}

  login(login: Login): Observable<any> {
    return this.http.post<any>(this.apiUrl, login);
  }

  setToken(token: string): void {
    localStorage.setItem('token', token);
    this.loggedInSubject.next(this.isLoggedIn());
    this.adminSubject.next(this.isAdmin());
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    return !!token;
  }

  logout(): void {
    localStorage.removeItem('token');
    this.loggedInSubject.next(this.isLoggedIn());
    this.adminSubject.next(this.isAdmin());
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isAdmin(): boolean {
    const token = this.getToken();
    
    if (!token) return false;
    const decoded: any = jwtDecode(token);
    console.log(decoded);
    return decoded.isAdmin === 'true';
  }

  isActivated(): boolean {
    const token = this.getToken();
    if (!token) return false;
    const decoded: any = jwtDecode(token);
    return decoded.isActivated === 'true';
  }

  isCancelled(): boolean {
    const token = this.getToken();
    if (!token) return false;
    const decoded: any = jwtDecode(token);
    return decoded.isCancelled === 'true';
  }

  getUserId(): string | null {
    const token = this.getToken();
    console.log(token);
    if (!token) return null;
    const decoded: any = jwtDecode(token);
    return decoded.IdUtilisateur || null;
  }
}



