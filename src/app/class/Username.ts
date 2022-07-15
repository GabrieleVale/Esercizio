import {  username } from "../interface/request";

export class Username implements username{
    id: number;
    nome: string;
    cognome: string;
    email: string;
    password: string;
    stato: string;
}