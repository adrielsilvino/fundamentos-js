const Matematica = require('./matematica')
//console.log(Matematica.somar(1, 4))
const readline = require('readline')
const { multiplicar } = require('./matematica')
const terminal = readline.createInterface({
    input: process.stdin,
    output:process.stdout
})


terminal.question('insira o primeiro valor\n', valor1 => {
    terminal.question('insira o segundo valor\n', valor2 => {
        terminal.question('insira a operacao\n', valor2 => {
          const resultado = Matematica[tipoOperacao](
              Number(valor1), Number(valor2)
          )
          console.log(
              `A operacão ${tipoOperacao} de ${valor1} e ${valor2} é ${resultado}`
          )
          terminal.close()
           } )
        })
 })