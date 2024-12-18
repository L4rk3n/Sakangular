import { Component, OnInit } from '@angular/core';
import { PanierService } from '../../Services/panier.service';
import { Vin } from '../../Models/vin.Model';

@Component({
  selector: 'app-monpanier',
  templateUrl: './monpanier.component.html',
  styleUrl: './monpanier.component.css'
})
export class MonpanierComponent {
  panier: { vin: Vin, quantity: number }[] = [];
  totalPrice: number = 0;

  constructor(private panierService: PanierService) { }

  ngOnInit(): void {
    this.panier = this.panierService.getPanier();
    this.calculateTotalPrice();
  }

  viderPanier() {
    this.panierService.viderPanier();
    this.panier = [];
  }
  private calculateTotalPrice() {
     this.totalPrice = this.panier.reduce((total, item) => {
       return total + item.vin.prixtva * item.quantity;
     }, 0);
  }
  diminuerQuantite(vin: Vin) {
    this.panierService.diminuerQuantite(vin);
    this.panier = this.panierService.getPanier();
    this.calculateTotalPrice();
  } 
  
  augmenterQuantite(vin: Vin) {
    this.panierService.augmenterQuantite(vin);
    this.panier = this.panierService.getPanier();
     this.calculateTotalPrice();
    }

}



