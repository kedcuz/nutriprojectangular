
import { Inject, Injectable } from '@angular/core';
import { User } from './model/user.model';
import moment from 'moment';
import { Router } from '@angular/router';
import { Konstanten } from './konstanten';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { jwtDecode } from 'jwt-decode';

@Injectable({providedIn: 'root'})
export class AuthService {
  constructor(@Inject(HttpClient)private http: HttpClient,@Inject(Router) private router: Router) {
    
  }

  private httpOptions =  new HttpHeaders({
      'Accept': 'text/html, application/xhtml+xml, */*',
      'Content-Type': 'application/json',
      
    })
  ;
  
  login(username:string, password:string ) {
      this.http.post<User>(Konstanten.restApiEndpoint+'/authenticate', {username, password},{headers:this.httpOptions, responseType: 'text' as 'json'}).subscribe((res)=>{
        this.setSession(res)
        this.router.navigateByUrl('/');
      })      
  }
        
  private setSession(authResult:any) {
    const decodedToken: any = jwtDecode(authResult);
    const expiresAt = moment.unix(decodedToken.exp);

    localStorage.setItem('id_token', authResult);
    localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
  }          

  logout() {
      localStorage.removeItem("id_token");
      localStorage.removeItem("expires_at");
  }

  public isLoggedIn() {
      return moment().isBefore(this.getExpiration());
      
  }

  isLoggedOut() {
      return !this.isLoggedIn();
  }

  getExpiration() {
      const expiration:string |null = localStorage.getItem("expires_at");
      if(expiration != null){
      const expiresAt = JSON.parse(expiration);
      return moment(expiresAt);
    }
      return null
  }    
}