// Obtener referencias a los elementos de entrada en el formulario por su ID
const nombreInput = document.getElementById("nombre");
const usuarioInput = document.getElementById("usuario");
const correoInput = document.getElementById("correo");
const contrasenaInput = document.getElementById("contrasena");

// Obtener los datos del usuario actual almacenados en el localStorage y parsearlos de JSON a objeto JavaScript
const currentUser = JSON.parse(localStorage.getItem("currentUser"));

// Asignar los valores correspondientes del usuario actual a los campos de entrada del formulario
nombreInput.value = currentUser.nombre;
usuarioInput.value = currentUser.usuario;
correoInput.value = currentUser.correo;
contrasenaInput.value = currentUser.contrasena;