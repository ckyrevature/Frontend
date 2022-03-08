import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../common/models/user-Model';
import { UserService } from '../common/services/user.service';

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
    user_id: 0,
    first_name: '',
    last_name: '',
    email: '',
    users_role_id: 0
  }

  errorMessage: string = "";
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  validateUser() {
    console.log("login works");
    //let returnUser: User = this.userService.validateUser(this.newUser);
    //if (returnUser.userName == "http://localhost:4040/api/username/" + returnUser.userName && returnUser.password == "http://localhost:4040/api/password/" + returnUser.password) {



    //returnUser.userName == "http://localhost:4040/api/username/" + returnUser.userName && returnUser.password == "http://localhost:4040/api/password/" + returnUser.password
    //this.authService.storeUser(newUser);
    //this.authService.loggedIn=true;
    // invalid credentials

    // this.userService.validateUser(this.newUser).subscribe((response: any) => {
    //  console.log(response);

    // check for the role of the response
    // if manager, route to manager list
    // if employee, route to employee list
    // });

    //   let returnUser.usedId;

    //   if (roleID== 1) {
    //       //go to Employee-list
    //   } else if (roleID == 2) {
    //     //go to Mangaer-list
    //   }

    //   this.errorMessage = "Invalid Credentials!!";
    // } else {
    //   //navigate to display component
    //   this.router.navigate(['display']);
    // }
    console.log("login succesfull!!");
  }
}

