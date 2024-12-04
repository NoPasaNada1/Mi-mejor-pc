//parte de login con local storage

var acceso = JSON.parse(localStorage.getItem("lstUsuarios"));
let btnEntrar = document.getElementById("btnEntrar");

var distancia = acceso.length

btnEntrar.addEventListener("click", function(){
    let entradaCorreo = document.getElementById("correoLogin").value;
    let entradaContraseña = document.getElementById("contraseñaLogin").value;
    let usuarioEncontrado = false;

    for (let i = 0; i < distancia; i++) {
        const correo = acceso[i].correo;
        const contraseña = acceso[i].contraseña;

        if (entradaCorreo === correo && entradaContraseña === contraseña) {
            window.location.href = "user.html";
            localStorage.setItem("usuarioPosicion", i);
            usuarioEncontrado = true;
            break;
        }
    }
    if (!usuarioEncontrado) {
        alert("Usuario o contraseña incorrectos");
    }
});