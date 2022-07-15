import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../authService/auth.service';
import { Button } from 'protractor';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.css']
})
export class RegistrazioneComponent implements OnInit {
  
  constructor(private service: AuthService, private router: Router) { }
  
  button: any
  
  ngOnInit() {
    if(!sessionStorage.getItem("amministratore")){
      this.router.navigate(["login"]);
    }
  }
  
  signUp(form: NgForm,event:any){
    if(!form.valid){
      return false;
    }
    
    let ris = this.service.signUp(form.value.user, form.value.surname, form.value.email, form.value.password, this.button);
    if(ris){
      this.router.navigate(["amministratore"]);
    }
  }
  
  bottone(event: any){
    this.button = event.target.value;
  }
  
  annulla(){
    this.router.navigate(["amministratore"]);
  }
}
