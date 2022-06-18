class jogoDaMemoria {
    // se mandar um obj = { teça: 1, idade: 2, etc: 2}
    //vai ignorar o resto das propriedades e pegar somente a propriedade
    //tela
    constructor({ tela, util }) {
        this.tela = tela
        this.util = util
       // caminho do arquivo, sempre relativo
       // ao index.html!
        this.heroisIniciais = [
            { img: './arquivos/batman.png', nome: 'batman'},
            { img:  './arquivos/cyclop.png', nome: 'flash'},
            { img: './arquivos/flash.png', nome: 'cyclop'},
            { img: './arquivos/homen de ferro.png', nome: 'homen de ferro'},

        ]
        this.iconePadrao = './arquivos/interrogação.png'
        this.heroisEscondidos = []
        this.heroisSelecionados = []
    }
    // para usar o this, nao podemos usar static!
    inicializar() {
   // vai pegar todas as funcoes da classe tela!
   // coloca todos os herois na tela
   this.tela.atualizarImagens(this.heroisIniciais)
   // forca a tela a usar o THIS de jogo da memoria
   this.tela.configurarBotaoJogar(this.jogar.bind(this))
   this.tela.configurarBotaoVerificarSelecao(this.verificarSelecao.bind(this))
    }
   async embaralhar() {
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
        this.tela.exibirCarregando()
        //vamos esperar 1 segundo para atualizar a tela
       await this.util.timeout(1000)
       this.esconderHerois(copias)
       this.tela.exibirCarregando(false)
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
    exibirHerois(nomeDoHeroi) {
        // vamos procurar esse heroi pelo nome em nossos heroidIniciais
        // vamos obter semente a imagem dele
        const {img} = this.heroisIniciais.find(({ nome }) => nomeDoHeroi === nome)
        // vamos criar a funcao na tela, para exibir somente o heroi selecionado
        this.tela.exibirHerois(nomeDoHeroi, img)
    }
    verificarSelecao(id,nome) {
        const item = { id, nome}
        // vamos verificar a quantidade de herois selecionados
        //e tomar açao se escolheu certo ou errado
        const heroisSelecionados = this.heroisSelecionados.length
        switch(heroisSelecionados){
            case 0:
               // adicionada a escolha na lista, esperando pela proxima
               //clicada
               this.heroisSelecionados.push()
               break;
               case 1:
  // se a quantidade de escolhidos for 1, significa
  //que o usuario só pode escolher mais 1
   // vamos obter o primeiro item da lista
   const [ opcao1 ] = this.heroisSelecionados
 // zerar itens para nao selecionar mais de dois
       this.heroisSelecionados = []
   // conferimos se os nomes e ids batem conforme
  // o esperado
       if(opcao1.nome === item.nome &&
         // aqui verificamos se sao ids diferentes para
      //o usuario nao clicar duas vezes no mesmo
                opcao1.id !== item.id         
    ) {
        this.exibirHerois(item.nome)
        // como o padrao e true, nao precisa passar nada
        this.tela.exibirMensagem()
// para a execucao
        return;
    }

    this.tela.exibirMensagem(false)
    alert('combinação incorreta!')
    // fim do case
    break;
        }
    }
    jogar() {
        this.embaralhar()
    }
}