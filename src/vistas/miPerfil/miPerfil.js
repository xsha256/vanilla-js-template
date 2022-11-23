function getMiPerfil() {
  const usuarioGuardadoGestor = sessionStorage.getItem("miUsuarioGestor");

  if (usuarioGuardadoGestor != null) {
    document.getElementById("titulo").innerHTML = "<h1>Gestor</h1>";

    const miUsuarioGestor = JSON.parse(usuarioGuardadoGestor);
    console.log({ miUsuarioGestor });
    const idGestor = miUsuarioGestor.id;

    fetch("http://localhost:8080/gestor/" + idGestor)
      .then((response) => response.json())
      .then((gestor) => {
        console.log({ gestor });

        const contenedorUserName = document.querySelector(
          "#contenedor-username"
        );
        contenedorUserName.innerHTML = gestor.usuario;

        const contenedorEmail = document.getElementById("contenedor-email");
        contenedorEmail.innerHTML = gestor.correo;

        return (usuario = gestor.usuario);
      });
  }

  if (usuarioGuardadoGestor != null) {
    const button = document.querySelector("#btn-change");

    button.addEventListener("click", (_event) => {
      const password = prompt();

      const miUsuarioGestor = JSON.parse(usuarioGuardadoGestor);
      console.log({ miUsuarioGestor });
      const idGestor = miUsuarioGestor.id;

      fetch("http://localhost:8080/gestor/" + idGestor)
        .then((response) => response.json())
        .then((gestor) => {
          console.log({ gestor });

          idInput = idGestor;
          passwordInput = password;
          usuarioInput = gestor.usuario;
          correoInput = gestor.correo;

          const updateGestor = {
            id: idInput,
            usuario: usuarioInput,
            correo: correoInput,
            password: passwordInput,
          };

          const optionPut = {
            method: "POST",
            body: JSON.stringify(updateGestor),
            headers: { "content-type": "application/json" },
          };

          fetch("http://localhost:8080/gestor", optionPut)
            .then((response) => response.json())
            .then((passwordUpDated) => {
              console.log({ passwordUpDated });
            });
        });
    });
  }
  if (usuarioGuardadoGestor != null) {
    const deleteButton = document.querySelector("#btn-delete");

    deleteButton.addEventListener("click", (_event) => {
      const optionPut = {
        method: "DELETE",
        headers: { "content-type": "application/json" },
      };
      const miUsuarioGestor = JSON.parse(usuarioGuardadoGestor);
      console.log({ miUsuarioGestor });
      const idGestor = miUsuarioGestor.id;
      fetch("http://localhost:8080/gestor/" + idGestor, optionPut)
        .then((response) => response.json())
        .then((gestorEliminado) => {
          console.log({ gestorEliminado });
          alert("Cliente eliminado");
        });
    });
  }

  if (usuarioGuardadoGestor != null) {
    const button = document.querySelector("#btn-logOut");
    button.addEventListener("click", (_event) => {
      //borrar sessionStorage
      sessionStorage.clear();
      if (alert("Hasta Luego, " + usuario + "!")) {
      } else window.location.reload();
    });
  }
  //!+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  const usuarioGuardadoCliente = sessionStorage.getItem("miUsuarioCliente");

  if (usuarioGuardadoCliente != null) {
    document.getElementById("titulo").innerHTML = "<h1>Cliente</h1>";

    const miUsuarioCliente = JSON.parse(usuarioGuardadoCliente);
    console.log({ miUsuarioCliente });
    const idCliente = miUsuarioCliente.id;
    fetch("http://localhost:8080/cliente/" + idCliente)
      .then((response) => response.json())
      .then((cliente) => {
        console.log({ cliente });

        const contenedorIdGestor = document.getElementById(
          "contenedor-idGestor"
        );
        contenedorIdGestor.innerHTML =
          "<p>Id del gestor: " + cliente.gestor.id + "</p>";

        const contenedorUserName = document.querySelector(
          "#contenedor-username"
        );
        contenedorUserName.innerHTML = cliente.usuario;

        const contenedorEmail = document.getElementById("contenedor-email");
        contenedorEmail.innerHTML = cliente.correo;

        const contenedorSaldo = document.getElementById("contenedor-saldo");
        contenedorSaldo.innerHTML = "<p> Mi saldo: " + cliente.saldo+ "</p>";

        return (usuario = cliente.usuario);
      });
  }

  if (usuarioGuardadoCliente != null) {
    const button = document.querySelector("#btn-change");

    button.addEventListener("click", (_event) => {
      const password = prompt();
      const idGestor = prompt();

      const miUsuarioCliente = JSON.parse(usuarioGuardadoCliente);
      console.log({ miUsuarioCliente });
      const idCliente = miUsuarioCliente.id;

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
            gestor: { id: idGestorInput },
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
  }
  if (usuarioGuardadoCliente != null) {
    const deleteButton = document.querySelector("#btn-delete");

    deleteButton.addEventListener("click", (_event) => {
      const optionPut = {
        method: "DELETE",
        headers: { "content-type": "application/json" },
      };
      const miUsuarioCliente = JSON.parse(usuarioGuardadoCliente);
      console.log({ miUsuarioCliente });
      const idCliente = miUsuarioCliente.id;
      fetch("http://localhost:8080/cliente/" + idCliente, optionPut)
        .then((response) => response.json())
        .then((clienteEliminado) => {
          console.log({ clienteEliminado });
          alert("Cliente eliminado");
        });
    });
  }

  if (usuarioGuardadoCliente != null) {
    const button = document.querySelector("#btn-logOut");
    button.addEventListener("click", (_event) => {
      //borrar sessionStorage
      sessionStorage.clear();
      if (alert("Hasta Luego, " + usuario + "!")) {
      } else window.location.reload();
    });
  }
}

getMiPerfil();
