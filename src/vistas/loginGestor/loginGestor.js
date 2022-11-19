function ClickButtonLoginGestor() {
  const button = document.querySelector("#btn-logIn-gestor");



  button.addEventListener("click", (_event) => {
    let correoInput = document.querySelector("[name = 'correo']");
    let passwordInput = document.querySelector("[name = 'password']");
  
    if(correoInput.value != "" && passwordInput.value != "" ){
    let correoInput = document.querySelector("[name = 'correo']");
    let passwordInput = document.querySelector("[name = 'password']");

    const query = `?correo=${correoInput.value}&password=${passwordInput.value}`;

    fetch("http://localhost:8080/gestor/loginGestor" + query)
      .then((response) => response.json())
      .then((gestor) => {
        console.log({ gestor });

        //Para guardar el usuario hasta que cierres el navegador
        sessionStorage.setItem("miUsuario", JSON.stringify(gestor));

        //Para guardar el usuario hasta que borres el cockies
        // localStorage.setItem("miUsuario", JSON.stringify(gestor));

        usuario = gestor.usuario;
        alert("Bienvenido, " + usuario + "!");

        document.getElementsByName("password")[0].value = "";
        document.getElementsByName("correo")[0].value = "";

        return usuario;
      });
    }else {
      alert("Pon un email y contraseña para poder acceder")
    }
  });
   
  //!Cerrar sesion
  const buttonVaciar = document.querySelector("#btn-logOut-gestor");

  buttonVaciar.addEventListener("click", (_event) => {
    sessionStorage.clear();
    document.getElementsByName("password")[0].value = "";
    document.getElementsByName("correo")[0].value = "";
    alert("Hasta Luego, " + usuario + "!");
  });
}

ClickButtonLoginGestor();
