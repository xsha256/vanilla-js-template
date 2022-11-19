function getMiPerfil() {
  const idCliente = 0;
  fetch("http://localhost:8080/cliente/" + idCliente)
    .then((response) => response.json())
    .then((cliente) => {
      console.log({ cliente });

      const contenedorIdGestor = document.getElementById("contenedor-idGestor");
      contenedorIdGestor.innerHTML = cliente.gestor.id;

      const contenedorUserName = document.querySelector("#contenedor-username");
      contenedorUserName.innerHTML = cliente.usuario;

      const contenedorEmail = document.getElementById("contenedor-email");
      contenedorEmail.innerHTML = cliente.correo;

      const contenedorSaldo = document.getElementById("contenedor-saldo");
      contenedorSaldo.innerHTML = cliente.saldo;

      // return (usuario = cliente.usuario + cliente.correo);
    });

  const button = document.querySelector("#btn-change-cliente");

  button.addEventListener("click", (_event) => {
    const password = prompt();
    const idGestor = prompt();

    fetch("http://localhost:8080/cliente/" + idCliente)
      .then((response) => response.json())
      .then((cliente) => {
        console.log({ cliente });

        idInput = idCliente;
        passwordInput = password;
        usuarioInput = cliente.usuario;
        correoInput = cliente.correo;
        saldoInput = cliente.saldo;
        idGestorInput = idGestor;

        const updateCliente = {
          gestor: {id: idGestorInput},
          id: idInput,
          usuario: usuarioInput,
          correo: correoInput,
          password: passwordInput,
          saldo: saldoInput,
        };

        const optionPut = {
          method: "POST",
          body: JSON.stringify(updateCliente),
          headers: { "content-type": "application/json" },
        };

        fetch("http://localhost:8080/cliente", optionPut)
          .then((response) => response.json())
          .then((passwordUpDated) => {
            console.log({ passwordUpDated });
          });
      });
  });

  const deleteButton = document.querySelector("#btn-delete-cliente");

  deleteButton.addEventListener("click", (_event) => {
    const optionPut = {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    };

    fetch("http://localhost:8080/cliente/" + idCliente, optionPut)
      .then((response) => response.json())
      .then((clienteEliminado) => {
        console.log({ clienteEliminado });
        alert("Cliente eliminado");
        //vaciamos los inputs con .reset()
     
      });
  });
}

getMiPerfil();
