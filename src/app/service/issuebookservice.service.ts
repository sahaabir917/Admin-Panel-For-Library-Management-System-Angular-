import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class IssuebookserviceService {
  private apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) {}

  getAllIssuedBooks(): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/api/issuebook/getIssuedBook`);
  }
}
