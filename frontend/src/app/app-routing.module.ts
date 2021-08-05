import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AdminPanelComponent } from './components/Admin-panel/admin-panel.component';
import { CardComponent } from './components/card/card.component';
import { DestinationComponent } from './components/destination/destination.component';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AuthGuard } from './shared/services/AuthGuard';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'destination',component:DestinationComponent},
  {path:'card',component:CardComponent,canActivate:[AuthGuard]},
  {path:'favorite',component:FavoriteComponent,canActivate:[AuthGuard]},
  {path:'profile',component:ProfileComponent,canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'admin',component:AdminPanelComponent,canActivate:[AuthGuard]},
  {path:'about',component:AboutComponent},
 



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
