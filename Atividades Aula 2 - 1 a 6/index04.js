// 4- Crie uma função que receba um string como parâmetro  e execute um "windows.prompt" com o texto recebido como parâmetro, e em seguida retorne o valor que o usuário digitou.

// ------------------------------------------

function inserirDado (string){           
    let dado1 = window.prompt(string)
    alert(`o dado inserido foi ${dado1}`)
}

inserirDado("Insira algum dado")

// ------------------------------------------

//Correção:

// function newPrompt(alert) {
//    let valor = prompt(alert)
//    return valor
// }

// alert(newPrompt(`Digite seu nome:`))
