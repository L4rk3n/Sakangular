import { Injectable } from '@angular/core';
import { Vin } from '../Models/vin.Model';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  private panier: { vin: Vin, quantity: number }[] = [];

  ajouterAuPanier(vin: Vin) {
    const index = this.panier.findIndex(item => item.vin.idvin === vin.idvin);
    if (index !== -1) {
      this.panier[index].quantity += 1; // Augmente la quantité si le vin est déjà dans le panier
    } else {
      this.panier.push({ vin, quantity: 1 });
    }
  }

  diminuerQuantite(vin: Vin) {
    const index = this.panier.findIndex(item => item.vin.idvin === vin.idvin);
    if (index !== -1) {
         this.panier[index].quantity -= 1;
          if (this.panier[index].quantity <= 0) {
             this.panier.splice(index, 1); // Retirer la ligne si la quantité tombe à zéro
            }
        } 
    } 
  augmenterQuantite(vin: Vin) {
    const index = this.panier.findIndex(item => item.vin.idvin === vin.idvin);
    if (index !== -1) { this.panier[index].quantity += 1;

    }
  }

  getPanier() {
    return this.panier;
  }

  viderPanier() {
    this.panier = [];
  }
}
