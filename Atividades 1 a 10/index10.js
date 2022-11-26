// Media de dados Homens e Mulheres
var idades = [22, 24, 26, 29, 25, 27, 16, 17, 18, 19];
//             0   1   2   3   4   5   6   7   8   9 
var peso = [77, 75, 65, 58, 45, 88, 90, 55, 74, 60];
//          0  1  2  3  4  5  6  7  8  9 
var genero = ["H", "M", "M", "M","M", "H", "M", "H","H","M"];

// let homem = "H";
// let mulher = "M";

let totalHomens =0;
let totalMulheres = 0;

let idadeTotalH = 0;
let pesoTotalM = 0;

for (let i = 0; i < idades.length; i++) {
    if (genero[i] == "H") {
      totalHomens++;
      idadeTotalH = idades[i] + idadeTotalH
      
    } else {
        totalMulheres++;
        pesoTotalM = peso[i] + pesoTotalM

     }
}

let mediaIdH = idadeTotalH / totalHomens;
let mediaPesoM = pesoTotalM / totalMulheres;

console.log(`Atividade 10:Homens = ${totalHomens}
Mulheres = ${totalMulheres}
Media de peso das mulheres = ${mediaPesoM}kg
Media de idade dos Homens = ${mediaIdH} anos
`);
