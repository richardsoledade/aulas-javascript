// Opinião :
// ótimo: 3
// bom: 2
// regular: 1

// a média das idades das pessoas que responderam ótimo;
// a quantidade de pessoas que responderam regular;
// a porcentagem de pessoas que responderam bom entre todos os espectadores analisados.

// var idades = [15, 24, 26, 29, 25, 27, 16, 17, 18, 19, 22, 21, 28, 30, 20];
// //              0    1   2   3   4   5   6   7   8   9  10  11  12  13  14
// var opinioes = [1, 2, 3, 2, 2, 3, 3, 3, 1, 3, 2, 2, 2, 1, 3];
// //               0   1  2  3  4  5  6  7  8  9 10  11 12 13 14

// let otimo = 3;
// let bom = 2;
// let regular = 1;

// let totalPessoas = idades.length;

// // Otimo
// let somaIdOtimo = 0;
// let nPessoasOtimo = 0;

// // Bom
// let nPessoasBom = 0;

// // Regular
// let nPessoasReg = 0;


// for (let i = 0; i < idades.length; i++) {
//   if (opinioes[i] == 3) {
//     somaIdOtimo = idades[i] + somaIdOtimo;
//     nPessoasOtimo++;

//   } else if (opinioes[i] == 1) {
//     nPessoasReg++;

//   } else {
//     nPessoasBom++;
//   }
// }

// let porcentagemBom = (nPessoasBom * 100) / totalPessoas;

// // console.log(porcentagemBom);

// let media = (somaIdOtimo / nPessoasOtimo).toFixed(2);

// console.log(`Atividade 7/8: Média de idade que responderam "otimo" = ${media}, quantidade "regular" = ${nPessoasReg}, 
// porcentagem do total como "Bom" =  ${porcentagemBom}%`)


// Correção de Aula: 

let pesquisas = [1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3]

let idades = [10, 20, 30, 40, 50, 10, 20, 30, 40, 50,10, 20, 30, 40, 50, ]


let totalOtimo = 0;
let qtdOtimo = 0;

let qtdRegular = 0;
let qtdBom = 0.

for (let i = 0; i < pesquisas.length; i++) {
  const pesquisa = pesquisas[i];
  const idade = idades[i];

    if(pesquisa == 3){
        totalOtimo += idade
        qtdOtimo++
    }
    if(pesquisa == 1){
        qtdRegular++
    }
    if(pesquisa ==2){
      qtdBom++
    }

}
mediaOtimo = totalOtimo / qtdOtimo
alert(`
A média das pessoas que responderam otimo é: ${mediaOtimo}
Pessoas que votaram bom: ${(qtdBom * 100) / pesquisas.length}
Pessoas que votaram Regular: ${qtdRegular}



`)