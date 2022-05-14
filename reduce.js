const numeros = [2,5,31,223,121,23];
let soma = 0;

for (let i = 0; i < numeros.length; i++){
    soma = soma + numeros[i];
}

console.log('for normal', soma);

const somaReduce = numeros.reduce((valorAcumulador, valorArray) => {
    return valorAcumulador + valorArray
}, 0)

console.log(somaReduce);

//agrupamento utilizando reduce

const pessoas = [
    {
        nome: 'joao',
        idade: 27
    },
    {
        nome: 'jessica',
        idade: 17
    },
    {
        nome: 'maria',
        idade: 14
    },
    {
        nome: 'paulo',
        idade: 19
    },
    {
        nome: 'liz',
        idade: 15
    }
]

    const pessoasAgrupadas = pessoas.reduce(function(valorAcumulador, valorArray) {
    const propMaiorOuMenor = valorArray.idade >= 18 ? 'maiores' : 'menores';

    valorAcumulador[propMaiorOuMenor].push(valorArray);

    return valorAcumulador;
   }, { maiores: [], menores: []})

   console.log('pessoasAgrupadas', pessoasAgrupadas);