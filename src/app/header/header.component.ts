import { Component, OnInit } from '@angular/core';
import { User } from '../common/models/user-Model';
// import { AuthserviceService } from '../user/authservice.service';
// import { EmployeeInfoList, User } from '../user/user.model';


@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isLoggedIn(): boolean {
    return this.authService.loggedIn;
  }

  getRole(): number{
    let data: User = this.authService.retrieveUser();
    return data.users_role_id;
  }
}