// Obtener el formulario de registro por su ID
const formRegister = document.getElementById("register-form");

// Agregar un event listener para manejar el envío del formulario
formRegister.addEventListener("submit", (event) => {
  // Prevenir el comportamiento predeterminado de enviar el formulario
  event.preventDefault();

  // Obtener los datos del formulario como un objeto FormData
  const formData = new FormData(formRegister);

  // Convertir los datos del formulario de FormData a un objeto JavaScript y excluir el campo "usuario"
  const { usuario, ...rest } = Object.fromEntries(formData);

  // Verificar si el usuario ya está registrado en el almacenamiento local
  const usuarioExiste = localStorage.getItem(usuario);
  if (usuarioExiste) {
    // Mostrar una alerta si el usuario ya existe y detener el proceso de registro
    alert("¡Usuario ya está registrado!");
    return;
  }

  // Verificar si las contraseñas coinciden
  if (rest["contrasena"] !== rest["confirmar-contrasena"]) {
    // Mostrar una alerta si las contraseñas no coinciden y detener el proceso de registro
    alert("Las contraseñas no coinciden");
    return;
  }

  // Almacenar los datos del nuevo usuario en el almacenamiento local con la clave igual al nombre de usuario
  localStorage.setItem(usuario, JSON.stringify(rest));

  // Mostrar una alerta de registro exitoso
  alert("¡Registrado con éxito!");
});