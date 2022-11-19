function escucharClickButton() {
  //obtener el button
  const button = document.querySelector("#btn-guardar-gestor");

  //escuchamos el button
  button.addEventListener("click", (_event) => {
    console.log("click button");

    //obtener los inputos
    let usuarioInput = document.querySelector("[name = 'usuario']");
    let passwordInput = document.querySelector("[name = 'pass']");
    let correoInput = document.querySelector("[name = 'correo']");

    //gestor que guardamos con .value obtenemos el valor de un input
    const newGetor = {
      usuario: usuarioInput.value,
      password: passwordInput.value,
      correo: correoInput.value,
    };

    //para pasarlo como parametro al fetch
    //indicamos el metodo de peticion
    const optionPost = {
      method: "POST",
      body: JSON.stringify(newGetor),
      headers: { "content-type": "application/json" },
    };

    fetch("http://localhost:8080/gestor", optionPost)
      .then((response) => response.json())
      .then((gestorSaved) => {
        console.log({ gestorSaved });

        //vaciamos los inputs con .reset()
        usuarioInput = "";
        passwordInput = "";
        correoInput = "";
      });
  });

  const buttonVaciar = document.querySelector("#btn-vaciar-gestor");

  buttonVaciar.addEventListener("click", (_event) => {
    document.getElementsByName("usuario")[0].value = "";
    document.getElementsByName("pass")[0].value = "";
    document.getElementsByName("correo")[0].value = "";
  });
}
escucharClickButton();
