function escucharClickButton() {
  //obtener el button
  const button = document.querySelector("#btn-guardar-cliente");

  //escuchamos el button
  button.addEventListener("click", (_event) => {
    console.log("click button");

    //obtener los inputos
    let idGestorInput = document.querySelector("[name = 'Id_Gestor']");
    let usuarioInput = document.querySelector("[name = 'usuario']");
    let passwordInput = document.querySelector("[name = 'pass']");
    let correoInput = document.querySelector("[name = 'correo']");
    let saldoInput = document.querySelector("[name = 'saldo']");

    //cliente que guardamos con .value obtenemos el valor de un input
    const newCliente = {
      gestor: { id: idGestorInput.value },
      usuario: usuarioInput.value,
      password: passwordInput.value,
      correo: correoInput.value,
      saldo: saldoInput.value,
    };

    //para pasarlo como parametro al fetch
    //indicamos el metodo de peticion
    const optionPost = {
      method: "POST",
      body: JSON.stringify(newCliente),
      headers: { "content-type": "application/json" },
    };

    fetch("http://localhost:8080/cliente", optionPost)
      .then((response) => response.json())
      .then((clienteSaved) => {
        console.log({ clienteSaved });

        //vaciamos los inputs con .reset()
        idGestorInput = "";
        usuarioInput = "";
        passwordInput = "";
        correoInput = "";
        saldoInput = "";
      });
  });

  const buttonVaciar = document.querySelector("#btn-vaciar-cliente");

  buttonVaciar.addEventListener("click", (_event) => {
    document.getElementsByName("Id_Gestor")[0].value = "";
    document.getElementsByName("usuario")[0].value = "";
    document.getElementsByName("pass")[0].value = "";
    document.getElementsByName("correo")[0].value = "";
    document.getElementsByName("saldo")[0].value = "";
  });
}
escucharClickButton();
