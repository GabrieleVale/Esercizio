import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  
  tab: boolean = false
  skill_asessment: boolean=true;
  dato: boolean=false;
  
  constructor(private router: Router){
    
  }
  
  ngOnInit(){
    
  }
  
  getData(tabella: boolean){
    this.tab = tabella; 
  }
  
  nascondi(assessment: boolean){
    this.skill_asessment=assessment;
    this.dato=true;
  }
  
  nascondi_comp(){
    this.skill_asessment = true;
    this.dato=false;
  }
}
