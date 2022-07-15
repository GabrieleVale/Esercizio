import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  
  
  constructor() { }

   competenze: any=[{
    categoria: "Linguaggi",
    skills: ["java", "C++", "Javascipt"]
   },
   {
    categoria: "Sistemi operativi",
    skills: ["MacOS", "Windows", "Linux"]
   },
   {
    categoria: "Framework",
    skills: ["Bootstrap", "Angular", "React"]
   },
   {
    categoria: "Lingue",
    skills: ["Italiano", "Inglese", "Francese"]
   }];


  getCompetenze(): Observable <any>{
    return of (this.competenze);
  }

  delete(indiceSkill: any, indiceCompetenza: any){
     this.competenze[indiceCompetenza].skills.splice(indiceSkill,1);
  }

  aggiungi(dato: any, indice){
      this.competenze[indice].skills.push(dato);
  }

}
