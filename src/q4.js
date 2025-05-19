//Q4. Escreva uma função em Javascript para recortar um número especificado de caracteres de uma String partindo sempre do início.
//Explicação: Usei um Arrow Function para criar uma função utilizando a função slice que permite cortar as strings até um certo ponto.

const recortarPalavra = palavra =>{
    return palavra.slice(0,4);
}

console.log(recortarPalavra("Rapadura"));