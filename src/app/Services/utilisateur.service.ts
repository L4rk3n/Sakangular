import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Changepassword } from '../Models/changepassword.Model';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  private apiUrl = 'https://localhost:7242/api/Utilisateur/updatepassword';

  constructor(private http: HttpClient) {}

  updatePassword(Changepassword: Changepassword): Observable<Changepassword>
    { 
        return this.http.post<Changepassword>(this.apiUrl, Changepassword);
    }
}
