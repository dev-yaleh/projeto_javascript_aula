let vetorStrings = ["Boxer", "Pastor Alemão", "Pinscher", "Husky Siberiano", "Corgi"];

/*
Vetor de strings pré definidos
*/
/*
console.log(vetorStrings[0])
console.log(vetorStrings[1])
console.log(vetorStrings[2])
console.log(vetorStrings[3])
console.log(vetorStrings[4])

Para não precisar repetir tanto código, podemos usar o laço de repetição "for":
*/

for (let indice = 0; indice < 5; indice++){
      console.log(`${indice + 1}º elemento: ${vetorStrings[indice]}`);//template literals
  }

 // console.log(vetorStrings.length) -> comprimento/tamanho do vetor