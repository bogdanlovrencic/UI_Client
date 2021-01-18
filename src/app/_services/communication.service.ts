import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  private baseUrl = `${environment.apiUrl}`;

  constructor(private http: HttpClient) {}

  getIdentifiedObjects() {
    return this.http.get(this.baseUrl + "getDetails/getIdentifiedObjects");
  }
}
