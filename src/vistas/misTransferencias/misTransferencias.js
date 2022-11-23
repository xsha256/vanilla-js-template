function getTransferencias() {
    const idOrdenante = getIdOrdenante();
    if (idOrdenante == null){
        alert("No has iniciado session")
    } else {
        fetch("http://localhost:8080/transferencia/ordenante/" + idOrdenante)
            .then((response) => response.json())
            .then((transferencias => {
              console.log({ transferencias }); 
                const contenedorTransferencias = document.getElementById("contenedor_transferencias");
                contenedorTransferencias.innerHTML = "";
                for (transferencia of transferencias){
                    contenedorTransferencias.innerHTML +=  `<div> | Id: ${transferencia.id}<br> |  Ordenante: ${transferencia.ordenante.usuario} <br> |  Email:  ${transferencia.ordenante.correo} <br>|   Beneficiario: ${transferencia.beneficiario.usuario} <br> |  Email: ${transferencia.beneficiario.correo} <br> | Importe: ${transferencia.importe}€ <br> | Concepto: ${transferencia.concepto} <br> | Fecha: ${transferencia.fecha}<br> +---------------------------+<br><br> </div>`;
                }
        
            }));
        }
    
    function getIdOrdenante(){
        const ordenanteGuardado= sessionStorage.getItem("miUsuarioCliente")
        if(ordenanteGuardado == null){
            return null;
        } else {
            const misTransferencias = JSON.parse(ordenanteGuardado)
            return misTransferencias.id;
        }
    }


}
getTransferencias()