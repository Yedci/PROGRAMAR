        //FUNCION PARA CREAR NUMERO ALEATORIO
        function aleatorio(min, max){
            return Math.floor(Math.random() * (max-min +1)+ min)
        }
        //FUNCION PARA LA ELECCION PIEDRA PAPEL O TIJERA
        function eleccion(jugada){
        let resultado= ""
            if (jugada==1) {
                resultado="piedra"
            }
            else if(jugada==2){
                resultado="papel"
            }
            else if(jugada==3){
                resultado="Tijeras"
            }
            else{
                resultado="Seleccion no valida para el juego"
    } 
        return resultado
}

        // 1: piedra, 2: papel, 3: tijeras
        let jugador=0
        let pc= 0
        let triunfos=0
        let perdidas=0

        while(triunfos < 3 && perdidas < 3){
            pc = aleatorio(1,3)
            jugador = prompt("Elige 1 para piedra, 2 para papel, 3 para tijeras")  
            //alert ("mensaje de eleccion para iniciar
            alert("PC elige: " + eleccion(pc))
            alert("Tú eliges: " + eleccion(jugador))
            
            // llego la hora del juego(combate)

            if (pc==jugador){
                alert("EMPATE")
                } else if(jugador== 1 && pc ==3){
                    alert("ganaste")
                    triunfos=triunfos + 1
                } else if(jugador== 2 && pc ==1){
                    alert("ganaste")
                    triunfos=triunfos + 1
                }else if(jugador== 3 && pc ==2){
                    alert("ganaste")
                    triunfos=triunfos + 1    
                }else {
                    alert("PERDISTE")
                    perdidas=perdidas +1
                }
        }
        alert("Ganaste " + triunfos + " veces. Perdiste " + perdidas + " veces.")