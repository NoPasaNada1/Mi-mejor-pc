//parte de usuario con local storage
let acceso = JSON.parse(localStorage.getItem("lstUsuarios"));
let usuarioPosicion = localStorage.getItem("usuarioPosicion");
let usuario = acceso[usuarioPosicion];


document.getElementById("usuarioPerfil").innerHTML = usuario.usuario;
document.getElementById("correoPerfil").innerHTML = usuario.correo;
document.getElementById("telefonoPerfil").innerHTML = usuario.telefono;

//menu hamburguersa
let btnMenu = document.getElementById("menuBtnContenedor");
let menu = document.querySelector(".menu");
let swMenu = false;

btnMenu.addEventListener("click", function(){
    btnMenu.style.zIndex = "100";
    if(swMenu){
        menu.style.display = "none";
        swMenu = false;
    }else{
        menu.style.display = "flex";
        swMenu = true;
    }
});

//parte de carrito
let carro = JSON.parse(localStorage.getItem("carritos"+usuarioPosicion));

let carritoItems = document.querySelector(".carritoItems");
let carritoTotal = document.getElementById("carritoTotal");

for(let i = 1; i < carro.length; i++){
    let carritoItem = document.createElement("div");
    carritoItem.className = "producto";
    carritoItem.innerHTML = `<img src="https://${carro[i].imagen}" alt="${carro[i].nombre}"><h3>${carro[i].nombre}</h3><p>Precio: <strong>Bs. ${carro[i].precio}</strong></p>`;
    carritoItems.appendChild(carritoItem);
}

carritoTotal.innerHTML = carro.length - 1;
console.log(carro);

//Desplegar y ocultar menú de redes sociales
let redesSpan = document.getElementById("redesSpan");
let redesActive = document.getElementById("redesActive");
let swRedes = false;

redesSpan.addEventListener("click", function(){
    if(swRedes){
        redesActive.style.display = "none";
        swRedes = false;
    }else{
        redesActive.style.display = "flex";
        swRedes = true;
    }
});

//boton para finalizar compra
let btnCarrito = document.getElementById("btnCarrito");
btnCarrito.addEventListener("click", function(){
    window.location.href = "carritoFinal.html";
});