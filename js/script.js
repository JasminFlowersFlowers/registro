function iniciar() {
    var formulario = document.getElementById("registro");
    var p1 = document.getElementById("password1");
    var p2 = document.getElementById("password2");
    var boton = document.getElementById("enviar");

    // Validación de contraseñas iguales en tiempo real
    function validarPasswords() {
        if (p1.value !== p2.value) {
            p2.setCustomValidity("Las passwords deben coincidir");
        } else {
            p2.setCustomValidity("");
        }
    }

    p1.addEventListener("input", validarPasswords);
    p2.addEventListener("input", validarPasswords);

    // Validación al pulsar enviar
    boton.addEventListener("click", function() {
        // 1. Validar fecha
        var inputFecha = document.getElementById("fechaInicio");
        var fechaActual = new Date();
        var fechaIni = new Date(inputFecha.value);

        // Resetear horas para comparar solo días
        fechaActual.setHours(0,0,0,0);

        if (inputFecha.value !== "" && fechaIni < fechaActual) {
            alert("La fecha debe ser mayor o igual que la actual");
            return;
        }

        // 2. Si el formulario es válido tras todas las reglas, enviar
        if (formulario.checkValidity()) {
            formulario.submit();
        } else {
            formulario.reportValidity(); // Muestra los errores nativos
        }
    });
}

window.addEventListener("load", iniciar);