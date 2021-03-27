feather.replace()

const menuBtn = document.getElementById('menu-button')
const menuOverlay = document.getElementById('menu-overlay')
let toggle = false

menuBtn.addEventListener('click', () =>{   
   toggle = !toggle
    
    toggle? yesMenu() : noMenu()
})

const yesMenu = () => {
    menuOverlay.style.visibility = "visible"
    menuOverlay.style.opacity = 1
    const icon = document.getElementById('menu-icon')
    icon.setAttribute('data-feather', 'x') 
    feather.replace()
}

const noMenu = () => {
    menuOverlay.style.visibility = "hidden"
    menuOverlay.style.opacity= 0
    menuOverlay.style.transition = "visibility 300ms linear 300ms, opacity 300ms"
    const icon = document.getElementById('menu-icon')
    icon.setAttribute('data-feather', 'menu')
    feather.replace()
    
}
