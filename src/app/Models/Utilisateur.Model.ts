export interface Utilisateur {
    iDutilisateur?: number
    nom: string
    prenom: string
    email: string
    AdresseRue: string
    AdresseNumero: number
    AdresseCodePostal: number
    AdresseVille : string
    AdresseNumeroBoite : number
    AdresseCountry : string
    Admin : boolean
    Activated : boolean
    Cancelled : boolean
  }