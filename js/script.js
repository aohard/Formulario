function actualizarDescripcion(event) {
    const descripcionDiv = document.getElementById("descripcion");
    let descripcion = "";

    // Obtener la lista que fue seleccionada o enfocada
    switch (event.target.id) {
        case "lista1":
            if (event.type === "focus") {
                descripcion = "En la sección Origen tenés que elegir el área a la cual pertenecés. En caso de que la gestión de baja se haya iniciado desde la Web, se mostrará en esta sección.";
            } else {
                switch (event.target.value) {
                    case "redes":
                        descripcion = "Seleccioná esta opción si sos parte de este equipo.";
                        break;
                    case "otros":
                        descripcion = "Seleccioná esta opción si sos parte de alguno de estos equipos.";
                        break;
                    case "callcenter":
                        descripcion = "Seleccioná esta opción si sos parte de este equipo.";
                        break;
                }
            }
            break;
        case "lista2":
            if (event.type === "focus") {
                descripcion = "En esta sección debes registrar a qué tipo de gestión corresponde el registro.";
            } else {
                switch (event.target.value) {
                    case "saliente":
                        descripcion = "Seleccioná esta opción cuando proactivamente vos hayas iniciado el contacto con el cliente.";
                        break;
                    case "entrante":
                        descripcion = "Seleccioná esta opción cuando haya sido el cliente el que se contactó con nosotros.";
                        break;
                    case "gestion":
                        descripcion = "Seleccioná esta opción únicamente ante gestiones de seguimiento sobre casos específicos.";
                        break;
                }
            }
            break;
        case "lista3":
            if (event.type === "focus") {
                descripcion = "En esta sección tenés que elegir qué tipo de baja se aplicará en el cliente.";
            } else {
                switch (event.target.value) {
                    case "parcial":
                        descripcion = "Seleccioná esta opción cuando estés gestionando la baja de alguno de los servicios principales y el cliente mantiene algún otro activo.";
                        break;
                    case "total":
                        descripcion = "Seleccioná esta opción cuando estés gestionando la baja total de los servicios principales del cliente.";
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
