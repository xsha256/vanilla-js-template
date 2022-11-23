function getClientes() {
    const idGestor = getIdUsuario();
    if (idGestor == null){
        alert("No has iniciado session")
    } else {
        fetch("http://localhost:8080/cliente/gestor/" + idGestor)
            .then((response) => response.json())
            .then((clientes => {
              console.log({ clientes }); 
                const contenedorClientes = document.getElementById("contenedor_clientes");
                contenedorClientes.innerHTML = "";
                for (cliente of clientes){
                    contenedorClientes.innerHTML +=  `<div> | Id: ${cliente.id}<br> |  Cliente: ${cliente.usuario} <br> |  Email:  ${cliente.correo} <br>|   Saldo: ${cliente.saldo} <br> +---------------------------+<br><br> </div>`;

                }
        
            }));
        }
    
    function getIdUsuario(){
        const usuarioGuardadoGestor = sessionStorage.getItem("miUsuarioGestor")
        if(usuarioGuardadoGestor == null){
            return null;
        } else {
            const miUsuarioGestor = JSON.parse(usuarioGuardadoGestor)
            return miUsuarioGestor.id;
        }
    }


}
getClientes()