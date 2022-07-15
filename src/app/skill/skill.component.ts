import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  @Input() indice: any;
  @Input() skill: boolean;
  @Output() evento=new EventEmitter();
  
  constructor(private service: CategoryService) { }
  
  ngOnInit() {
  }
  
  saveSkill(save: any){
    if(save.length>0){
      this.service.aggiungi(save, this.indice);
      this.skill=false;
      this.evento.emit(this.skill);
    }
    else{
      alert("inserire una skill!!");
    } 
  }
  
}
