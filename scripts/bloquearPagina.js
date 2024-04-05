const userLogged = localStorage.getItem("currentUser");

if (!userLogged) {
  window.location.href = "/Login.html";
}
