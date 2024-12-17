import { Component, OnInit } from '@angular/core';
import { Vin } from '../../Models/vin.Model';
import { VinService } from '../../Services/Vin.service';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { LoginService } from '../../Services/Login.service';

@Component({
  selector: 'app-listingvin',
  templateUrl: './listingvin.component.html',
  styleUrls: ['./listingvin.component.css']
})
export class ListingvinComponent implements OnInit {

  vins: Vin[] = [];
  filteredVins: Vin[] = [];
  selectedType: string = '';
  errorMessage: string = '';
  isAdmin: boolean = false;
  private adminSubscription: Subscription = new Subscription; 

  constructor(private vinService: VinService, private toastr: ToastrService,private loginService: LoginService,) { }

  ngOnInit(): void {
    this.vinService.getVins().subscribe({
      next: (data) => {
        this.vins = data;
        this.applyFilters(); // Appliquez les filtres une fois les données chargées
      },
      error: (err) => {
        this.errorMessage = 'Erreur lors de la récupération des vins';
        console.error('Erreur:', err);
        this.toastr.error(this.errorMessage, 'ALERTE GENERALE');
      }
    });
    this.adminSubscription = this.loginService.admin$.subscribe(isAdmin => {
      this.isAdmin = isAdmin;
    })
  }

  applyFilters() {
    this.filteredVins = this.vins.filter(vin => {
      const typeMatch = this.selectedType 
        ? vin.type.toLowerCase() === this.selectedType.toLowerCase() 
        : true; // Si aucun type sélectionné, accepte tous les types
      const availabilityMatch = this.isAdmin 
        ? true // Si admin, accepte tous les vins
        : vin.disponible; // Si non-admin, accepte seulement les vins disponibles
      return typeMatch && availabilityMatch; // Combine les deux conditions
    });
  }
  
}


