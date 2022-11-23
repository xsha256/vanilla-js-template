
    const reaload = document.querySelector("#btn-reload");
    reaload.addEventListener("click", (_event) => {
          window.location.reload();

    });

  const entrarbutton = document.querySelector("#btn-entrar");
  entrarbutton.addEventListener("click", (_event) => {
  if (document.getElementById("opcion").value == "opcionGestor") {


    function escucharClickButton1() {
      
          //obtener los inputos
      document.getElementById("usuario").innerHTML = '<input  type="text" name="usuario" placeholder="Usuario..." ><br>' ;

      document.getElementById("password").innerHTML =
        '<input type="password" name="password" placeholder="Password..." ><br>';

      document.getElementById("correo").innerHTML =
        '<input type="email" name="correo" placeholder="Correo..." ><br>';

        document.getElementById("save").innerHTML = '<button id="btn-guardar">Save</button><button id="btn-vaciar">vaciar</button>';

           //obtener el button
           const button = document.querySelector("#btn-guardar");

       let usuarioInput = document.querySelector("[name = 'usuario']");
       let passwordInput = document.querySelector("[name = 'password']");
       let correoInput = document.querySelector("[name = 'correo']");
    
      //escuchamos el button
      button.addEventListener("click", (_event) => {
        if (
          correoInput.value != "" &&
          passwordInput.value != "" &&
          usuarioInput.value != ""
        ) {
      
          console.log(usuarioInput.value);
          console.log(passwordInput.value);
          console.log(correoInput.value);
         


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
            });
          const buttonVaciar = document.querySelector("#btn-vaciar");

          buttonVaciar.addEventListener("click", (_event) => {
            document.getElementsById("usuario") = "";
            document.getElementsById("password")[0].value = "";
            document.getElementsById("correo")[0].value = "";
    
          });
        } else {
          alert("Has de rellenar todos los campos");
        }
      });
    }
    escucharClickButton1();


  } else if (document.getElementById("opcion").value == "opcionCliente") {
    // window.location.reload();

    function escucharClickButton2() {
      //obtener el button

       //obtener los inputos
       document.getElementById("id_gestor").innerHTML =
       '<input type="number" name="Id_Gestor" placeholder="Id gestor..." required><br>';
 
     document.getElementById("usuario").innerHTML =
       '<input type="text" name="usuario" placeholder="Usuario..." ><br>';
 
     document.getElementById("password").innerHTML =
       '<input type="password" name="password" placeholder="Password..." ><br>';
 
     document.getElementById("correo").innerHTML =
       '<input type="email" name="correo" placeholder="Correo..." ><br>';

     document.getElementById("saldo").innerHTML =
       '<input type="number" name="saldo" placeholder="Saldo..." ><br>';

       document.getElementById("save").innerHTML = '<button id="btn-guardar">Save</button><button id="btn-vaciar" onClick="vaciar()">vaciar</button>';
 

       const button = document.querySelector("#btn-guardar");

      let idGestorInput = document.querySelector("[name = 'Id_Gestor']");
      let usuarioInput = document.querySelector("[name = 'usuario']");
      let passwordInput = document.querySelector("[name = 'password']");
      let correoInput = document.querySelector("[name = 'correo']");
      let saldoInput = document.querySelector("[name = 'saldo']");
      

      //escuchamos el button
      button.addEventListener("click", (_event) => {
        console.log("click button");
        if (
          idGestorInput != "" &&
          correoInput.value != "" &&
          passwordInput.value != "" &&
          usuarioInput.value != "" &&
          saldoInput.value != "" 
         
        ) {
          console.log(idGestorInput.value);
          console.log(usuarioInput.value);
          console.log(passwordInput.value);
          console.log(correoInput.value);
          console.log(saldoInput.value);
         
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

            function vaciar(){
              // const buttonVaciar = document.getElementById("btn-vaciar");

              // buttonVaciar.addEventListener("click", (_event) => {
                document.getElementsByName("Id_Gestor")[0].value = "";
                document.getElementsByName("usuario").value = "";
                document.getElementsByName("password").value = "";
                document.getElementsByName("correo").value = "";
                document.getElementsByName("saldo").value = "";
                console.log({ clienteVaciar });
                 idGestorInput.value = "";
                 usuarioInput.value = "";
                passwordInput.value = "";
                correoInput = "";
                saldoInput = "";
              // });
            }
          
        } else {
          alert("Has de rellenar todos los campos cliente");
        }
      });
    }
    escucharClickButton2();
}
});
