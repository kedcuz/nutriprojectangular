import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../auth-service.service';
import { Router } from '@angular/router';
import { MatFormField } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
@Component({
    selector: 'login',
    providers: [AuthService],
    imports: [ReactiveFormsModule, MatFormField, MatInputModule],
    templateUrl: `login.component.html`,
    standalone: true
})
export class LoginComponent {
  loginForm: FormGroup
  constructor(
    private authService: AuthService,
    @Inject(Router) private router: Router) {
    this.loginForm = new FormGroup({
      email: new FormControl(""),
      password: new FormControl("")
    });

  }

  login() {
    const val = this.loginForm.value;
    console.log(val)
    if (val.email && val.password) {
      this.authService.login(val.email, val.password)

    }
  }
}

