import { FormControl, FormGroup, Validators } from "@angular/forms";

export function passwordupdate() {
    return new FormGroup({
        oldpassword: new FormControl('test', [Validators.required]),
        newpassword: new FormControl('test', [Validators.required]),
    })
}