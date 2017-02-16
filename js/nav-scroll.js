function mostrarMensaje(input, _mensaje, mode=false){
    var span = input.parentNode.getElementsByTagName("span");
    if (mode) {
        if (span.length === 0) {
            span = document.createElement("span");
            input.parentNode.appendChild(span);
        }
        span.innerHTML = _mensaje;
        input.parentNode.getElementsByTagName("span")[0].style.display="block";
    }
    else if (span.length !== 0) {
        input.parentNode.getElementsByTagName("span")[0].style.display="none";
    }
}
function validateForm(){
    numero();
}
//funccion de  name, lastname , email y password,para que el usuario cumpla los caracteres especificos.
function validate_input(input) {
    console.log(input);
    var validations = {
        "numero": /^[A-Z][a-z]+$/,
    };
    if (validations[input.id].test(input.value) == false) {
        return false;
    }
    else
        return true;
}
function numero() {
    var name = document.getElementById("name");
    name.value = name.value.charAt(0).toUpperCase() + name.value.slice(1);
    if (validate_input(name) == false){
        mostrarMensaje(
            name, 
            "Incorrecto, No debe tener números", 
            true
        );
    } else {
        mostrarMensaje(name);
    }
}
function seleccionar(){
    var control = document.getElementById("control");
    if((control.value)==0 !==false ){
        mostrarMensaje(
            control, 
            'Selecciona una opción', 
            true
        );
    } else{
        mostrarMensaje(control);
    }
}
//Funccion para crear un div , el cual informara al usuario, que se tiene que llenar todo. 
function manageMessage(_idInput, _mensaje, mode=false){
    var elemento = document.getElementById(_idInput);
    //verifica si esta creado mi div 
    if (mode) {
        if ( ! elemento) {
            elemento = document.createElement("div");
            elemento.id = _idInput;
            elemento.classList.add("caja1");
        }
        elemento.innerHTML = _mensaje;        
        elemento.style.display="block";
        
        var myForm = document.getElementById("myForm");
        myForm.appendChild(elemento);
    }
    else {
        var message = document.getElementById("mia");
        message.style.display="none";
    }
}
 function mensaje() {
    var name = document.getElementById("name");
    if((name.value)=="" !==false){
        manageMessage("mia", 'Es obligatorio, llenar los datos porfavor!!', true);
        
    } else {
        manageMessage();
    }
}