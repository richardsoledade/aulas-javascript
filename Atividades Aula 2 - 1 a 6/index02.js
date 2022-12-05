// 2- Crie uma função que receba um array de números (crie uma segunda função para validar os dados dentro do array) e depois calcule a soma de  todos os valores dentro do array

// ------------------------------------------
let arrayNumeros = [2, 4, 6, 8, 10, 21, 14, 16, 18, 20, 22, 26, 28, 30];


function validarDados (array){
    let invalidos = [];
    for (let i = 0; i < array.length; i++) {
        if(typeof array[i] !== "number"){
            invalidos.push(array[i]);
        }
    }
    return invalidos
}

function somarNumeros (array){
    let somarArray = 0;
    if(validarDados(array).length == 0){
        for (let i = 0; i < array.length; i++) {
        somarArray = array[i] + somarArray   
        }
        console.log(`A soma dos valores do array é ${somarArray}`)
    } else {
        alert(`A soma não pode ser feita pois existem dados invalidos: ${validarDados(array)}`)
    }
}

somarNumeros(arrayNumeros)
// ------------------------------------------


//correção: 

function somarNumeros(array){
    
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        const element = array[i];

        if(isNumerico(element)){
            total += element //acrescentar os valores da array. dentro de total
        } else {
             return `Erro`
        }
     }

    return total; // resultado da função
}

function isNumerico(valor){
    if(typeof valor == `number`){
        return true
    } else {
        return false
    }

}

const numeros = [10, 20, 30, 40]

let resultado = somarNumeros(numeros)

alert(`A soma dos valores do array é: ${resultado}`)