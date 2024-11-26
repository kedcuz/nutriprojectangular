import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './auth-service.service';
import { CommonModule } from '@angular/common';
import { Konstanten } from './konstanten';
import { InfoComponent } from "./info/info.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, FormsModule, CommonModule, InfoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers:[AuthService]
})
export class AppComponent {
  constructor( private authService: AuthService, private router: Router){}
  konstanten = Konstanten
  

}
