
import { Component, inject, output } from '@angular/core';
import { Utilisateur } from '../../Models/SignUp.Model';
import {createUtilisateurForm } from './forms/signup.form';
import { SignUpService } from '../../Services/SignUp.service';
import { FormGroup } from '@angular/forms';
import {  Router } from '@angular/router';


@Component({
  selector: 'app-add-user',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class signupComponent {
  addEvent = output<Utilisateur>({ alias: 'add'});
  form : FormGroup = createUtilisateurForm()
  $user = inject(SignUpService);

  constructor( private router: Router) {}

  onSubmit(): void {
  if (this.form.valid) {
    this.$user.addUtilisateurs(this.form.value as Utilisateur).subscribe(() => {
      this.form = createUtilisateurForm();
      this.addEvent.emit(this.form.value as Utilisateur);

      });
      this.router.navigate(['/']);
  }
  }
}