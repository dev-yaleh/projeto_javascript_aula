// Importando a biblioteca
const leia = require('readline-sync');

// Declarando variaveis
let idade

console.log("Digite a sua idade: ");
idade = leia.questionInt();

// Estrutura Condicional If (Processamento Condicional)
if (idade < 18) {
    console.log("\nVocê não pode dirigir!");
}    

console.log("\nFim do Programa!");