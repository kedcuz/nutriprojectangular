import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth-guard';
import { MainComponent } from './components/main/main.component';
import { LebensmittelComponent } from './components/lebensmittel/lebensmittel.component';
import { VitamineComponent } from './components/vitamine/vitamine.component';

export const routes: Routes = [
    {path:"",component:MainComponent,canActivate:[AuthGuard]},
    {path:"login",component:LoginComponent},
    {path:"lebensmittel",component:LebensmittelComponent,canActivate:[AuthGuard]},
    {path:"vitamine",component:VitamineComponent,canActivate:[AuthGuard]}
];
