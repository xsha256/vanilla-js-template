function getMiPerfil() {
  const usuarioGuardado = sessionStorage.getItem("miUsuario");

  if (usuarioGuardado != null) {
    const miUsuario = JSON.parse(usuarioGuardado);
    console.log({ miUsuario });
    const idGestor = miUsuario.id;
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
    escucharClickLogOuts();
  }

  if (usuarioGuardado != null) {
    const button = document.querySelector("#btn-change-gestor");

    button.addEventListener("click", (_event) => {
      const password = prompt();

      const miUsuario = JSON.parse(usuarioGuardado);
      console.log({ miUsuario });
      const idGestor = miUsuario.id;

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
  if (usuarioGuardado != null) {
    const deleteButton = document.querySelector("#btn-delete-gestor");

    deleteButton.addEventListener("click", (_event) => {
      const optionPut = {
        method: "DELETE",
        headers: { "content-type": "application/json" },
      };
      const miUsuario = JSON.parse(usuarioGuardado);
      console.log({ miUsuario });
      const idGestor = miUsuario.id;
      fetch("http://localhost:8080/gestor/" + idGestor, optionPut)
        .then((response) => response.json())
        .then((gestorEliminado) => {
          console.log({ gestorEliminado });
          alert("Cliente eliminado");
        });
    });
  }
}

getMiPerfil();

function escucharClickLogOuts() {
  const button = document.querySelector("#btn-logOut-gestor");
  button.addEventListener("click", (_event) => {
    //borrar sessionStorage
    sessionStorage.clear();
    if (alert("Hasta Luego, " + usuario + "!")) {
    } else window.location.reload();
  });
}
