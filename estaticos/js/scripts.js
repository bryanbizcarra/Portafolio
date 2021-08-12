botonMenu = document.getElementById('boton-menu')
menu = document.getElementById('menu')
listaMenu = document.querySelectorAll('#opciones')
botonMenu.addEventListener('click', ()=>menu.classList.toggle('menu'))
for (let i = 0; i < listaMenu.length; i++) {
    listaMenu[i].addEventListener('click',()=>menu.classList.toggle('menu'))
}