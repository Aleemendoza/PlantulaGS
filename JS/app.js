var imagenes = ["images/horarioAtencion.jpg", "images/ubicacion.jpg", "images/logoPlantula.jpg","images/cactus.jpg"];
var cont = 0;
var botones = document.getElementById("contenedoresDeBotones");

function siguiente() {
    var cambiaImagen = document.getElementById("cambiaImagen");
    cont++;

    if (cont >= imagenes.length) {
        cont = 0;

    }
    
    cambiaImagen.src = imagenes[cont]

}

function anterior() {
    var cambiaImagen = document.getElementById("cambiaImagen");

    cont--;

    if (cont < 0) {
        cont = imagenes.length - 1;

    }
    cambiaImagen.src = imagenes[cont];

}
var intervalo = setInterval(siguiente, 3000);

cambiaImagen.addEventListener("mouseenter", function(){

   clearInterval(intervalo);
   
   
});


cambiaImagen.addEventListener("mouseleave", function(){

    
    intervalo = setInterval(siguiente, 3000);


})


var botonCuenta = document.getElementById("dropdownMenuButton");
var login = document.getElementById("login");
var form = document.getElementById("formLogin")
var menuAbierto = false;
botonCuenta.addEventListener('click', function (){
    
    if (menuAbierto == false){

        form.style.background="green"
        login.style.display="block";
        form.style.display="block"
        menuAbierto = true;
        console.log("false")
    }
    else {
        
        console.log(true)
        login.style.display="none"
        form.style.display="none"
        menuAbierto = false;

    }


})  