const nombreInput = document.getElementById("nombre");
const usuarioInput = document.getElementById("usuario");
const correoInput = document.getElementById("correo");
const contrasenaInput = document.getElementById("contrasena");

const currentUser = JSON.parse(localStorage.getItem("currentUser"));

nombreInput.value = currentUser.nombre;
usuarioInput.value = currentUser.usuario;
correoInput.value = currentUser.correo;
contrasenaInput.value = currentUser.contrasena;
