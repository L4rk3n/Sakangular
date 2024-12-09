export interface Utilisateur {
    iDutilisateur?: number
    nom: string
    prenom: string
    email: string
    password: string
    phonenumber: number
    admin :boolean
    activated : boolean
    cancelled : boolean
    AdresseRue: string
    AdresseNumero: number
    AdresseCodePostal: number
    AdresseVille : string
    AdresseNumeroBoite : number
    AdresseCountry : string
  }