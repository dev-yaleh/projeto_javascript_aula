const leia = require("readline-sync");

/*
let nome1, nome2, nome3;

nome1 = leia.question("Digite o primeiro nome: ");
console.log("O 1º nome é: " + nome1);

nome2 = leia.question("Digite o segundo nome: ");
console.log("O 2º nome é: " + nome2);

nome3 = leia.question("Digite o terceiro nome: ");
console.log("O 3º nome é: " + nome3);


console.log("\nAgora utilizando o laço FOR:\n");
*/

/* EXEMPLO VS CODE:
for (let i = 1; i <= 3; i++) {
    let nome = leia.question("Digite o " + i + "º nome: ");
    console.log("O " + i + "º nome é: " + nome);
}
*/
let nome, contador 

for (contador = 1; contador < 4; contador++) { //++ operador incremento -> contador = contador + 1
    nome = leia.question("Digite um nome: ");
    console.log("O " + contador + "º nome digitado foi: " + nome + "\n");
}


