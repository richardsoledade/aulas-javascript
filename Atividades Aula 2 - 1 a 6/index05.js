// 5- Crie uma função que receba um array de números (Valide os dados dentro do array, reaproveite a função criada no exercício 1) e depois calcule a média de todos os valores dentro do array

// ------------------------------------------

let numeros = [1, 3, 5, 7, 9, 25, 13, 15, 31, 19, 21, 23, 25, 27];

function conferirDados(array) {
  let irregulares = [];
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] !== "number") {
      irregulares.push(array[i]);
    }
  }
  return irregulares;
}

function somarValores(n1, n2) {
  const total = n1 + n2;
  return total;
}

function calcularArray(array) {
  let somarArray = 0;
  if (conferirDados(array).length == 0) {
    for (let i = 0; i < array.length; i++) {
      somarArray = somarValores(array[i], somarArray);
    }
    console.log(`A média dos valores do array é ${somarArray / array.length}`);
  } else {
    alert(
      `A soma não pode ser feita pois existem dados invalidos: ${conferirDados(
        array
      )}`
    );
  }
}

calcularArray(numeros);

// ------------------------------------------

//Correção 1 :

const numeros1 = [10, 20, 30, 40]

function calcularMedia(array){

    let total = 0;
    for (let i = 0; i < array.length; i++) {
        const element = array[i];

        if(isNumerico(element)){
            total += element //acrescentar os valores da array. dentro de total
        } else {
             return `Erro`
        }
     }

    return total / array.length; // resultado da função
}

function isNumerico(valor){
        if(typeof valor == `number`){
            return true
        } else {
            return false
        }

}

//Correção 2: ForEach

function calcularMedia(numeros){

    let total = 0;
    numeros.forEach(numero => {
        if(isNumerico(numero)){
            total += numero //acrescentar os valores da array. dentro de total
        } else {
             return `Erro`
        }
    });

     }

    return total / array.length; // resultado da função

function isNumerico(valor){
        if(typeof valor == `number`){
            return true
        } else {
            return false
        }

}

const numerosA = [10, 20, 30, 40]

let resultado = calcularMedia(numeros1)

alert(`A soma dos valores do array é: ${resultado}`)
