import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Access } from '../Models/access.Model';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  private apiUrl = 'https://localhost:7242/api/Admin'; 

  constructor(private http: HttpClient) {}

  getAccess(): Observable<Access[]> {
    return this.http.get<Access[]>(`${this.apiUrl}`);
  }
}
