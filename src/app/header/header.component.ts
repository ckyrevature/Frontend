import { Component, OnInit } from '@angular/core';
import { User } from '../models/user-Model';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  isLoggedIn(): boolean {
    return this.authService.loggedIn;
  }

  getRole(): number {
    let data: User = this.authService.retrieveUser();
    return data.users_role_id;
  }
}