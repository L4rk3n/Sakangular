import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoginService } from '../../Services/Login.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit, OnDestroy { 
  
  isLoggedIn: boolean = false;
  private loginSubscription: Subscription = new Subscription;

  constructor(private loginService: LoginService, private router: Router) {}
  

  ngOnInit(): void {
    // Abonnez-vous aux changements de statut de connexion
    this.loginSubscription = this.loginService.loggedIn$.subscribe(loggedIn => {
      this.isLoggedIn = loggedIn;
    });
  }

  ngOnDestroy(): void {
    // Désabonnez-vous pour éviter les fuites de mémoire
    if (this.loginSubscription) {
      this.loginSubscription.unsubscribe();
    }
  }

  logout() {
    this.loginService.logout();
    this.router.navigate(['/login']);
  }
}

