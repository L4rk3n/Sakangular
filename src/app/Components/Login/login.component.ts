import { Component, EventEmitter, inject, Output } from '@angular/core';
import { floginCreate } from './forms/login.form';
import { LoginService } from '../../Services/Login.service';
import { ReactiveFormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { Login } from  '../../Models/Login.Model';
import { Token } from '../../Models/Token.Model';
import {  Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  imports : [ReactiveFormsModule,JsonPipe],
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor( private router: Router,private toastr: ToastrService) {}
  
  form = floginCreate()
  $login = inject(LoginService)
  @Output() event :EventEmitter<boolean> = new EventEmitter<boolean>();
  
  

  onSubmit(): void {
    if (this.form.valid) {
      this.$login.login(this.form.value as Login).subscribe({
        next: (data : Token) => {
          this.$login.loggedInSubject.next(true);
          localStorage.setItem('token', data.token);}
      });
    this.toastr.success('Connexion reussie','ça a réussi une fois!');
    this.router.navigate(['/']);

    }
  }
}

