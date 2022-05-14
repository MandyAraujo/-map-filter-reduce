const numeros = [2,5,23,32,43];


//utilizando for
let novo = [];
for(let i = 0; i <  numeros.length; i++ ){
    novo.push(numeros[i] * 2 )
}


//utilizando map

const novoMap = numeros.map(numero => numero*5);

console.log(novo);
console.log(novoMap)


// ------------------------------------------

const nomes = ['amanda', 'leticia', 'jessica'];

const nomesMinusculo = nomes.map(function(nome){
    return nome.toUpperCase();
})
const nomesMinusculo = nomes.map(nome => nome.toLowerCase()) //arrow function


console.log(nomesMinusculo)





