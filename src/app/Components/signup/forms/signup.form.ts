
import { FormControl, FormGroup, Validators } from "@angular/forms";

export function createUtilisateurForm() {
    return new FormGroup({
        iDutilisateur: new FormControl(0), // Initialisé à 0
        nom: new FormControl('', [Validators.required]),
        prenom: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required]),
        phonenumber: new FormControl(0, [Validators.required, Validators.pattern('^[0-9]*$')]), // Initialisé à 0
        admin: new FormControl(false), // Initialisé à false
        activated: new FormControl(false), // Initialisé à false
        cancelled: new FormControl(false), // Initialisé à false
        AdresseRue: new FormControl('', [Validators.required]),
        AdresseNumero: new FormControl(0, [Validators.required, Validators.pattern('^[0-9]*$')]), // Initialisé à 0
        AdresseCodePostal: new FormControl(0, [Validators.required, Validators.pattern('^[0-9]*$')]), // Initialisé à 0
        AdresseVille: new FormControl('', [Validators.required]),
        AdresseNumeroBoite: new FormControl(0, [Validators.pattern('^[0-9]*$')]), // Initialisé à 0, optionnel
        AdresseCountry: new FormControl('', [Validators.required])
    });
}




// import { FormControl, FormGroup, Validators } from "@angular/forms";

// export function createUtilisateurForm(): FormGroup {
//     return new FormGroup({
//         iDutilisateur: new FormControl(null), // Optionnel, pas de validation nécessaire
//         nom: new FormControl('', [Validators.required]),
//         prenom: new FormControl('', [Validators.required]),
//         email: new FormControl('', [Validators.required, Validators.email]),
//         password: new FormControl('', [Validators.required]),
//         phonenumber: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
//         AdresseRue: new FormControl('', [Validators.required]),
//         AdresseNumero: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
//         AdresseCodePostal: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
//         AdresseVille: new FormControl('', [Validators.required]),
//         AdresseNumeroBoite: new FormControl('', [Validators.pattern('^[0-9]*$')]), // Optionnel
//         AdresseCountry: new FormControl('', [Validators.required]),
//         Admin: new FormControl(false, [Validators.required]),
//         Activated: new FormControl(false, [Validators.required]),
//         Cancelled: new FormControl(false, [Validators.required])

        
//     });
// }

