import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lebensmittel } from './model/lebensmittel.model'; // Adjust the path as needed
import { Konstanten } from './konstanten'; // Adjust the path as needed

@Injectable({
  providedIn: 'root'
})
export class LebensmittelService {

  private apiUrl = Konstanten.restApiEndpoint + "/api/lebensmittel";

  constructor(private httpClient: HttpClient) { }

  saveLebensmittel(lebensmittel: Lebensmittel): Observable<Lebensmittel> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post<Lebensmittel>(this.apiUrl, lebensmittel, { headers });
  }

  deleteLebensmittel(id: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiUrl}/${id}`);
  }
}