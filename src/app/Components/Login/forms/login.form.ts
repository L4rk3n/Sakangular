import { FormControl, FormGroup, Validators } from "@angular/forms";

export function floginCreate() {
    return new FormGroup({
        email: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required]),

    })
}