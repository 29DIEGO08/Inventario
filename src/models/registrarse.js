function validarContrasenas() {
    var nombre = document.getElementById('nombre').value;
    var apellidos = document.getElementById('apellidos').value;
    var contrasena = document.getElementById('contrasena').value;
    var confirmarContrasena = document.getElementById('confirmar_contrasena').value;

    if (nombre === "" || apellidos === "" || contrasena === "" || confirmarContrasena === "") {
        alert("Todos los campos deben estar llenos");
        return;
    }

    if (contrasena === confirmarContrasena) {
        console.log("Procesando");
        setTimeout(() => {
            alert("Registro exitoso");
        }, 3000);
    } else {
        alert("Las contraseñas no coinciden");
    }
}

