function calcularEdad() {
    const nombre = document.getElementById("nombre").value.trim();
    const anioNacimiento = parseInt(document.getElementById("ano").value);
    const anioActual = new Date().getFullYear();
    
    const mensaje = document.getElementById("mensaje");

    //comprobacion si algun dato que se ha introducido esta mal.

    if (!nombre || isNaN(anioNacimiento) || anioNacimiento > anioActual || anioNacimiento < 1900) {
        mensaje.textContent = "Por favor introduzca los datos correctos.";
        mensaje.style.color = "red";
        return;
    }

    const edad = anioActual - anioNacimiento;
    let categoria = "";

    if (edad <= 12) {
        categoria = "eres un niño/a";
        mensaje.style.color = "blue";
    } else if (edad <= 17) {
        categoria = "eres un adolescente";
        mensaje.style.color = "yellow";
    } else if (edad <= 59) {
        categoria = "eres un adulto/a";
        mensaje.style.color = "orange";
    } else {
        categoria = "eres una persona mayor";
        mensaje.style.color = "red";
    }

    mensaje.textContent = `Hola ${nombre}, tienes ${edad} años y ${categoria}.`;
}
