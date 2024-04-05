const formLogin = document.getElementById("login-form");
const formRegister = document.getElementById("register-form");

formRegister.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(formRegister);
    console.log(data.values((elem) => console.log(elem)));
});

console.log("hola");
console.log(formRegister);

function mostrarEmail(){
    var email=document.getElementById('email').value;
    document.getElementById('emailLabel').innerText='Se ha enviado un correo de confirmación a: '+email;
}

