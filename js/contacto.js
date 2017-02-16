function validateForm(){
	var numero = document.forms["myForm"]["numero"].value;
	var estado = true;
	console.log(nombre)
	if (/^[A-Z][a-z]+$/.test(numero) === false) {
		alert('El nombre es incorrecto, debe tener la primera letra mayúscula');
		estado = false;
	}
	if (estado)
		alert('Registrando')
	/* Escribe tú código aquí */
}