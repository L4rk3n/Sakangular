import { FormControl, FormGroup, Validators } from "@angular/forms";

export function fupdatutilisateur() {
    return new FormGroup({
        nom: new FormControl('', [Validators.required]),
        prenom: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required, Validators.email]),
        phonenumber: new FormControl(0, [Validators.required, Validators.pattern('^[0-9]*$')]),
        AdresseRue: new FormControl('', [Validators.required]),
        AdresseNumero: new FormControl(0,[Validators.required, Validators.pattern('^[0-9]*$')]),
        AdresseCodePostal: new FormControl(0,[Validators.required, Validators.pattern('^[0-9]*$')]),
        AdresseVille: new FormControl('',[Validators.required]),
        AdresseNumeroBoite: new FormControl(0,[Validators.pattern('^[0-9]*$')]), // Optionnel
        AdresseCountry: new FormControl('',[Validators.required]),

    })
}


