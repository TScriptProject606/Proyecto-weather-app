const nav = document.getElementById("nav");

const userLogged = localStorage.getItem("currentUser");

if (userLogged) {
  nav.innerHTML = `
    <ul>
      <li>
        <a href="Home.html">Inicio</a>
      </li>
      <li>
        <a href="index.html">Mi Clima</a>
      </li>
      <li>
        <a href="perfil.html">Mi Perfil</a>
      </li>
      <li>
        <a id="cerrar-sesion" href="#">Cerrar Sesión</a>
      </li>
      <li>
        <a href="contact.html">Contacto</a>
      </li>
    </ul>
  `;
}

const cerrarSesionButton = document.getElementById("cerrar-sesion");
const cerrarModal = document.getElementById("cerrar-modal");
const cerrarSesionConfirmacion = document.getElementById(
  "cerrar-sesion__confirmacion"
);
const dialog = document.querySelector("dialog");

cerrarSesionButton.addEventListener("click", () => {
  dialog.showModal();
});

cerrarSesionConfirmacion.addEventListener("click", () => {
  localStorage.removeItem("currentUser");
  window.location.href = "/login.html";
});

cerrarModal.addEventListener("click", () => {
  dialog.close();
});
