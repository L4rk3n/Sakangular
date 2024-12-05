import { Component } from '@angular/core';
import { LoginService } from '../../Services/Login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private LoginService: LoginService, private router: Router) {}
   logout() {
     this.LoginService.logout();
      this.router.navigate(['/login']);
    }

}
