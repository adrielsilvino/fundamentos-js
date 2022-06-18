class Heroi {
    atacar() {
        console.log(`atacou!!`)
    }
    defender() {
        console.log(`defendeu`)
    }
}

const heroi = new Heroi()
heroi.atacar()
heroi.defender()

// usando construtor

class Heroi2 {
    constructor(nome,idade) {
        this.nome = nome
        this.idade = idade
    }

    atacar() {
        console.log(
            `0 ${this.nome} atacou!!`
            )
    }
}
const heroi2 = new Heroi2 (
    `Flash`, 80
 )
 heroi2.atacar()


 class heroi3 {
     static obterAnoNascimento(idade) {
         return 2020 -idade
     }
 }
 const AnoNascimento = heroi3.obterAnoNascimento(19)
console.log(
    `O ano de nascimento de Heroi é ${AnoNascimento}`
)