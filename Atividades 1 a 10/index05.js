//  Leitura de notas e aprovação do aluno

let nomeAluno = "Richard"
let nota1 = 8
let nota2 = 7
let nota3 = 9

let media = (nota1 + nota2 + nota3) / 3


if (media >= 8) {
    console.log (`Atividade 5a :O aluno ${nomeAluno} com as notas 
    parciais de ${nota1}, ${nota2} e ${nota3} obteve média de ${media}, portanto está aprovado`)

}else{
    console.log (`Atividade 5b :O aluno ${nomeAluno} com as notas 
    parciais de ${nota1}, ${nota2} e ${nota3} obteve média de ${media}, portanto está REPROVADO `)
}

// correção

// let nome = `Richard`
// let nota1 = 5
// let nota2 = 10
// let nota3 = 10
// let media = (nota1 + nota2 + nota3) / 3 

// if(media >= 8) {
//     alert(`A media de ${nome} é ${media}
//     O aluno(a) foi APROVADO!`)
// } else {
//     alert(`A media de ${nome} é ${media}
//     O aluno(a) foi REPROVADO!`)
// }