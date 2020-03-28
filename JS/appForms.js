
// 1ero. capturamos el formulario

 var elForm = document.querySelector("form");

// console.log(elForm);

// 2. capturamos los campos de un formulario.

var campos = elForm.elements;

	// 2.a parseamos la coleccion HTML de los campos a un array

campos = Array.from(campos)

// 3. sacamos el ultimo elemento de los campos ya que no podemos validar un boton.

campos.pop();

// 4. creamos una funcion var validar si el campo esta vacio.


function estaVacio() {
		var ValorDelCampo = campos.varalue.trim();
		return Boolean(this.value);

}

// 5. iteramos sobre el arrray de campos 
//para asignarle el evento y el handler a cada uno de ellos

campos.forEach( function (unCampo){

	unCampo.addEventListener('blur', function(){

	alert = this.parentElement.nextElementSibling;
	
	if (this.value === "")	{
		// si el campo esta vacio, le vamos a quitar a la alerta la clase hidden.
		alert.classList.remove("hidden");
	
		alert.innerHTML = "el campo <b>" + this.name + "</b> es obligatorio.";
	
		console.log("Campo vacio", this.name);
	
	}
	else {
		alert.classList.remove("hidden");
		alert.classList.remove("alert-danger")
		alert.classList.add("alert-success");

		alert.innerHTML = "";
	}

	
	})
})
