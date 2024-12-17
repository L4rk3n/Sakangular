import { FormControl, FormGroup, Validators } from '@angular/forms';

export function createVinForm() {
  return new FormGroup({
    
    nom: new FormControl('', [Validators.required]),
    cuvee: new FormControl(0, [Validators.required, Validators.pattern('^[0-9]*$')]), // Initialisé à 0
    type: new FormControl('', [Validators.required]),
    format: new FormControl('', [Validators.required]),
    fournisseur: new FormControl('', [Validators.required]),
    disponible: new FormControl(false), // Initialisé à false
    stock: new FormControl(0, [Validators.required, Validators.pattern('^[0-9]*$')]), // Initialisé à 0
    empalpha: new FormControl('', [Validators.required]),
    empnum: new FormControl(0, [Validators.required, Validators.pattern('^[0-9]*$')]), // Initialisé à 0
    prix: new FormControl(0, [Validators.required, Validators.pattern('^[0-9]*$')]), // Initialisé à 0
    prixtva: new FormControl(0, [Validators.required, Validators.pattern('^[0-9]*$')]) // Initialisé à 0
  });
}
