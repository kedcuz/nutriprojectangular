import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Konstanten } from './konstanten';
import { AuthService } from './auth-service.service';
import { Router } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';




describe('AppComponent', () => {
  let authService: AuthService;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [
        { provide: AuthService, useValue: jasmine.createSpyObj('AuthService', ['login', 'logout']) },
        { provide: Router, useValue: jasmine.createSpyObj('Router', ['navigate']) },
        provideHttpClient(),
        provideHttpClientTesting() 
      ]
    }).compileComponents();

    authService = TestBed.inject(AuthService);
    router = TestBed.inject(Router);
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have konstanten defined', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.konstanten).toEqual(Konstanten);
  });

  it('should call AuthService login method', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    authService.login('testUser', 'testPassword');
    expect(authService.login).toHaveBeenCalled();
  });

  it('should navigate to a route', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    router.navigate(['/']);
    expect(router.navigate).toHaveBeenCalledWith(['/']);
  });
});
