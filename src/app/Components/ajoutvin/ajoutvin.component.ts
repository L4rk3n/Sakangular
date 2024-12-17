import { Component, inject, output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { createVinForm } from './forms/ajoutvin.form';
import { VinService } from '../../Services/Vin.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Vinupdate } from '../../Models/vinupdate.Model';
import { MessageService } from '../../Services/messsage.service';


@Component({
  selector: 'app-ajoutvin',
  templateUrl: './ajoutvin.component.html',
  styleUrl: './ajoutvin.component.css'
})
export class AjoutvinComponent {
  addEvent = output<Vinupdate>({ alias: 'add'});
  form : FormGroup = createVinForm()
  $vin = inject(VinService)
  typesDeVin: string[] = ['Rouge', 'Blanc', 'Rosé', 'Jaune', 'Effervescent'];
  
  constructor( private vinService: VinService, private router: Router, private toastr: ToastrService,private messageService: MessageService ) {}

  onSubmit(): void {
    if (this.form.value.stock>0) {
      this.form.value.disponible = true;
    }
    if (this.form.valid) {
      this.$vin.createVin(this.form.value as Vinupdate).subscribe(() => {
        this.form = createVinForm();
        this.messageService.sendMessage('Vin ajouté avec succès.'); // Envoyez un message de succès
        this.router.navigate(['/listingvin']);
        });
    }
    }
}
