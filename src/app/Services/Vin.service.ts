import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vin} from '../Models/vin.Model';
import { Vindispoupdate } from '../Models/vindispoupdate.Model';
import { Vinupdate } from '../Models/vinupdate.Model';

@Injectable({
  providedIn: 'root'
})
export class VinService {
  private baseUrl: string = 'https://localhost:7242/api/Vin'; 

  constructor(private http: HttpClient) { }

  getVins(): Observable<Vin[]> {
    return this.http.get<Vin[]>(`${this.baseUrl}`);
  }

  createVin(vin: Vinupdate): Observable<Vinupdate> {
    return this.http.post<Vinupdate>(`${this.baseUrl}`, vin);
  }

  getVinById(id: number): Observable<Vin> {
    return this.http.get<Vin>(`${this.baseUrl}/byVin/${id}`);
  }

  updateVin(id: number, vin: Vinupdate): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/${id}`, vin);
  }

  updateDispo(id: number,Vindispoupdate: Vindispoupdate): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/Dispo`, { id, Vindispoupdate });
  }
}
