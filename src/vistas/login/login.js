
function ClickButtonLogin() {
  const button = document.querySelector("#btn-logIn");

  button.addEventListener("click", (_event) => {
    let correoInput = document.querySelector("[name = 'correo']");
    let passwordInput = document.querySelector("[name = 'password']");

    if (correoInput.value != "" && passwordInput.value != "") {
      if (document.getElementById("opcion").value == "opcionGestor") {
        let correoInput = document.querySelector("[name = 'correo']");
        let passwordInput = document.querySelector("[name = 'password']");

        const query = `?correo=${correoInput.value}&password=${passwordInput.value}`;
        console.log("resultado querY:  "+ query);

        
        fetch("http://localhost:8080/gestor/loginGestor" + query)
          .then((response) => response.json())
          .then((gestor) => {
            console.log({ gestor });
            if (gestor != null){
            //Para guardar el usuario hasta que cierres el navegador
            sessionStorage.setItem("miUsuarioGestor", JSON.stringify(gestor));
            location.replace("/miPerfil");

            //Para guardar el usuario hasta que borres el cockies
            // localStorage.setItem("miUsuarioGestor", JSON.stringify(gestor));

            let usuario = gestor.usuario;
            alert("Bienvenido, " + usuario + "!");

            document.getElementsByName("password")[0].value = "";
            document.getElementsByName("correo")[0].value = "";

            return usuario;
          } else {
            alert("Gestor no existe en base de datos")
          } 
          });
       
      
        //!Cerrar sesion
        const buttonLogOut = document.querySelector("#btn-logOut");

        buttonLogOut.addEventListener("click", (_event) => {
          sessionStorage.clear();
          alert("Hasta Luego, " + usuario + "!");
          location.replace("/login");
        });
      } else if (document.getElementById("opcion").value == "opcionCliente") {
        let correoInput = document.querySelector("[name = 'correo']");
        let passwordInput = document.querySelector("[name = 'password']");

        const query = `?correo=${correoInput.value}&password=${passwordInput.value}`;

        fetch("http://localhost:8080/cliente/loginCliente" + query)
          .then((response) => response.json())
          .then((cliente) => {
            console.log({ cliente });
            if (cliente != null){
            //Para guardar el usuario hasta que cierres el navegador
            sessionStorage.setItem("miUsuarioCliente", JSON.stringify(cliente));
            location.replace("/miPerfil");

            //Para guardar el usuario hasta que borres el cockies
            // localStorage.setItem("miUsuario", JSON.stringify(gestor));

            let usuario = cliente.usuario;
            alert("Bienvenido, " + usuario + "!");

            document.getElementsByName("password")[0].value = "";
            document.getElementsByName("correo")[0].value = "";

            return usuario;
          } else {
            alert("Cliente no existe en base de datos")
          } 
          });
        //!Cerrar sesion
        const buttonLogOut = document.querySelector("#btn-logOut");

        buttonLogOut.addEventListener("click", (_event) => {
          alert("Hasta Luego, " + usuario + "!");
          location.replace("/login");
          sessionStorage.clear();
        });
      }
    } else {
      alert("Pon un email y contraseña para poder acceder");
    }
  });
}

ClickButtonLogin();
