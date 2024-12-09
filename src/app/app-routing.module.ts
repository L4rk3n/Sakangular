import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/Login/login.component';
import { AuthGuard } from './auth.guard';
import { signupComponent } from './Components/signup/signup.component';



const routes: Routes = [
  // { path: 'auteurs', loadChildren: () => import("./components/auteurs/author.module").then(m => m.AuthorModule),canActivate:[AuthGuard] },
  // { path: 'livres', loadChildren: () => import('./components/livres/book.module').then(m => m.BookModule),canActivate:[AuthGuard]  },
  // { path: 'adresses', loadChildren: () => import('./components/adresses/adresses.module').then(m => m.AdressesModule),canActivate:[AuthGuard]  },
  { path: 'newsletter', loadChildren: () => import('./Components/newsletter/newsletter.module').then(m => m.NewsletterModule) },
  { path: 'signup',component : signupComponent},
  { path: 'login',component : LoginComponent},
  { path: '', redirectTo: '/newsletter', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }