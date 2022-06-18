class jogoDaMemoria {
    // se mandar um obj = { teça: 1, idade: 2, etc: 2}
    //vai ignorar o resto das propriedades e pegar somente a propriedade
    //tela
    constructor({ tela }) {
        this.tela = tela
       // caminho do arquivo, sempre relativo
       // ao index.html!
        this.heroisIniciais = [
            { img:'./arquivos/batman.png', name: 'batman'},
            { img:'./arquivos/cyclop.png', name: 'flash'},
            { img:'./arquivos/flash.png', name: 'cyclop'},
            { img:'./arquivos/homen de ferro.png', name: 'homen de ferro'},

        ]
    }
    // para usar o this, nao podemos usar static!
    inicializar() {
   // vai pegar todas as funcoes da classe tela!
   // coloca todos os herois na tela
   this.tela.atualizarImagens(this.heroisIniciais)
    }
}