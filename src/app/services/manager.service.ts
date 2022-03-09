import { User } from './../models/user-Model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  constructor(private http: HttpClient) { }



  fetchAllEmployee(): Observable<User[]> {
    // we need to work with HttpClient to consume an endpoint
    return this.http.get<User[]>("http://localhost:5050/api/msae");
  }

  fetchAnEmployee(statusid: number): Observable<User> {
    return this.http.get<User>("http://localhost:5050/api/msbons" + statusid);
  }

  fetchSpecificEmployee(uid: number, statusid: number): Observable<User> {
    return this.http.get<User>("http://localhost:5050/api/msbons" + uid + statusid);
  }
}
