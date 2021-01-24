import {Component, OnInit} from '@angular/core';
import {AuthService} from './_services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private roles: string | null = '';
  isLoggedIn = false;
  showAdminBoard = false;
  username?: string;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.authService.getToken();

    if (this.isLoggedIn) {
      const user = this.authService.getUser();
      this.roles = this.authService.getUserRole();

      this.showAdminBoard = this.roles === 'ROLE_ADMIN';

      this.username = user as string;
    }
  }

  logout(): void {
    this.authService.logout();
  }
}
