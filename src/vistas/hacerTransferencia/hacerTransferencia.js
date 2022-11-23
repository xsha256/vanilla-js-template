function escucharClickButton() {
  const usuarioGuardadoCliente = sessionStorage.getItem("miUsuarioCliente");
  const miUsuarioCliente = JSON.parse(usuarioGuardadoCliente);
  console.log({ miUsuarioCliente });
  const idCliente = miUsuarioCliente.id;
  console.log({ idCliente });

  //obtener el button
  const button = document.querySelector("#btn-send");

  let idOrdenanteInput = idCliente;
  let idBeneficiarioInput = document.querySelector("[name = 'idBeneficiario']");
  let conceptoInput = document.querySelector("[name = 'concepto']");
  let importetoInput = document.querySelector("[name = 'importe']");

  //escuchamos el button
  button.addEventListener("click", (_event) => {
    if (
      idOrdenanteInput != "" &&
      idBeneficiarioInput.value != "" &&
      conceptoInput.value != "" &&
      importetoInput.value != ""
    ) {
      console.log(idOrdenanteInput);
      console.log(idBeneficiarioInput.value);
      console.log(conceptoInput.value);
      console.log(importetoInput.value);

      //gestor que guardamos con .value obtenemos el valor de un input
      const newTransferencia = {
        ordenante: { id: idOrdenanteInput },
        beneficiario: { id: idBeneficiarioInput.value },
        concepto: conceptoInput.value,
        importe: importetoInput.value,
      };

      //para pasarlo como parametro al fetch
      //indicamos el metodo de peticion
      const optionPost = {
        method: "POST",
        body: JSON.stringify(newTransferencia),
        headers: { "content-type": "application/json" },
      };

      fetch("http://localhost:8080/transferencia", optionPost)
        .then((response) => response.json())
        .then((transferenciaSent) => {
          console.log({ transferenciaSent });
        });
    } else {
      alert("Has de rellenar todos los campos");
    }
  });
}
escucharClickButton();
