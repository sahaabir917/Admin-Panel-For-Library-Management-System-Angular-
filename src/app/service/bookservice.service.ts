import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { Book } from '../model/book';
import { BookRequestModel } from '../model/book-request-model';
@Injectable({
  providedIn: 'root',
})
export class BookserviceService {
  private apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) {}

  getAllBooks(): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/admin/getAllBooks`);
  }

  addNewBook(bookRequestModel: BookRequestModel): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post(
      `${this.apiUrl}/admin/addNewBook`,
      bookRequestModel,
      {
        headers,
      }
    );
  }
}
