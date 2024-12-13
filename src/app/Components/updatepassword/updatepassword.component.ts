
import { Component } from '@angular/core';
import { passwordupdate } from './forms/updatepassword.form';
import { UtilisateurService } from '../../Services/utilisateur.service';
import {  Router } from '@angular/router';
import { LoginService } from '../../Services/Login.service';

@Component({
  selector: 'app-updatepassword',
  templateUrl: './updatepassword.component.html',
  styleUrl: './updatepassword.component.css'
})
export class UpdatepasswordComponent {

  constructor(private router: Router, private UtilisateurService: UtilisateurService, private LoginService: LoginService) {}
  form = passwordupdate()
  successMessage: string = '';
   errorMessage: string = '';

  onSubmit(): void { 
    if (this.form.valid) {  const token = localStorage.getItem('token'); 
      const oldPassword = this.form.get('oldpassword')?.value;
      const newPassword = this.form.get('newpassword')?.value;
      if (token) {
        const changemodel = { iDutilisateur: Number(this.LoginService.getUserId()), oldpassword: oldPassword??'', newpassword: newPassword??'' };
         this.UtilisateurService.updatePassword(changemodel).subscribe({ 
        next: () => {
          this.successMessage = 'Mot de passe mis à jour avec succès.';
          this.errorMessage = ''; }, error: (err) => {
            this.errorMessage = 'Erreur lors de la mise à jour du mot de passe.'; 
            if (err.status === 401)
            { 
              this.errorMessage = "L'ancien mot de passe est incorrect.";
            }
              this.successMessage = '';
            } 
          });
      }
      else 
      {
         this.errorMessage = "Token non trouvé. Veuillez vous reconnecter.";
      }
  } }

}
