import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Owner from 'src/models/owner';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl: string = 'http://localhost:5083/Owner';
  constructor(private http: HttpClient) {}

  signUp(user: Owner): Observable<Owner> {
    return this.http.post<Owner>(this.baseUrl, user);
  }

  getOwnerById(OwnerId: number): Observable<Owner> {
    return this.http.get<Owner>(`${this.baseUrl}/${OwnerId}`);
  }
}
