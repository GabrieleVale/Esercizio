import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, NgForm, Validators } from '@angular/forms';
import { $, Button } from 'protractor';
import { CategoryService } from '../category.service';
import { Dati, DatoSkill } from '../class/Dati';
import { Router } from '@angular/router';


@Component({
  selector: 'app-skill-assessment',
  templateUrl: './skill-assessment.component.html',
  styleUrls: ['./skill-assessment.component.css']
})
export class SkillAssessmentComponent implements OnInit {
  @Input() modulo: any
  categorie: any [] = [];
  appSkill: boolean=false;
  posizione: any;
  form: boolean;
  indice_controllo: any;
  @Output() nascondi_form = new EventEmitter();
  isSubmitted: boolean=false;
  validatore: boolean=true;
  
  categoria: string;
  dati_skill: any;
  cont = 0;
 
  myForm: any;
  conoscenze: Dati [] = [];
  controllo: boolean = false;
  
  

  constructor(private service: CategoryService, private router: Router) { 
    
  }
  
  ngOnInit() {
    this.getDati();
     if(localStorage && localStorage.getItem("Skill")){
      this.conoscenze = JSON.parse(localStorage.getItem("Skill")); 
     }
  }

  
  
  getDati(){
    this.service.getCompetenze()
    .subscribe(dati => this.categorie = dati);
  }
  
  nascondi(skill: boolean){
    this.appSkill= skill;
  }
  
  salva(){ 
    localStorage.setItem("Skill", JSON.stringify(this.conoscenze));
  }
  
  upDate(indice: any){
    this.appSkill = true;
    this.indice_controllo=indice;
    this.posizione=indice;
  }
  
  onDelete(indiceSkill: any, indiceCompetenza){
    console.log(indiceSkill);
    this.service.delete(indiceSkill,indiceCompetenza);
  }
  
  annulla(){
    alert("annullare skill assessment");
    this.router.navigate(['profilo']);
  }
  
  onChange(event: any, skill: string, categoria: string, indice: any, indiceSkill: any){
    const valore = event.target.value;
    this.categoria = categoria;
    
    
    if(this.conoscenze[indice]){
      const obj = this.conoscenze[indice];
      obj.categoria = categoria;
      obj.skills[indiceSkill] = {skill: skill, value: valore};
      //this.conoscenze[indice] = obj
    }
    else{
      const obj = new Dati();
      obj.skills = [];
      obj.categoria = categoria;
      obj.skills[indiceSkill] = {skill: skill, value: valore};
      this.conoscenze[indice] = obj;
    } 
  }
}


