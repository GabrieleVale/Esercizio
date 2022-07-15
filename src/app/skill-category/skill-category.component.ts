import { getLocaleDateTimeFormat } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from '../authService/auth.service';


@Component({
  selector: 'app-skill-category',
  templateUrl: './skill-category.component.html',
  styleUrls: ['./skill-category.component.css']
})
export class SkillCategoryComponent implements OnInit {
   competenze: any[]=[];
   dipendente: any
   dati: boolean = false;
   nascondi: boolean = true;
   data_inizio
   data_fine
   descrizione
   nome: string;
   nome_azienda
   ruolo
   
   
  constructor(private service: AuthService, private router: Router, private route: ActivatedRoute) {
    
   }

  ngOnInit() {
   //this.dipendente = JSON.parse(localStorage.getItem("memoria"));
   this.nome = this.service.nome;
  }

  getSkill(){
    this.router.navigate(['skill']);
  }

  logOut(){
    this.service.logout();
  }

  dettagli(){
     this.dati = true;
     this.nascondi = false;
  }

  annulla(){
    this.dati = false;
    this.nascondi = true;
  }

  salva(form: NgForm){
    this.nome_azienda = form.value.nome
    this.data_inizio = form.value.data1;
    this.data_fine = form.value.data2;
    this.ruolo = form.value.ruolo;
    this.descrizione = form.value.descrizione;
    this.dati = false;
    this.nascondi = true;
  }
}
