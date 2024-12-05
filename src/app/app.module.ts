import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { provideHttpClient,HTTP_INTERCEPTORS, withInterceptors } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { auth2Interceptor } from './auth2.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,

    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
   
  ],
  providers: [provideHttpClient(withInterceptors([auth2Interceptor]))],  
  bootstrap: [AppComponent]
})
export class AppModule { }
