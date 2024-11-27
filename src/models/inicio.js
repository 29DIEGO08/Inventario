function navigate() {
    var userType = document.getElementById("userType").value;
    if (userType === "Propietario") {
        window.location.href = "/src/views/sesion2.html";
    } else if (userType === "Cliente") {
        window.location.href = "/src/views/sesion.html";
    } else {
        alert("Por favor, seleccione un tipo de usuario.");
    }
}