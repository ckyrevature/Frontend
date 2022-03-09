import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user-Model';
import { UserService } from '../services/user.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  [x: string]: any;

  newUser: User = {
    user_name: "",
    password: "",
    users_role_id: 0
  }

  errorMessage: string = "";
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  validateUser() {
    console.log("login works");

    this.userService.validateUser(this.newUser).subscribe((response) => {
      console.log(response);

      if (response.users_role_id == 1) {
        this.router.navigate(['display'])
      } else {
        this.router.navigate(['display'])
      }

    });


    console.log("login succesfull!!");
  }

}

