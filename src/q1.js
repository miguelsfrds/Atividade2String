//Q1. Escreva uma função em Javascript para verificar se uma variável é do tipo String ou não.
//Explicação: Usei um Arrow Function para criar uma função que verifica se o valor digitado pelo usuario é uma String ou não.
//Se for uma string irá ser retornado "É string" e se não for "Não é string".

const verificaString = valor =>{
    if(typeof valor === "string"){
        return "É string"
    }else{
        return "Não é string"
    }
}

console.log(verificaString("Gelo"));
console.log(verificaString(1));