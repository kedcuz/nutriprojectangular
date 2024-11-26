import { Component } from '@angular/core';
import { AuthService } from '../../auth-service.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  providers:[AuthService]
})
export class MainComponent {

}
