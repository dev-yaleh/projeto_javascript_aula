// Importando a biblioteca
const leia = require('readline-sync')

// Declarando variaveis
let nota1, nota2, media
nota1 = leia.questionFloat("Digite a primeira nota: ")
nota2 = leia.questionFloat("Digite a segunda nota: ")

// Processamento
media = (nota1 + nota2) / 2

console.log("\nA média do aluno é: " + media.toFixed(2))

// Estrutura Condicional If e Else (Processamento Condicional)
if (media >= 6)  {
    console.log("\nParabéns, você passou!")
} else 
    if(media == 5){
        console.log("\nVocê está de exame!")
    } else {
        console.log("\nVocê reprovou!")
        }

console.log("\nFim do Programa!")