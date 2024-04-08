// Obtener el elemento del menú de navegación por su ID
const navItems = document.getElementById("nav-items");

// Verificar si hay un usuario registrado en el almacenamiento local
const userLogged = localStorage.getItem("currentUser");

// Si hay un usuario registrado, mostrar el menú de navegación
if (userLogged) {
  navItems.innerHTML = `
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
  `;
}

// Obtener referencias a los elementos relacionados con el cierre de sesión
const cerrarSesionButton = document.getElementById("cerrar-sesion");
const cerrarModal = document.getElementById("cerrar-modal");
const cerrarSesionConfirmacion = document.getElementById("cerrar-sesion__confirmacion");
const dialog = document.querySelector("dialog");

// Agregar un event listener para mostrar el modal de confirmación al hacer clic en el botón de cerrar sesión
cerrarSesionButton.addEventListener("click", () => {
  dialog.showModal();
});

// Agregar un event listener para cerrar la sesión y redirigir al usuario al hacer clic en el botón de confirmación en el modal
cerrarSesionConfirmacion.addEventListener("click", () => {
  // Eliminar los datos del usuario del almacenamiento local
  localStorage.removeItem("currentUser");
  // Redirigir al usuario a la página de inicio de sesión
  window.location.href = "./Login.html";
});

// Agregar un event listener para cerrar el modal al hacer clic en el botón de cancelar
cerrarModal.addEventListener("click", () => {
  dialog.close();
});