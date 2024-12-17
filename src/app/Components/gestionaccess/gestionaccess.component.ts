import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../Services/Admin.service';
import { Access } from '../../Models/access.Model';
import { Nameless } from '../../Models/nameless.Model';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-gestionaccess',
  templateUrl: './gestionaccess.component.html',
  styleUrl: './gestionaccess.component.css'
})
export class GestionaccessComponent implements OnInit{
  accessList: Access[] = [];
  filteredAccessList: Access[] = [];
  errorMessage: string = '';
  filterAdmin = false;
  filterActivated = false; 
  filterCancelled = false;
  
  constructor(private AdminService: AdminService, private toastr: ToastrService) {} 
  

  ngOnInit(): void {
     this.AdminService.getAccess().subscribe({ 
      next: (data) => {  this.accessList = data;this.filteredAccessList = this.accessList; },
       error: (err) => {
         this.errorMessage = 'Erreur lors de la récupération des accès';
          console.error('Erreur:', err); this.toastr.error(this.errorMessage,'ALERTE GENERALE');
         } }); }

  applyFilters(): void {
    this.filteredAccessList = this.accessList.filter(access => {
      return  (!this.filterAdmin || access.admin) &&
              (!this.filterActivated || access.activated) &&
              (!this.filterCancelled || access.cancelled);
          });
        }
        
  testadmin(index : number){
    this.accessList[index].admin = !this.accessList[index].admin
    console.log(this.accessList[index].admin);
  }
  testactivated(index : number){
    this.accessList[index].activated = !this.accessList[index].activated
    console.log(this.accessList[index].activated);
  }
  testcancelled(index : number){
    this.accessList[index].cancelled = !this.accessList[index].cancelled
    console.log(this.accessList[index].cancelled);
  }

  update(index : number): void {
  
     
    let toUpdate: Nameless = { Admin:this.accessList[index].admin,Activated:this.accessList[index].activated,Cancelled:this.accessList[index].cancelled  };

    this.AdminService.putAccess(this.accessList[index].iDutilisateur, toUpdate).subscribe({
      next: () => {   this.toastr.success('Accès Mis à jour', 'ça a réussi une fois!');}
    });
  }    
}
