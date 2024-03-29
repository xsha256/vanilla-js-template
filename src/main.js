import registrarVista from "./vistas/registrar/registrarVista.js";
import InicioVista from "./vistas/inicio/InicioVista.js";
import miPerfilVista from "./vistas/miPerfil/miPerfilVista.js";
import NotFoundVista from "./vistas/not-found/NotFoundVista.js";
import loginVista from "./vistas/login/loginVista.js";
import misClientesVista from "./vistas/misClientes/misClientesVista.js";
import misTransferenciasVista from "./vistas/misTransferencias/misTransferenciasVista.js";
import misMensajesVista from "./vistas/misMensajes/misMensajesVista.js";
import hacerTransferenciaVista from "./vistas/hacerTransferencia/hacerTransferenciaVista.js";
import enviarMensajeVista from "./vistas/enviarMensaje/enviarMensajeVista.js";

// para controlar las rutas de la aplicación
const router = async () => {
  // nuestras rutas
  const rutas = [
    // indicamos la ruta y la clase para cargar la vista
    { path: "/not-found", view: NotFoundVista },
    { path: "/", view: InicioVista },
    { path: "/miPerfil", view: miPerfilVista, hasLogin: true },
    { path: "/login", view: loginVista, hasLogin: false },
    { path: "/registrar", view: registrarVista, hasLogin: false },
    { path: "/misClientes", view: misClientesVista },
    { path: "/misTransferencias", view: misTransferenciasVista },
    { path: "/misMensajes", view: misMensajesVista },
    { path: "/hacerTransferencia", view: hacerTransferenciaVista },
    { path: "/enviarMensaje", view: enviarMensajeVista },
  ];

  // la ruta que cargaremos si se intenta navegar a una que no existe
  const rutaPorDefecto = rutas[0];

  // comparamos las rutas con la ruta actual (location.pathname)
  const rutasCoinciden = rutas.map((ruta) => {
    return {
      ruta: ruta,
      coincide: location.pathname === ruta.path,
    };
  });

  // buscamos la primera que coincida
  let rutaActual = rutasCoinciden.find((ruta) => ruta.coincide);

  // si ninguna coincide usamos la ruta por defecto
  if (!rutaActual) {
    console.log("404 Not found, redirigiendo a ruta por defecto...");
    rutaActual = {
      ruta: rutaPorDefecto,
      coincide: true,
    };
  }

  // preparamos la vista actual creando un nuevo objeto de la clase de la vista
  const vistaActual = new rutaActual.ruta.view();

  // obtenemos el contenido de la vista y lo cargamos en el contenedor de página
  // usamos await porque getHTML es una función asíncrona (async)
  await vistaActual.getHTML();

  console.log({ rutaActual });
  if (rutaActual.ruta.hasLogin) {
    const usuarioIdGuardadoGestor = sessionStorage.getItem("miUsuarioGestor");
    const usuarioIdGuardadoCliente = sessionStorage.getItem("miUsuarioCliente");

    if (usuarioIdGuardadoGestor == null && usuarioIdGuardadoCliente == null) {
      alert("No has iniciado session");
      navegarA("/login");
    } else if (usuarioIdGuardadoCliente != null) {
      const menuCliente = document.getElementById("menu_cliente");
      menuCliente.innerHTML =
        '<li><a data-app-link href="/">Inicio</a></li><li><a data-app-link href="/miPerfil">Mi perfil</a></li><li><a data-app-link href="/misTransferencias">Mis transferencias</a></li> <li><a data-app-link href="/hacerTransferencia">Hacer transferencia</a></li>';
    } else if (usuarioIdGuardadoGestor != null) {
      document.getElementById("menu_gestor").innerHTML =
        '<li><a data-app-link href="/">Inicio</a></li><li><a data-app-link href="/miPerfil">Mi perfil</a></li><li><a data-app-link href="/misClientes">Mis clientes</a></li> <li><a data-app-link href="/misMensajes">Mis mensajes</a></li> <li><a data-app-link href="/enviarMensaje">Enviar un mensaje</a></li>  <li><a data-app-link href="/registrar">Registrar</a></li>';
    }

    // if (usuarioIdGuardadoCliente == null) {
    //   alert("No has iniciado session cliente");
    //   navegarA("/login");
    // }
  }
};

// para navegar a una url
const navegarA = (url) => {
  // indica al navegador que se navega a url para poder volver atrás, recargar página...etc
  history.pushState(null, null, url);
  // procesa la ruta a la que navegar
  router();
};

// esperamos a que el HTML del index esté cargado
document.addEventListener("DOMContentLoaded", () => {
  // escuchamos cualquier evento click en la página
  document.body.addEventListener("click", (event) => {
    // si el elemento en el que hacemos click tiene el atributo data-app-link
    if (event.target.matches("[data-app-link]")) {
      // evitamos la navegación por defecto y utilizamos la nuestra
      // así podemos elegir si los enlaces funcionan normalmente o con nuestra navegación
      event.preventDefault();
      navegarA(event.target.href);
    }
  });
  // procesamos la ruta al cargar la aplicación
  router();
});
