const ID_CONTEUDO = "conteudo"
class tela {
    static obterCodigoHtml(item) {
        return  `
        <div class="col-md-3">
        <div class="card" style="width: 50%;">
            <img src="${item.img}" name="${item.nome}" class="card-img-top" alt="...">
          </div>
          <br />
       </div>
       `
    }
    static alterarContudoHtml(CodigoHtml) {
        const conteudo = document.getElementById(ID_CONTEUDO)
        conteudo.innerHTML = CodigoHtml
    }
    static gerarStringHTMLpelaImagem(itens) {
        // para cada item da lista, vai executar a funcao obterCodigoHTML
        // ao final, vai concatenar tudo em uma unica string
        // muda de Array para String
        return itens.map(tela.obterCodigoHtml).join('')
    }
    static atualizarImagens(itens) {
        const CodigoHtml = tela.gerarStringHTMLpelaImagem(itens)
        tela.alterarContudoHtml(CodigoHtml)
    }
}