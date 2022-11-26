let valorProduto = 1500
let parcelas = 5
let valorJuros3 = valorProduto * 0.10
let valorJuros5= valorProduto * 0.20

let calc1 = (valorProduto + valorJuros3) / 3 
let calc2 = (valorProduto + valorJuros5) / 5

if (parcelas == 3){
    console.log(`Atividade 4a : o valor da parcela mensal é de R$ ${calc1}`)
} else {
    console.log(`Atividade 4b: o valor da parcela mensal é de R$ ${calc2}`)
}

// Correção 
// 3x 10% no total
//  5x 20% no total

// let preco = 1500
// let totalAPagar = null; 
// let prestacao = null; 
// let quantidadePar = 3


// if (quantidadePar == 3) {

//     totalAPagar = preco * 1.1
//     prestacao = totalAPagar / quantidadePar 


// } else if (quantidadePar == 5){

//     totalAPagar = preco * 1.2
//     prestacao = totalAPagar / quantidadePar 

// }else {
//     alert('Defina em 3x ou 5x')
// }

// alert(`
//     VALOR PRODUTO: ${preco}
//     VALOR PARCELA: ${prestacao}
//     NUMERO PARCELAS: ${quantidadePar}
//     TOTAL: ${totalAPagar}
// `)