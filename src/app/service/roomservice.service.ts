import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class RoomserviceService {
  private apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) {}

  getAllRooms(): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/api/room/getAllRooms`);
  }
}
