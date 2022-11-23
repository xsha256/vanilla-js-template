function getMensajes() {
    const idOrigen = getIdOrigen();
    if (idOrigen == null){
        alert("No has iniciado session")
    } else {
        fetch("http://localhost:8080/mensaje/origen/" + idOrigen)
            .then((response) => response.json())
            .then((mensajes => {
              console.log({ mensajes }); 
                const contenedorMensajes = document.getElementById("contenedor_mensajes");
                contenedorMensajes.innerHTML = "";
                for (mensaje of mensajes){
                    contenedorMensajes.innerHTML +=  `<div> | Id: ${mensaje.id}<br> |  Origen: ${mensaje.origen.usuario} <br> |  Email:  ${mensaje.origen.correo} <br>|   Destino: ${mensaje.destino.usuario} <br> |  Email: ${mensaje.destino.correo} <br> | Mensaje: ${mensaje.texto} <br> | Fecha: ${mensaje.fecha}<br> +---------------------------+<br><br> </div>`;
                }
        
            }));
        }
    
    function getIdOrigen(){
        const origenGuardado= sessionStorage.getItem("miUsuarioGestor")
        if(origenGuardado == null){
            return null;
        } else {
            const misMensajes= JSON.parse(origenGuardado)
            return misMensajes.id;
        }
    }


}
getMensajes()