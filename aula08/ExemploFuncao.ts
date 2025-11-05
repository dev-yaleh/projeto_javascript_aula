
//Exemplo Função

// Declaração da função
export function somar(a: number, b: number): number{
    //Lógica da função

    let resultado: number = a + b //2 + 2 => resultado = 4 

    return resultado
}

export function logar(usuario: number | string): void{ // "|" => Pipe

    if (typeof(usuario) === "number" ) //typeof
        console.log("\nVocê esta acessando seu Insta pelo Celular");
    else
        console.log("\nVocê esta acessando seu Insta pelo E-mail");
}

/*
= : atribuição
== : igualdade => 5 é igual a '5'
=== : idêntico => 5 é igual a '5' e eles tem o mesmo tipo?
*/

export function transformarNumuroCincoEmExtenso(valor: number): string{
    let texto: string

    if(valor===5){
        texto = "Valor digitado é cinco"
    } else{
        texto = "Você digtou um número diferente de cinco"
    }

    return texto
}



// Chamada das funções
let valor: number = somar(7, 12)
let valor1: number = somar(6, 11)

let login: string | number = "yaleh@generation.com.br"



console.log("O resultado da sua adição é: " + valor)
console.log("O resultado da sua adição é: " + valor1)

logar(login)

let numeroEmTexto : string = transformarNumuroCincoEmExtenso(6)
console.log(numeroEmTexto)

