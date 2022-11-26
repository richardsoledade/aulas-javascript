var numeros = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

let numeroPar = 0;
let numeroPrimo = 0;

function VerificarPrimo(numero) {
    for (let i = 2; i < numero; i++) {
        if(numero % i === 0){
            return false
         }  
}
 return numero > 1;

}

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0){
        numeroPar = numeros[i] + numeroPar
    } 
    if (VerificarPrimo(numeros[i])) {
        numeroPrimo = numeros[i] + numeroPrimo
        console.log(numeros[i])
    }
}

console.log(`Atividade 9: soma dos Primos = ${numeroPrimo}, Soma dos Pares = ${numeroPar}`)