// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { environment } from 'src/environments/environment';
// import { Observable } from 'rxjs';
// @Injectable({
//   providedIn: 'root',
// })
// export class Loginservice {
//   constructor(private httpClient: HttpClient) {}

//   private apiUrl = environment.apiUrl;

//   onSubmit(obj: any): Observable<any> {
//     const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
//     return this.httpClient.post(`${this.apiUrl}/auth/login`, obj, { headers });
//   }
// }

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Loginservice {
  private apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) {}

  onSubmit(obj: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post(`${this.apiUrl}/auth/login`, obj, { headers });
  }
}
