function onload() {
   const dependencias = {
       tela: Tela, // a classe Tela é global
       util: Util
   }
   // inicializemos o jogo da memoria
   const jogoDaMemoria = new jogoDaMemoria(dependencias)
   jogoDaMemoria.inicializar()
}
window.onload = onload
