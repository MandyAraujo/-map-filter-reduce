
const numeros = [0,5,10,34,21,21];
let mult2 = [];

for(let i = 0; i < numeros.length; i++){
    if(numeros[i] % 2 === 0){
        mult2.push (numeros [i])
    }
}

console.log (mult2);

// utilizando filter

const numerosFiltrados = numeros.filter(function(numero){
    if (numero % 2 === 0){
        return true;
    } else{
        return false;
    }
})

console.log(numerosFiltrados);