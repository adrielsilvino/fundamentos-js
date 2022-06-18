// enquanto não mudar,não para!
let termoDeParada = true
let contador = 0
while(termoDeParada) {
    termoDeParada = contador <10
    if(contador % 2 === 0) {
        console.log('Numero par', contador)
    }
    contador += 1
    //contador = contaador +1
}

// roda a primeira vez e testa a variavel deppois!
do {
    console.log('só uma vez! pois termoDeparada é', termoDeParada)
} while(termoDeParada)

while(true){
    // nao vai rodar
    console.log('Nem vai rodar!')
}