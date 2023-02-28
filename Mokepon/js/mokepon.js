function iniciarJuego(){
    let botonMascotaJugador= document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click',seleccionarMascotaJugador) 
}

function seleccionarMascotaJugador(){
alert("mascota seleccionada")
}

window.addEventListener('load',iniciarJuego)