// Q5. Escreva uma função em Javascript para converter uma string em formato abreviado.
// Explicação: Usei uma Arrow Function para criar uma função utilizando os métodos split e slice.
// Primeiro, separei o nome e sobrenome onde havia espaço em branco utilizando o split.
// Em seguida, peguei apenas o sobrenome, usei o slice para extrair somente a primeira letra,
// adicionei um ponto final e por fim, concatenei o primeiro nome com a abreviação do sobrenome.

const abreviacao = nome => {
    let nomeCompleto = nome.split(" ");
    let sobrenome = nomeCompleto[1];
    let abreviacaoSobrenome = sobrenome.slice(0, 1);
    sobrenome = `${abreviacaoSobrenome}.`;
    let nomeAbreviado = `${nomeCompleto[0]} ${sobrenome}`;
    return nomeAbreviado;
};

console.log(abreviacao("Miguel Ferreira"));