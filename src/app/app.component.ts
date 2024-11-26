import { Component, inject, Inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './auth-service.service';
import { CommonModule } from '@angular/common';
import { Konstanten } from './konstanten';
import { InfoComponent } from "./info/info.component";
@Component({
    selector: 'app-root',
    imports: [RouterOutlet, FormsModule, ReactiveFormsModule, CommonModule, InfoComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    providers: [AuthService], standalone: true  
})

export class AppComponent {
  private router: Router = inject(Router);
  private authService: AuthService = inject(AuthService);
  constructor( ){}
  konstanten = Konstanten
  

}