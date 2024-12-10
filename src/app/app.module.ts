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



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    signupComponent,
    UpdatepasswordComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [provideHttpClient(withInterceptors([auth2Interceptor]))],  
  bootstrap: [AppComponent]
})
export class AppModule { }
