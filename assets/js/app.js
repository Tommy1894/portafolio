function validarFormulario() {
    var nombre = document.getElementById("nombre").value.trim();
    var apellido = document.getElementById("apellido").value.trim();
    var email = document.getElementById("email").value.trim();
    var men= document.getElementById("mensaje").value.trim();
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (nombre === "" || apellido === "" || email === "" || men===""){
        alert("Por favor, completa todos los campos.");
        return false; 
    }
    else if (!emailRegex.test(email)) {
        alert("Por favor, ingresa una dirección de correo electrónico válida.");
        return false; 
    }
    else{
        alert("Se ha enviado tu mensaje");
        return true;
    }

 }

