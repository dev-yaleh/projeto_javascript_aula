import { logar, somar, transformarNumuroCincoEmExtenso } from "./ExemploFuncao"


// Chamada das funções
let valor: number = somar(7, 12)
let valor1: number = somar(6, 11)

let login: string | number = "yaleh@generation.com.br"

console.log("O resultado da sua adição é: " + valor)
console.log("O resultado da sua adição é: " + valor1)

logar(login)

let numeroEmTexto : string = transformarNumuroCincoEmExtenso(6)
console.log(numeroEmTexto)

