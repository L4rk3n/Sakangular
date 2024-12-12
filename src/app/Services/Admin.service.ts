import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Access } from '../Models/access.Model';
import { Nameless } from '../Models/nameless.Model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private apiUrl = 'https://localhost:7242/api/Admin'; 

  constructor(private http: HttpClient) {}

  getAccess(): Observable<Access[]> {
    return this.http.get<Access[]>(`${this.apiUrl}`);
  }
  putAccess(id: number, nameless: Nameless): Observable<Nameless> {
     return this.http.put<Nameless>(`${this.apiUrl}/${id}`, nameless); 
    } 
}
