import { Component } from '@angular/core';
import { AuthService } from '../../auth-service.service';

@Component({
    selector: 'app-main',
    imports: [],
    templateUrl: './main.component.html',
    styleUrl: './main.component.scss',
    providers: [AuthService],
    standalone: true
})
export class MainComponent {

}
