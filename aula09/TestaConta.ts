import { Conta } from "./Conta"

export function main(){

    //INSTANCIA DA CLASSE CONTA
    //INSTANCIAMENTO DE UM OBJETO
    const conta1: Conta = new Conta(12156, 108, 1, "Michelle", 1000000)

    console.log("Titular da Conta:" + conta1.titular)
    console.log("Saldo da Conta:" + conta1.saldo)
    conta1.saldo = 1500 // Mudança para deve háver antes da solicitação visual do saldo
    console.log("Saldo da Conta:" + conta1.saldo)



}

main()