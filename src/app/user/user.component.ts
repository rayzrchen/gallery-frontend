import { Component, OnInit } from '@angular/core';
import {AuthService} from '../_services/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  currentUser: any;
  userToken: any;
  userRole: any;

  constructor(private token: AuthService) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    this.userToken = this.token.getToken();
    this.userRole = this.token.getUserRole();
  }
}
