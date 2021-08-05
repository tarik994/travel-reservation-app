import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DestinationComponent } from './components/destination/destination.component';
import { CardComponent } from './components/card/card.component';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule  } from 'ngx-toastr';
import { AboutComponent } from './components/about/about.component';
import { AdminPanelComponent } from './components/Admin-panel/admin-panel.component';
import { AdminEditPlacesComponent } from './components/Admin-panel/admin-edit-places/admin-edit-places.component';
import { AdminEditHotelsComponent } from './components/Admin-panel/admin-edit-hotels/admin-edit-hotels.component';
import { AdminEditUsersComponent } from './components/Admin-panel/admin-edit-users/admin-edit-users.component';






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DestinationComponent,
    CardComponent,
    FavoriteComponent,
    LoginComponent,
    MenuComponent,
    FooterComponent,
    ProfileComponent,
    RegistrationComponent,
    AboutComponent,
    AdminPanelComponent,
    AdminEditPlacesComponent,
    AdminEditHotelsComponent,
    AdminEditUsersComponent,
    
  

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      preventDuplicates: true
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
