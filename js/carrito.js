//parte de usuario con local storage
let acceso = JSON.parse(localStorage.getItem("lstUsuarios"));
let usuarioPosicion = localStorage.getItem("usuarioPosicion");
let usuario = acceso[usuarioPosicion];

//parte de carrito
let carro = JSON.parse(localStorage.getItem("carritos"+usuarioPosicion));

let carritoItems = document.querySelector(".carritoItems");

let nombreComprador = document.getElementById("nombreCompra");
let emailComprador = document.getElementById("emailCompra");
let subtotal = document.getElementById("subtotal");

nombreComprador.innerHTML = usuario.usuario;
emailComprador.innerHTML = usuario.correo;

var total = 0;
for(let i = 1; i < carro.length; i++){
    let carritoItem = document.createElement("div");
    carritoItem.className = "producto";
    carritoItem.innerHTML = `<img src="https://${carro[i].imagen}" alt="${carro[i].nombre}"><h3>${carro[i].nombre}</h3><p>Precio: <strong>Bs. ${carro[i].precio}</strong></p>`;

    let productoPrecio = document.createElement("p");
    productoPrecio.className = "precioProducto";
    productoPrecio.innerHTML = `${carro[i].nombre}: <strong>Bs. ${carro[i].precio}</strong>`;
    preciosProductos.appendChild(productoPrecio);

    carritoItems.appendChild(carritoItem);
    total += parseInt(carro[i].precio);
}
console.log(total);
subtotal.innerHTML = "Bs. " + total ;
//boton para finalizar compra
let btnCarrito = document.getElementById("btnCarrito");
 //evento para confirmar la compra
btnCarrito.addEventListener("click", function(){
    window.location.href = "final.html";
});