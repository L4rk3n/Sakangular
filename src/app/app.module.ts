import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { provideHttpClient,HTTP_INTERCEPTORS, withInterceptors } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { auth2Interceptor } from './auth2.interceptor';
import { signupComponent } from './Components/signup/signup.component';
import { UpdatepasswordComponent } from './Components/updatepassword/updatepassword.component';
import { UpdateprofileComponent } from './Components/updateprofile/updateprofile.component';
import { GestionaccessComponent } from './Components/gestionaccess/gestionaccess.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { ListingvinComponent } from './Components/listingvin/listingvin.component';
import { AjoutvinComponent } from './Components/ajoutvin/ajoutvin.component';
import { MonpanierComponent } from './Components/monpanier/monpanier.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    signupComponent,
    UpdatepasswordComponent,
    UpdateprofileComponent,
    GestionaccessComponent,
    ListingvinComponent,
    AjoutvinComponent,
    MonpanierComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [provideHttpClient(withInterceptors([auth2Interceptor])), 
  provideAnimations(), // required animations providers
    provideToastr(), // Toastr providers

],  
  bootstrap: [AppComponent]
})
export class AppModule { }
