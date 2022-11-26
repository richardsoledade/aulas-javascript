var alturas = [
  1.81, 1.82, 1.93, 1.98, 1.65, 1.8, 1.75, 1.7, 1.72, 1.75, 1.75, 1.7, 1.72,
  1.75, 1.65,
];

var maiorNumero = 0;
var menorNumero = alturas[0];

let somaAltura = 0;

let maiorAltura = 0;

for (let i = 0; i < alturas.length; i++) {
  var numero = alturas[i];
  //Calculo maior numero da array
  if (alturas[i] > maiorNumero) {
    maiorNumero = alturas[i];
  }
  //Calculo menor numero da array
  if (alturass[i] < menorNumero) {
    menorNumero = alturas[i];
  }

  //Calculo média altura total
  somaAltura = alturas[i] + somaAltura;

  //Quantidade de pessoas com mais de 181
  if (alturas[i] > 1.81) {
    maiorAltura++;
  }
}
let maiorEMenor = `${maiorNumero}, ${menorNumero}`;

console.log(`Atividade 6: A maior e menor altura espectivamente = ${maiorEMenor},média de altura = ${(somaAltura / alturas.length).toFixed(2)} quantidade com mais de 1.81 = ${maiorAltura}`);


// Correção em aula: 

// let alturas = [1.8, 1.8, 1.9, 1.9, 1.6, 1.8, 1.7, 1.7, 1.7, 1.7, 1.7, 1.7, 2.1, 1.7, 1.6];

// let maiorAltura = 0;
// let menorAltura = 5;
// let total = 0;
// let qtdAltos = 0;

// for (let i = 0; i < alturas.length; i++) {
//   const element = alturas[i];

//     if(element > maiorAltura){
//         maiorAltura = element
//     }
//     if(element < menorAltura){
//       menorAltura = element
//       }
//       if ( element > 1.81){
//         qtdAltos++
//       }
//        // total = element + total
//     total += element

// } 

// let media = total / alturas.length

// alert(`A maior Altura é ${maiorAltura}
// A menor alura é: ${menorAltura}
// A media de altura é ${media}
// Numero de pessoas com mais de 1,81: ${qtdAltos}`
// ); 