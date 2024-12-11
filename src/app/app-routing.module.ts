import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/Login/login.component';
import { AuthGuard } from './auth.guard';
import { signupComponent } from './Components/signup/signup.component';
import { UpdatepasswordComponent } from './Components/updatepassword/updatepassword.component';
import { UpdateprofileComponent } from './Components/updateprofile/updateprofile.component';



const routes: Routes = [
  // { path: 'auteurs', loadChildren: () => import("./components/auteurs/author.module").then(m => m.AuthorModule),canActivate:[AuthGuard] },
  // { path: 'livres', loadChildren: () => import('./components/livres/book.module').then(m => m.BookModule),canActivate:[AuthGuard]  },
  // { path: 'adresses', loadChildren: () => import('./components/adresses/adresses.module').then(m => m.AdressesModule),canActivate:[AuthGuard]  },
  { path: 'newsletter', loadChildren: () => import('./Components/newsletter/newsletter.module').then(m => m.NewsletterModule) },
  { path: 'signup',component : signupComponent},
  { path: 'login',component : LoginComponent},
  {path: 'changepassword',component : UpdatepasswordComponent},
  {path: 'updateprofile',component : UpdateprofileComponent},
  { path: '', redirectTo: '/newsletter', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
