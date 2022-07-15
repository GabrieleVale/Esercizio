import { SalvaRequest, SalvaRequestInterno, user } from '../interface/request';


export class Dati implements SalvaRequest{
    categoria: string;
    skills: DatoSkill [];    
}

 export class DatoSkill implements SalvaRequestInterno{
    skill: string;
    value: any;
}



