import { Transporte } from "./Transportes";

export class Terrestre extends Transporte{ //CLASSE FILHA OU SUB CLASSE
    
    
    // ATRIBUTO
    private _numeroRodas: number
    private _velocidade: number

    // MÉTODO CONSTRUTOR (inicia o atributo como objeto)
    constructor(capacidade: number, numeroRodas: number, velocidade: number){
        super(capacidade) //REFERÊNCIA AO MÉTODO CONSTRUTOR DA CLASSE MÃE OU SUPER CLASSE
        //SERIA COMO ESCREVER -> Trasporte(capacidade)

        this._numeroRodas = numeroRodas
        this._velocidade = velocidade
    }

    // MÉTODO DE ACESSO - GET e o SET -> GETTERS E SETTERS (middle man -> tornar o atributo modificável de forma segura)
    public get numeroRodas() {
		return this._numeroRodas;
	}

	public set numeroRodas(numeroRodas: number) {
		this._numeroRodas = numeroRodas;
	}

	public get velocidade() {
		return this._velocidade;
	}

	public set velocidade(velocidade: number) {
		this._velocidade = velocidade;
	}

    // SOBRESCRITA DE MÉTODO
    public visualizar(): void {
		super.visualizar(); // REFERÊNCIA A SUPER CLASSE -> Transporte.vizualizar()
		console.log("Número de rodas: " + this.numeroRodas);
		console.log("Velocidade: " + this.velocidade.toFixed(2));
	}


}