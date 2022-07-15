import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Username } from '../class/Username';
import { Dati } from '../class/Dati';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLogged = true;
  constructor(private router: Router) { }7
  
  
  dipendenti: any = [{
    id: 0,
    nome: "Mario",
    cognome: "Rossi",
    email: "mario@gmail.com",
    password: "54321",
    stato: "dipendente"
  },
  {
    id: 1,
    nome: "Francesco",
    cognome: "Di Lorenzo",
    email: "francesco@gmail.com",
    password: "13245",
    stato: "dipendente"
  },
  {
    id: 2,
    nome: "Ciccio",
    cognome: "Pasticcio",
    email: "ciccio@gmail.com",
    password: "78790",
    stato: "dipendente"
  },];
  
  getDati(): Observable <any>{
    if(!localStorage.getItem("dipendenti")){
      localStorage.setItem("dipendenti", JSON.stringify(this.dipendenti));
    }
    else{
      this.dipendenti = JSON.parse(localStorage.getItem("dipendenti"));
    }
    return of (this.dipendenti);
  }
  
  
  amministratore :Username;
  nome: string;
  
  isLoggedIn(){
    this.isLogged = !!sessionStorage.getItem("memoria");
    return this.isLogged;
  }
  
  signIn(email: string, password: string){
    
    this.amministratore = JSON.parse(localStorage.getItem("amministratore"));
    this.dipendenti = JSON.parse(localStorage.getItem("dipendenti"));
    
    if(this.amministratore.email.includes(email) && this.amministratore.password.includes(password)){
      sessionStorage.setItem("amministratore", JSON.stringify(this.amministratore));
      return 1;
    }
    else{
      let dipendente = this.dipendenti.find((v) => v.email == email && v.password == password);
      if(dipendente !== undefined){
        this.nome = dipendente.nome;
        sessionStorage.setItem("dipendente", JSON.stringify(dipendente));
        return 2; 
      }
      else{
        alert("email o password errate");
      } 
    }  
  }
  
  signUp(username: string, surname: string, email: string, password: string, button: any){
    
    const obj = new Username();
    obj.nome = username;
    obj.cognome = surname;
    obj.email = email;
    obj.password = password;
    obj.stato = button;
    
    obj.id = 0;
    
    if(button == "amministratore"){
      localStorage.setItem("amministratore",JSON.stringify(obj));
      sessionStorage.setItem("amministratore",JSON.stringify(obj));
      return true;
    } 
    else{
      this.dipendenti.push(obj);
      localStorage.setItem("dipendenti", JSON.stringify(this.dipendenti));
      return true;
    }
  }

  delete(dipendente_selected: any){
    const idx = this.dipendenti.indexOf(dipendente_selected);
    if(idx > -1){
      this.dipendenti.splice(idx,1);
      localStorage.setItem("dipendenti", JSON.stringify(this.dipendenti));
    }
  }
  
  
  logout(){
    if(sessionStorage.getItem("dipendente")){
      sessionStorage.removeItem("dipendente");
      this.isLogged = false;
      this.router.navigate(["login"]);
    }
    else{
      this.isLogged = false;
      this.router.navigate(["login"]);
    } 
  } 
  
  
  logoutAmministratore(){
    if(sessionStorage.getItem("amministratore")){
      sessionStorage.removeItem("amministratore");
      this.isLogged = false;
      this.router.navigate(["login"]);
    }
    else{
      this.isLogged = false;
      this.router.navigate(["login"]);
    } 
  }
}
