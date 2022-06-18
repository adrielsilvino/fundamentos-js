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
        this.iconePadrao = './arquivos/interrogação.png'
        this.heroisEscondidos = []
    }
    // para usar o this, nao podemos usar static!
    inicializar() {
   // vai pegar todas as funcoes da classe tela!
   // coloca todos os herois na tela
   this.tela.atualizarImagens(this.heroisIniciais)
   // forca a tela a usar o THIS de jogo da memoria
   this.tela.configurarBotaoJogar(this.jogar.bind(this))
    }
    embaralhar() {
        const copias = this.heroisIniciais
        // duplicar os itens
        .concat(this.heroisIniciais)
        // entrar em cada idem e criar um id aleatorio
        .map(item => {
            return Object.assign({}, item, {id:Math.random() / 0.5})
        })
        // ordenar aleatoriamente
        .sort(() => Math.random() - 0.5)
        this.tela.atualizarImagens(copias)
        //vamos esperar 1 segundo para atualizar a tela
        setTimeout(() => {
            this.esconderHerois(copias)
        }, 1000);
    }
    esconderHerois(herois) {
        // vamos trocar a imagem de todos os herois existentes
        //pelo icone padrao
        // como fizemos no construtor, vamos extrair somente o necesario
        //usando a sintese ({ chave; 1}) estamos falando que vamos retomar 
        // o que tiver dentro dos parenteses
        //quando nao usamos: (exemplo do id), o JS entende que o nome
        // é o mesmo do valor. Ex. Id: id. vira um id
        const heroisOcultos = herois.map(({ nome, id }) => ({
           id,
           nome,
           img: this.iconePadrao
        }))
        // atualizaremos a tela com os herois ocultos
        this.tela.atualizarImagens(heroisOcultos)
  //guardamos os herois para trabalhar com eles depois
        this.heroisOcultos = heroisOcultos
    }

    jogar() {
        this.embaralhar()
    }
}