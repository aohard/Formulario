function actualizarDescripcion(event) {
    const descripcionDiv = document.getElementById("descripcion");
    let descripcion = "";

    // Obtener la lista que fue seleccionada o enfocada
    switch (event.target.id) {
        case "lista1":
            if (event.type === "focus") {
                descripcion = "Está lista desplegable del origen de la solicitud, tendrá el valor WEB por defecto cuando la gestión se haya iniciado por una solicitud de baja cargada desde el portal. En caso de que el origen de la gestión no sea por una solicitud de baja cargada por el portal web, se deberá seleccionar la opción que corresponda.​";
            } else {
                switch (event.target.value) {
                    case "redes":
                        descripcion = "La gestión se realiza a través de Redes Sociales.";
                        break;
                    case "otros":
                        descripcion = "Otros orígenes incluyen gestiones telefónicas o redes y otros.";
                        break;
                    case "callcenter":
                        descripcion = "La gestión se realizó a través del Call Center Administrativo.";
                        break;
                }
            }
            break;
        case "lista2":
            if (event.type === "focus") {
                descripcion = "Registrar si corresponde a una llamada Entrante, Saliente o si corresponde al seguimiento de una Gestión. ​";
            } else {
                switch (event.target.value) {
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
            }
            break;
        case "lista3":
            if (event.type === "focus") {
                descripcion = "Si el cliente solicita la baja de alguno de los servicios contratados dejando alguno activo, se considera BAJA PARCIAL. Si el cliente solicita la baja de todos los servicios contratados se considera BAJA TOTAL. ​";
            } else {
                switch (event.target.value) {
                    case "parcial":
                        descripcion = "Baja parcial: se da de baja un servicio, pero se mantienen otros activos.";
                        break;
                    case "total":
                        descripcion = "Baja total: se procede a dar de baja todos los servicios del cliente.";
                        break;
                }
            }
            break;
    }

    // Mostrar la descripción
    descripcionDiv.innerText = descripcion;
}

// Agregar eventos a cada select para mostrar la descripción cuando el select recibe el foco o cambia
document.getElementById("lista1").addEventListener("focus", actualizarDescripcion);
document.getElementById("lista1").addEventListener("change", actualizarDescripcion);
document.getElementById("lista2").addEventListener("focus", actualizarDescripcion);
document.getElementById("lista2").addEventListener("change", actualizarDescripcion);
document.getElementById("lista3").addEventListener("focus", actualizarDescripcion);
document.getElementById("lista3").addEventListener("change", actualizarDescripcion);
