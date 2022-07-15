export interface SalvaRequest{
    categoria: string,
    skills: SalvaRequestInterno [] 
}

export interface SalvaRequestInterno{
    skill: string,
    value: any 
}

export interface username{
    id: number,
    nome: string,
    cognome: string,
    email: string,
    password: string,
    stato: string
}

export interface user{
    id: number,
    nome: string,
    cognome: string,
    email: string,
    password: string,
    stato: string
}