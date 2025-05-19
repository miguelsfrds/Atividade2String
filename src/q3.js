//Q3. Escreva uma função em Javascript para dividir uma string através dos espaços vazios e convertê-la em um array de palavras.
//Explicação: Usei um Arrow Function para criar uma função utilizando a função split que divide uma string em partes menores criando um array

const dividirString = frase =>{
    return frase.split(" ");
}

console.log(dividirString("eu gosto de bolo"));