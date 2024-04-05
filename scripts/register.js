const formRegister = document.getElementById("register-form");

formRegister.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(formRegister);
  const { usuario, ...rest } = Object.fromEntries(formData);

  const usuarioExiste = localStorage.getItem(usuario);
  if (usuarioExiste) {
    alert("Usuário ya esta registrado!");
    return;
  }

  localStorage.setItem(usuario, JSON.stringify(rest));
});
