
//parte de productos con local storage
let acceso = JSON.parse(localStorage.getItem("lstUsuarios"));
var usuarioPosicion = localStorage.getItem("usuarioPosicion");
let usuario = acceso[usuarioPosicion];

//parte de stock de productos

localStorage.setItem("l1Stock", 32);
localStorage.setItem("l2Stock", 23);
localStorage.setItem("l3Stock", 76);

localStorage.setItem("m1Stock", 54);
localStorage.setItem("m2Stock", 43);
localStorage.setItem("m3Stock", 12);

localStorage.setItem("r1Stock", 74);
localStorage.setItem("r2Stock", 81);
localStorage.setItem("r3Stock", 10);

localStorage.setItem("g1Stock", 12);
localStorage.setItem("g2Stock", 23);
localStorage.setItem("g3Stock", 54);

localStorage.setItem("p1Stock", 65);
localStorage.setItem("p2Stock", 76);   
localStorage.setItem("p3Stock", 6);

let l1Stock = parseInt(localStorage.getItem("l1Stock"));
let l2Stock = parseInt(localStorage.getItem("l2Stock"));
let l3Stock = parseInt(localStorage.getItem("l3Stock"));

let m1Stock = parseInt(localStorage.getItem("m1Stock"));
let m2Stock = parseInt(localStorage.getItem("m2Stock"));
let m3Stock = parseInt(localStorage.getItem("m3Stock"));

let r1Stock = parseInt(localStorage.getItem("r1Stock"));
let r2Stock = parseInt(localStorage.getItem("r2Stock"));
let r3Stock = parseInt(localStorage.getItem("r3Stock"));

let g1Stock = parseInt(localStorage.getItem("g1Stock"));
let g2Stock = parseInt(localStorage.getItem("g2Stock"));
let g3Stock = parseInt(localStorage.getItem("g3Stock"));

let p1Stock = parseInt(localStorage.getItem("p1Stock"));
let p2Stock = parseInt(localStorage.getItem("p2Stock"));
let p3Stock = parseInt(localStorage.getItem("p3Stock"));

document.getElementById("l1Stock").innerHTML = l1Stock;
document.getElementById("l2Stock").innerHTML = l2Stock;
document.getElementById("l3Stock").innerHTML = l3Stock;

document.getElementById("m1Stock").innerHTML = m1Stock;
document.getElementById("m2Stock").innerHTML = m2Stock;
document.getElementById("m3Stock").innerHTML = m3Stock;

document.getElementById("r1Stock").innerHTML = r1Stock;
document.getElementById("r2Stock").innerHTML = r2Stock;
document.getElementById("r3Stock").innerHTML = r3Stock;

document.getElementById("g1Stock").innerHTML = g1Stock;
document.getElementById("g2Stock").innerHTML = g2Stock;
document.getElementById("g3Stock").innerHTML = g3Stock;

document.getElementById("p1Stock").innerHTML = p1Stock;
document.getElementById("p2Stock").innerHTML = p2Stock;   
document.getElementById("p3Stock").innerHTML = p3Stock;

let btnAñadirL1 = document.getElementById("añadirl1");
let btnAñadirL2 = document.getElementById("añadirl2");
let btnAñadirL3 = document.getElementById("añadirl3");

let btnAñadirM1 = document.getElementById("añadirm1");
let btnAñadirM2 = document.getElementById("añadirm2");
let btnAñadirM3 = document.getElementById("añadirm3");

let btnAñadirR1 = document.getElementById("añadirr1");
let btnAñadirR2 = document.getElementById("añadirr2");
let btnAñadirR3 = document.getElementById("añadirr3");

let btnAñadirG1 = document.getElementById("añadirg1");
let btnAñadirG2 = document.getElementById("añadirg2");
let btnAñadirG3 = document.getElementById("añadirg3");

let btnAñadirP1 = document.getElementById("añadirp1");
let btnAñadirP2 = document.getElementById("añadirp2");
let btnAñadirP3 = document.getElementById("añadirp3");


btnAñadirL1.addEventListener("click", function(){
    let l1OBJ = {
        id: document.getElementById("l1"),
        nombre: "Laptop Gaming",
        precio: 999,
        imagen: "m.media-amazon.com/images/I/71IsafDXnKL.jpg"
    }
    productosCarrito.push(l1OBJ);
    l1Stock--;
    document.getElementById("l1Stock").innerHTML = l1Stock;
    localStorage.setItem("carritos"+usuarioPosicion, JSON.stringify(productosCarrito));
});

btnAñadirL2.addEventListener("click", function(){
    let l2OBJ = {
        id: document.getElementById("l2"),
        nombre: "Laptop Ultrabook",
        precio: 799,
        imagen: "s.libertaddigital.com/2023/10/07/portatil-ultrabook-asus-zenbook-pro-duo-14-2.jpg"
    }
    productosCarrito.push(l2OBJ);
    l2Stock--;
    document.getElementById("l2Stock").innerHTML = l2Stock;
    localStorage.setItem("carritos"+usuarioPosicion, JSON.stringify(productosCarrito));
});

btnAñadirL3.addEventListener("click", function(){
    let l3OBJ = {
        id: document.getElementById("l3"),
        nombre: "Laptop 2 en 1",
        precio: 650,
        imagen: "www.hp.com/content/dam/sites/worldwide/personal-computers/consumer/laptops/2-in-1s/pavilion/pavilion-plus-14-convertible-laptop/HP%20Envy%20x360%2013.3_SpaceBlue@2x.png"
    }
    productosCarrito.push(l3OBJ);
    l3Stock--;
    document.getElementById("l3Stock").innerHTML = l3Stock;
    localStorage.setItem("carritos"+usuarioPosicion, JSON.stringify(productosCarrito));
});

btnAñadirM1.addEventListener("click", function(){
    let m1OBJ = {
        id: document.getElementById("m1"),
        nombre: "Memoria USB 64GB",
        precio: 25,
        imagen: "http2.mlstatic.com/D_NQ_NP_965199-MLC50775285889_072022-O.webp"
    }
    productosCarrito.push(m1OBJ);
    m1Stock--;
    document.getElementById("m1Stock").innerHTML = m1Stock;
    localStorage.setItem("carritos"+usuarioPosicion, JSON.stringify(productosCarrito));
});

btnAñadirM2.addEventListener("click", function(){
    let m2OBJ = {
        id: document.getElementById("m2"),
        nombre: "Memoria USB 128GB",
        precio: 35,
        imagen: "www.kingstonstore.com.br/cdn/shop/products/DTMAX1T4_1024x.jpg?v=1630528287"
    }
    productosCarrito.push(m2OBJ);
    m2Stock--;
    document.getElementById("m2Stock").innerHTML = m2Stock;
    localStorage.setItem("carritos"+usuarioPosicion, JSON.stringify(productosCarrito));
});

btnAñadirM3.addEventListener("click", function(){
    let m3OBJ = {
        id: document.getElementById("m3"),
        nombre: "SSD 1TB",
        precio: 120,
        imagen: "m.media-amazon.com/images/I/71QygIvKzfL.jpg"
    }
    productosCarrito.push(m3OBJ);
    m3Stock--;
    document.getElementById("m3Stock").innerHTML = m3Stock;
    localStorage.setItem("carritos"+usuarioPosicion, JSON.stringify(productosCarrito));
});

btnAñadirR1.addEventListener("click", function(){
    let r1OBJ = {
        id: document.getElementById("r1"),
        nombre: "RAM 8GB DDR4",
        precio: 45,
        imagen: "elgeniox.com/cdn/shop/files/memoria-ram-corsair-vengeance-lpx-8gb-3200-mhz20240729T153616474.jpg?v=1722267382&width=750"
    }
    productosCarrito.push(r1OBJ);
    r1Stock--;
    document.getElementById("r1Stock").innerHTML = r1Stock;
    localStorage.setItem("carritos"+usuarioPosicion, JSON.stringify(productosCarrito));
});

btnAñadirR2.addEventListener("click", function(){
    let r2OBJ = {
        id: document.getElementById("r2"),
        nombre: "RAM 16GB DDR4",
        precio: 85,
        imagen: "assets.corsair.com/image/upload/akamai/pdp/vengeance-rgb-pro/Content/Vengeance_RGB_Pro_PDP_Black_04.png"
    }
    productosCarrito.push(r2OBJ);
    r2Stock--;
    document.getElementById("r2Stock").innerHTML = r2Stock;
    localStorage.setItem("carritos"+usuarioPosicion, JSON.stringify(productosCarrito));
});

btnAñadirR3.addEventListener("click", function(){
    let r3OBJ = {
        id: document.getElementById("r3"),
        nombre: "RAM 32GB DDR4",
        precio: 150,
        imagen: "i.blogs.es/fa82ae/corsair-vengeance/450_1000.jpg"
    }
    productosCarrito.push(r3OBJ);
    r3Stock--;
    document.getElementById("r3Stock").innerHTML = r3Stock;
    localStorage.setItem("carritos"+usuarioPosicion, JSON.stringify(productosCarrito));
});

btnAñadirG1.addEventListener("click", function(){
    let g1OBJ = {
        id: document.getElementById("g1"),
        nombre: "NVIDIA GTX 1660",
        precio: 350,
        imagen: "asset.msi.com/resize/image/global/product/product_8_20190314112204_5c89c8dc6db62.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png"
    }
    productosCarrito.push(g1OBJ);
    g1Stock--;
    document.getElementById("g1Stock").innerHTML = g1Stock;
    localStorage.setItem("carritos"+usuarioPosicion, JSON.stringify(productosCarrito));
});

btnAñadirG2.addEventListener("click", function(){
    let g2OBJ = {
        id: document.getElementById("g2"),
        nombre: "NVIDIA RTX 3060",
        precio: 600,
        imagen: "matecsbol.com/cdn/shop/files/81DZAnm7akL._AC_SL1500_1200x.jpg?v=1718296601"
    }
    productosCarrito.push(g2OBJ);
    g2Stock--;
    document.getElementById("g2Stock").innerHTML = g2Stock;
    localStorage.setItem("carritos"+usuarioPosicion, JSON.stringify(productosCarrito));
});

btnAñadirG3.addEventListener("click", function(){
    let g3OBJ = {
        id: document.getElementById("g3"),
        nombre: "AMD Radeon RX 5700",
        precio: 500,
        imagen: "www.asus.com/media/global/products/utcn39mqdlxmh2r1/P_setting_xxx_0_90_end_500.png"
    }
    productosCarrito.push(g3OBJ);
    g3Stock--;
    document.getElementById("g3Stock").innerHTML = g3Stock;
    localStorage.setItem("carritos"+usuarioPosicion, JSON.stringify(productosCarrito));
    
});

btnAñadirP1.addEventListener("click", function(){
    let p1OBJ = {
        id: document.getElementById("p1"),
        nombre: "Intel Core i5 11600K",
        precio: 250,
        imagen: "m.media-amazon.com/images/I/71HaUo5Gw-L._AC_UF350,350_QL80_.jpg"
    }
    productosCarrito.push(p1OBJ);
    p1Stock--;
    document.getElementById("p1Stock").innerHTML = p1Stock;
    localStorage.setItem("carritos"+usuarioPosicion, JSON.stringify(productosCarrito));
});

btnAñadirP2.addEventListener("click", function(){
    let p2OBJ = {
        id: document.getElementById("p2"),
        nombre: "AMD Ryzen 5 5600X",
        precio: 270,
        imagen: "bgamer.pro/wp-content/uploads/2021/01/1111.jpg"
    }
    productosCarrito.push(p2OBJ);
    p2Stock--;
    document.getElementById("p2Stock").innerHTML = p2Stock;
    localStorage.setItem("carritos"+usuarioPosicion, JSON.stringify(productosCarrito));
});

btnAñadirP3.addEventListener("click", function(){
    let p3OBJ = {
        id: document.getElementById("p3"),
        nombre: "Intel Core i9 11900K",
        precio: 500,
        imagen: "m.media-amazon.com/images/I/71HaUo5Gw-L._AC_UF350,350_QL80_.jpg"
    }
    productosCarrito.push(p3OBJ);
    p3Stock--;
    document.getElementById("p3Stock").innerHTML = p3Stock;
    localStorage.setItem("carritos"+usuarioPosicion, JSON.stringify(productosCarrito));
});
//Todos estos botones añaden productos a la siguiente lista y descuentan uno cada vez que se pulsan

let productosCarrito = [];
let productoDefault = {
    id: "default",
    nombre: "default",
}
productosCarrito[0] = productoDefault;
localStorage.setItem("carritos"+usuarioPosicion, JSON.stringify(productosCarrito));
console.log(JSON.parse(localStorage.getItem("carritos"+usuarioPosicion)));
//Seccion encargada de mostrar y ocultar el menu de filtros
let btnFiltro = document.getElementById("menuFiltros");
let filtro = document.querySelector("aside");
btnFiltro.style.zIndex = "200";
let filtroSW = false;


if(window.width <= 720){
    btnFiltro.style.display = "none !important";
    filtro.style.display = "none";
}else{
    filtro.style.display = "block !important";
    btnFiltro.style.display = "block !important";
}

btnFiltro.addEventListener("click", function(){
    if(filtroSW){
        filtro.style.display = "none";
        filtroSW = false;
    }else{
        filtro.style.display = "block";
        filtroSW = true;
    }
});




//Boton para menu hamburguesa
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
