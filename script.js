const menuBtn = document.getElementById("menu-button")
const menu = document.getElementById("menu")

menuBtn.addEventListener('click',()=>{
    menuBtn.classList.toggle('open')
    menu.classList.toggle('hidden')
})