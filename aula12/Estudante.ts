import { IEscritor } from "./IEscritor";
import { IPintor } from "./IPintor";
import { Pessoa } from "./Pessoa";

export class Estudante extends Pessoa implements IEscritor, IPintor{

    //Atributos

    //Método Construtor
    constructor(nome:string){
        super(nome)
    }
    
    //Métodos de Acesso


    //Métodos Auxiliares
    public saudação(): void{
        console.log("Olá, meu nome é ")
    }

    public escrever(): void {
        console.log("Escrevendo com o computador...");
    }
    pintar(): void {
        console.log("Pintando com o giz de cera.");
    }
    


}