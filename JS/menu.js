"use strict"
var paginaSeleccionada = "inicio";

var paginas = document.getElementsByClassName("page");
var i = 0;
function refrescarPagina() {

    for (var i = 0; paginas.length > i; i++) {
        var pagina;
        pagina = paginas[i];

        if (pagina.getAttribute("id") == paginaSeleccionada) {

            pagina.style.display = "block";

        } else {
            pagina.style.display = "none";
        }
    }

}
var botones = document.getElementsByClassName("button");


for (var i = 0; botones.length > i; i++) {
    function crearClosure(){
        var indice = i;
        return function(){
            paginaSeleccionada = paginas[indice].getAttribute("id");
            refrescarPagina();
        }
    }
    var boton = botones[i];
    boton.addEventListener("click", crearClosure())

}

refrescarPagina();

