const formLogin = document.getElementById("login-form");

formLogin.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(formLogin);
  const { usuario, ...rest } = Object.fromEntries(formData);
  const usuarioFound = localStorage.getItem(usuario);

  if (!usuarioFound) {
    alert("Usuario no encontrado");
    return;
  }

  const usuarioData = JSON.parse(usuarioFound);

  if (usuarioData.contrasena !== rest.contrasena) {
    alert("Contraseña incorrecta");
    return;
  }

  const currentUser = { ...usuarioData, usuario };

  localStorage.setItem("currentUser", JSON.stringify(currentUser));

  window.location.href = "/index.html";
});
