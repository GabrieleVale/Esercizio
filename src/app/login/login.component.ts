import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Router } from '@angular/router';
import { AuthService } from '../authService/auth.service';
import { Username } from '../class/Username';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private auth: AuthService, private router: Router) { }
  amministratore: Username;
  dipendenti: Username[]=[];
  
  ngOnInit() {
    if(localStorage.getItem("amministratore")){
      this.router.navigate(["login"]);
      this.dipendenti = JSON.parse(localStorage.getItem("dipendenti"));
    }
    else{
      this.router.navigate(["registrazione"]);
    } 
  }
  
  signIn(form: NgForm){
    if(!form.valid){
      return false;
    }
      let ris = this.auth.signIn(form.value.email, form.value.password);
      if(ris == 1){ 
        this.router.navigate(['amministratore']);
      }
      if(ris == 2){
        this.router.navigate(["profilo"]);
      }
     
  }
}
