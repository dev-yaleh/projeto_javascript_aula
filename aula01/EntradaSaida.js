// Importando a biblioteca
const leia = require('readline-sync');

// Declarando variaveis
let nome, distancia;

console.log("Digite o seu nome: ");
nome = leia.question();

console.log("\nDigite a distancia percorrida em sua corrida: ");
distancia = leia.questionFloat();

// Saída de dados
console.log("\nBom dia, " + nome )
console.log("\nA distancia foi de: " + distancia + " km.");



