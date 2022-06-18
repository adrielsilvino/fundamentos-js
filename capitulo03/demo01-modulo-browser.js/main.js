window.onload = () => {
    console.log('Tela carregou!!')
    const btn = document.getElementById('btnCalcular')
    btn.onclick = click 
    function obterValorImbut(id) {
        const item= document.getElementById(id)
        return item.Value
    }

    function click() {
        const tipoOperacao = obterValorImbut('tipoOperacao')
        const valor1 = obterValorImbut('valor1')
        const valor2 = obterValorImbut('valor2')
        const resultado = Matematica[tipoOperacao](
            valor1, valor2
        )      
        console.log('resultado', resultado)
        document.getElementById('resultado')
        .innerText = `A operacão de ${tipoOperacao}, ${valor1} por ${valor2} é
        ${resultado}
        `
        
    }
}