function validateForm(){
	var nombre = document.forms["myForm"]["nombre"].value;
	var email = document.forms["myForm"]["email"].value;
	var estado = true;
	console.log(nombre)
	if (/^[A-Z][a-z]+$/.test(nombre) === false) {
		alert('El nombre es incorrecto, debe tener la primera letra mayúscula');
		estado = false;
	}
	if (/^\S+@\S+\.\S+$/.test(email) === false) {
		alert('email incorrecto')
		estado = false;
	}

	if (estado)
		alert('Registrando')
	/* Escribe tú código aquí */
}
 function mensaje() {
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    if((name.value)=="" !==false || (email.value)=="" !==false){
        manageMessage("mia", 'Es obligatorio, llenar los datos porfavor!!', true);
        
    } else {
        manageMessage();
    }
}