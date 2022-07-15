import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../authService/auth.service';
import { Username } from '../class/Username';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  dipendenti: any;
  tabella_dipendenti: boolean = false;
  constructor(private activateRoute: ActivatedRoute, private router: Router, private service: AuthService) { }

  ngOnInit() {
    this.getDati();   
    this.tabella_dipendenti = true; 
  }

  getDati(){
    this.service.getDati()
    .subscribe(dati => this.dipendenti = dati);
  }

  aggiungi(){
    this.router.navigate(["registrazione"]);
  }

  deleteDipendente(dipendente: any){
    this.service.delete(dipendente);
  }

  logout(){
    this.service.logoutAmministratore();
  } 
}
