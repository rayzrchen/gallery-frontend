import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {config} from '../config/api.config';
import jwt_decode from 'jwt-decode';

// =============' KEY IN LOCALSTORAGE '==============
const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
const ROLES_KEY = 'auth-roles';

// =================================================

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {
  }

  // tslint:disable-next-line:typedef
  async login(user: LoginUser) {
    return await new Promise(((resolve, reject) => {
      this.http
        .post(
          `${config.apiBaseUrl}/users/login`,
          new HttpParams().append('username', user.username).append('password', user.password),
          {
            responseType: 'text',
            headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
          })
        .subscribe(
          token => {
            if (token) {
              this.saveToken(token);
              this.saveUser(token);
              resolve(true);
            }
          },
          err => {
            console.log('User Not Found');
            resolve(false);
          }
        );
    }));
  }

  register(user: RegisterUser): Observable<string> {
    return this.http.post(`${config.apiBaseUrl}/users/register`, user, {responseType: 'text'});
  }

  /**
   * Disconnecting User From Both Front and Back
   */
  logout(): boolean {
    this.http.get<any>(`${config.apiBaseUrl}/logout`);
    this.signOut();
    return true;
  }

  /**
   * Verify if User is Connected
   */
  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  // =================================================
  // 🔐🔐 TOKEN MANAGER 🔐🔐
  // =================================================

  /**
   * Clears the localstorage and Disconnect the User
   * from the Front-End
   *
   */
  signOut(): void {
    localStorage.clear();
    this.reloadPage();
  }

  private reloadPage(): void {
    window.location.reload();
  }

  public saveToken(token: string): void {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.setItem(TOKEN_KEY, token);
  }

  /**
   * Get The Token Stored in LocalStorage
   * ¤ If Exist
   */
  public getToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
  }

  public saveUser(token: any): void {
    localStorage.removeItem(USER_KEY);
    // ============================================
    /**
     * Uses the sub property in the Crypted JWT Token
     */


    localStorage.setItem(USER_KEY, (jwt_decode(token) as any).sub);
    // ============================================
    /**
     * If you got many roles for one user you need to replace this under line by this commented one :
     * localStorage.setItem(ROLES_KEY, this.jwtHelper.decodeToken(token).roles[0]);
     */
    localStorage.setItem(ROLES_KEY, (jwt_decode(token) as any).auth[0].authority);


  }

  /**
   * Get The User Stored in LocalStorage
   * ¤ If Exist
   */
  public getUser(): boolean | string {
    const user = localStorage.getItem(USER_KEY);
    if (user) {
      return user;
    }
    return false;
  }

  /**
   * Get The Role of the connected User Stored in LocalStorage
   * ¤ If Exist
   */
  public getUserRole(): string | null {
    const role = localStorage.getItem(ROLES_KEY);
    if (role) {
      return role;
    }
    return null;
  }

  // =================================================
  // END TOKEN MANAGEMENT
  // =================================================

}

export interface RegisterUser {
  username: string;
  nickName: string;
  password: string;
  roles: number[];
}

export interface LoginUser {
  username: string;
  password: string;
}
