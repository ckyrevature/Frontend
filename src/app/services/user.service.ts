
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user-Model';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private authService: AuthService) { }



  validateUser(newUser: User): Observable<User> {
    console.log(newUser.user_name);
    console.log(newUser.password);
    return this.http.get<User>(`http://localhost:5050/api/checkusers/${newUser.user_name}/${newUser.password}`);
  }
}