    function escucharClickButton() {


        const usuarioGuardadoGestor = sessionStorage.getItem("miUsuarioGestor");
        const miUsuarioGestor = JSON.parse(usuarioGuardadoGestor);
      console.log({ miUsuarioGestor });
      const idGestor = miUsuarioGestor.id;
      console.log({ idGestor });

           //obtener el button
        const button = document.querySelector("#btn-send");

       let idOrigenInput = idGestor;
       let idDestinoInput = document.querySelector("[name = 'idDestino']");
       let mensajeInput = document.querySelector("[name = 'mensaje']");
    
      //escuchamos el button
      button.addEventListener("click", (_event) => {
        if (
            idOrigenInput != "" &&
            idDestinoInput.value != "" &&
            mensajeInput.value != ""
        ) {
      
          console.log(idOrigenInput);
          console.log(idDestinoInput.value);
          console.log(mensajeInput.value);


          //gestor que guardamos con .value obtenemos el valor de un input
          const newMensaje = {
            origen: { id: idOrigenInput },
            destino: { id: idDestinoInput.value },
            texto: mensajeInput.value,
          };

          //para pasarlo como parametro al fetch
          //indicamos el metodo de peticion
          const optionPost = {
            method: "POST",
            body: JSON.stringify(newMensaje),
            headers: { "content-type": "application/json" },
          };

          fetch("http://localhost:8080/mensaje", optionPost)
            .then((response) => response.json())
            .then((mensajeSent) => {
              console.log({ mensajeSent });
            });
           
            // const buttonClear = document.querySelector("#btn-clear");
            // buttonClear.addEventListener("click", (_event) => {
            //   console.log("vaciar clicked");
            
            //   idDestinoInput.value = "";
            //   mensajeInput.value = "";
        
            // });

        } else {
          alert("Has de rellenar todos los campos");
        }
      });
    }
    escucharClickButton();
    