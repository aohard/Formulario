function mostrarDescripcionFocus(event) {
    const descripcionDiv = document.getElementById("descripcion");
    switch (event.target.id) {
        case "lista1":
            descripcionDiv.innerText = "Está lista desplegable del origen de la solicitud, tendrá el valor WEB por defecto cuando la gestión se haya iniciado por una solicitud de baja cargada desde el portal. En caso de que el origen de la gestión no sea por una solicitud de baja cargada por el portal web, se deberá seleccionar la opción que corresponda.​";
            break;
        case "lista2":
            descripcionDiv.innerText = "Registrar si corresponde a una llamada Entrante, Saliente o si corresponde al seguimiento de una Gestión.";
            break;
        case "lista3":
            descripcionDiv.innerText = "Si el cliente solicita la baja de alguno de los servicios contratados dejando alguno activo, se considera BAJA PARCIAL. Si el cliente solicita la baja de todos los servicios contratados se considera BAJA TOTAL. ​";
            break;
    }
}

function actualizarDescripcion() {
    const lista1 = document.getElementById("lista1");
    const lista2 = document.getElementById("lista2");
    const lista3 = document.getElementById("lista3");
    const descripcionDiv = document.getElementById("descripcion");

    let descripcion = "";

    // Obtener la opción seleccionada de cada lista y generar la descripción
    switch (lista1.value) {
        case "redes":
            descripcion = "La gestión se realiza a través de Redes Sociales.";
            break;
        case "otros":
            descripcion = "Otros orígenes incluyen gestiones telefónicas o redes no especificadas.";
            break;
        case "callcenter":
            descripcion = "La gestión se realizó a través del Call Center Administrativo.";
            break;
    }

    switch (lista2.value) {
        case "saliente":
            descripcion = "Tipo de gestión saliente: implica que el contacto fue iniciado desde Telecentro.";
            break;
        case "entrante":
            descripcion = "Tipo de gestión entrante: el cliente se comunica directamente con Telecentro.";
            break;
        case "gestion":
            descripcion = "Gestión general que implica seguimiento o manejo de casos específicos.";
            break;
    }

    switch (lista3.value) {
        case "parcial":
            descripcion = "Baja parcial: cliente solicita la baja un servicio, pero se mantienen otros activos.";
            break;
        case "total":
            descripcion = "Baja total: cliente solicita la baja todos los servicios.";
            break;
    }

    // Mostrar la descripción
    descripcionDiv.innerText = descripcion;
}

// Agregar eventos a cada select para mostrar la descripción cuando el select recibe el foco
document.getElementById("lista1").addEventListener("focus", mostrarDescripcionFocus);
document.getElementById("lista2").addEventListener("focus", mostrarDescripcionFocus);
document.getElementById("lista3").addEventListener("focus", mostrarDescripcionFocus);

// Agregar eventos a cada select para actualizar la descripción cuando cambie
document.getElementById("lista1").addEventListener("change", actualizarDescripcion);
document.getElementById("lista2").addEventListener("change", actualizarDescripcion);
document.getElementById("lista3").addEventListener("change", actualizarDescripcion);
