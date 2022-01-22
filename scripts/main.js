let nav = document.querySelector("nav");
let abrir = document.querySelector("#abrirMenu");
let fechar = document.querySelector("#fecharMenu");
let pedido = document.querySelector(".pedido");

let nav_list = document.querySelectorAll("nav a");

for(const link of nav_list) {
    link.addEventListener("click", fecharMenu);
}

abrir.addEventListener("click", abertura);
fechar.addEventListener("click", fecharMenu);

function abertura() {
    nav.classList.add("menu_aberto");
    abrir.style.display = "none";
    fechar.style.display = "block";
    pedido.classList.remove("pedido");
    pedido.classList.add("pedidoMenu");
}

function fecharMenu() {
    abrir.style.display = "block";
    fechar.style.display = "none";
    nav.classList.remove("menu_aberto");
};