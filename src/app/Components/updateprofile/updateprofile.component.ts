import { Component, EventEmitter, inject, Output } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../Services/Login.service';
import { UtilisateurService } from '../../Services/utilisateur.service';
import { fupdatutilisateur } from './forms/updateprofile.form';
import { UpdateUtilisateur} from '../../Models/updateprofile.Model';

@Component({
  selector: 'app-updateprofile',
  templateUrl: './updateprofile.component.html',
  styleUrls: ['./updateprofile.component.css']
})
export class UpdateprofileComponent {

  form = fupdatutilisateur();
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private router: Router, private utilisateurService: UtilisateurService, private loginService: LoginService) {}

  ngOnInit(): void {
    const userId = Number(this.loginService.getUserId()) || 0;
    this.utilisateurService.getUtilisateur(userId).subscribe({
      next: (actualuser: UpdateUtilisateur) => {
        this.form.patchValue({
          nom: actualuser.nom,
          prenom: actualuser.prenom,
          email: actualuser.email,
          phonenumber: actualuser.phoneNumber,
          AdresseRue: actualuser.adresseRue,
          AdresseNumero: actualuser.adresseNumero,
          AdresseCodePostal: actualuser.adresseCodePostal,
          AdresseVille: actualuser.adresseVille,
          AdresseNumeroBoite: actualuser.adresseNumeroBoite,
          AdresseCountry: actualuser.adresseCountry
        });
      },
      error: (err) => {
        console.error('Erreur lors de la récupération des informations utilisateur', err);
      }
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      const utilisateur: UpdateUtilisateur = {
        nom: this.form.value.nom??'',
        prenom: this.form.value.prenom??'',
        email: this.form.value.email??'',
        phoneNumber: this.form.value.phonenumber??0,
        adresseRue: this.form.value.AdresseRue??'',
        adresseNumero: this.form.value.AdresseNumero??0,
        adresseCodePostal: this.form.value.AdresseCodePostal??0,
        adresseVille: this.form.value.AdresseVille??'',
        adresseNumeroBoite: this.form.value.AdresseNumeroBoite??0,
        adresseCountry: this.form.value.AdresseCountry??''
      }
      const userId = Number(this.loginService.getUserId()) || 0;
      this.utilisateurService.updateUtilisateur(userId, utilisateur).subscribe({
        next: () => {
          this.successMessage = 'Utilisateur mis à jour avec succès.';
          this.errorMessage = '';
        },
        error: () => {
          this.errorMessage = 'Erreur lors de la mise à jour de l\'utilisateur.';
          this.successMessage = '';
        }
      });
    }
  }
}

