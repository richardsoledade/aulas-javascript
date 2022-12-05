// 6- Neste exercício, temos um array composto de letras repetidas e uma letra isolada. Por exemplo, temos um array chamado vetor:

// ------------------------------------------

let vetor = ["a", "b", "a", "a", "c", "b"]

function acharIsolado (array){
    let qtdA = [];
    let qtdB = [];
    let qtdC = [];

    for (let i = 0; i < array.length; i++) {
        if(array[i] == "a"){
            qtdA = array[i] + qtdA
        }
        else if(array[i] == "b"){
            qtdB = array[i] + qtdB
        }
        else{
            qtdC = array[i] + qtdC
        } 
    }

    if(qtdA == 1){
        return qtdA;
    }
    else if(qtdB == 1){
        return qtdB;
    }
    else {
        return qtdC;
    }
}

alert(`o elemento destacado da array é: "${acharIsolado(vetor)}"`)
console.log(acharIsolado(vetor));

// ------------------------------------------

// correção:

// let vetor = ["a", "b", "a", "a", "c", "b"]

// function verificarItemIsolado(letras){
//     let itenIsolado = null
// //a
// //0
//    letras.forEach(letra => {
//         let numeroRepeticoes = 0; 

//         letras.forEach(letraComparacao => {
//             if(letra == letraComparacao){
//                 numeroRepeticoes++
//             }
//       });

//         if (numeroRepeticoes == 1)
//         itenIsolado = letra
//         return letra
//     });

//     if(itenIsolado){
//         return itenIsolado
//     }else {
//         return `Não existe itens isolados no array`
//     }
// }

// alert (verificarItemIsolado(vetor))