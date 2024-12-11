import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Changepassword } from '../Models/changepassword.Model';
import { UpdateUtilisateur } from '../Models/updateprofile.Model';
import { Utilisateur } from '../Models/SignUp.Model';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  private apiUrl = 'https://localhost:7242/api/Utilisateur';

  constructor(private http: HttpClient) {}

  updatePassword(Changepassword: Changepassword): Observable<Changepassword>
    { 
        return this.http.put<Changepassword>(this.apiUrl+"/updatepassword", Changepassword);
    }
  getUtilisateur(id : number): Observable<Utilisateur[]> 
    {
      return this.http.get<Utilisateur[]>(`${this.apiUrl}/${id}`);
    }
  updateUtilisateur(id:number,Utilisateur: UpdateUtilisateur): Observable<UpdateUtilisateur> 
    {
      return this.http.put<UpdateUtilisateur>(`${this.apiUrl}/${id}`, Utilisateur);
    }
}
