// Obtener el formulario de inicio de sesión por su ID
const formLogin = document.getElementById("login-form");

// Agregar un event listener para el evento "submit" del formulario
formLogin.addEventListener("submit", (event) => {
  // Prevenir el comportamiento predeterminado del formulario (recargar la página)
  event.preventDefault();
  
  // Crear un objeto FormData para recopilar los datos del formulario
  const formData = new FormData(formLogin);
  
  // Convertir los datos del formulario en un objeto JavaScript y extraer el campo 'usuario'
  const { usuario, ...rest } = Object.fromEntries(formData);
  
  // Obtener los datos del usuario almacenados en el almacenamiento local (localStorage) utilizando su nombre de usuario
  const usuarioFound = localStorage.getItem(usuario);

  // Verificar si el usuario no fue encontrado en el almacenamiento local
  if (!usuarioFound) {
    // Mostrar un mensaje de alerta informando que el usuario no fue encontrado
    alert("Usuario no encontrado");
    // Finalizar la ejecución de la función
    return;
  }

  // Convertir los datos del usuario encontrado de formato de cadena JSON a un objeto JavaScript
  const usuarioData = JSON.parse(usuarioFound);

  // Verificar si la contraseña ingresada no coincide con la contraseña almacenada
  if (usuarioData.contrasena !== rest.contrasena) {
    // Mostrar un mensaje de alerta informando que la contraseña es incorrecta
    alert("Contraseña incorrecta");
    // Finalizar la ejecución de la función
    return;
  }

  // Crear un objeto 'currentUser' que incluya los datos del usuario y su nombre de usuario
  const currentUser = { ...usuarioData, usuario };

  // Almacenar el objeto 'currentUser' en el almacenamiento local como una cadena JSON
  localStorage.setItem("currentUser", JSON.stringify(currentUser));

  // Redireccionar al usuario a la página de inicio ("/index.html")
  window.location.href = "./index.html";
});