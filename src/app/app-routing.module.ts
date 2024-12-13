import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/Login/login.component';
import { AuthGuard } from './auth.guard';
import { signupComponent } from './Components/signup/signup.component';
import { UpdatepasswordComponent } from './Components/updatepassword/updatepassword.component';
import { UpdateprofileComponent } from './Components/updateprofile/updateprofile.component';
import { GestionaccessComponent } from './Components/gestionaccess/gestionaccess.component';



const routes: Routes = [
  // { path: 'auteurs', loadChildren: () => import("./components/auteurs/author.module").then(m => m.AuthorModule),canActivate:[AuthGuard] },

  { path: 'newsletter', loadChildren: () => import('./Components/newsletter/newsletter.module').then(m => m.NewsletterModule) },
  { path: 'signup',component : signupComponent},
  { path: 'login',component : LoginComponent},
  { path: 'changepassword',component : UpdatepasswordComponent,canActivate:[AuthGuard]},
  { path: 'updateprofile',component : UpdateprofileComponent,canActivate:[AuthGuard]},
  { path: 'gestionaccess',component : GestionaccessComponent,canActivate:[AuthGuard]},
  { path: '', redirectTo: '/newsletter', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
