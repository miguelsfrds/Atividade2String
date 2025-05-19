//Q2. Escreva uma função em Javascript para verificar se uma String está em branco ou vazia ou não.
//Explicação: Usei um Arrow Function para criar uma função que verifica se a string está vazio ou não.

const verificaStringVazia = valor =>{
    if(valor === ""){
        return "A string está vazia";
    }else{
        return "A string não está vazia";
    }
}

console.log(verificaStringVazia(""));