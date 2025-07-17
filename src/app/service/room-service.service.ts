import { Injectable } from '@angular/core';
import { RoomRequestModel } from '../model/room-request-model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RoomServiceService {
  private apiUrl = environment.apiUrl;
  constructor(private httpClient: HttpClient) {}

  onSubmit(roomRequestModel: RoomRequestModel): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post(
      `${this.apiUrl}/api/room/addNewRoom`,
      roomRequestModel,
      {
        headers,
      }
    );
  }
}
