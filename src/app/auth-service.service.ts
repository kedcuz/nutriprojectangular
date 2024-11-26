import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './model/user.model';
import moment from 'moment';
import { Router } from '@angular/router';
import { Konstanten } from './konstanten';
import { HttpHeaders } from '@angular/common/http';
@Injectable()
export class AuthService {

  constructor(private http: HttpClient,private router: Router) {
    
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
      const expiresAt = moment().add(authResult.expiresIn,'second');

      localStorage.setItem('id_token', authResult);
      localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
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