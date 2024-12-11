import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Utilisateur } from '../Models/SignUp.Model';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {
  private apiUrl = 'https://localhost:7242/api/Utilisateur';

  constructor(private http: HttpClient) {}


  addUtilisateurs(Utilisateur: Utilisateur):Observable<Utilisateur> {
    return this.http.put<Utilisateur>(this.apiUrl, Utilisateur);
  }
  
}