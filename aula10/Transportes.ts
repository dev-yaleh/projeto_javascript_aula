export class Transporte { //SUPER CLASSE - CLASSE MÃE

    // ATRIBUTO 
    private _capacidade: number

    //MÉTODO CONSTRUTOR (inicia o atributo como objeto)
    constructor(capacidade: number){
        this._capacidade = capacidade //(atributo _capacidade -> capacidade = objeto)
    }

    // MÉTODO DE ACESSO - GET e o SET -> GETTERS E SETTERS (middle man -> tornar o atributo modificável de forma segura)
    public get capacidade(){
        return this._capacidade
    }
    public set capacidade(novaCapacidade: number){
        this._capacidade = novaCapacidade
    }

    // MÉTODOS AUXILIARES (devem ser tipados)
    public visualizar(): void {
		console.log("\n\n************************************************************");
	    console.log("Dados do Meio de Transporte:");
	    console.log("****************************************************************");
	    console.log("Capacidade (número de passageiros): " + this._capacidade);
	}

}