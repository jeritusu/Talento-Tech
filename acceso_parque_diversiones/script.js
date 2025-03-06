function determinarAcceso(){
    let = edad = document.getElementById('edad').value;
    let = adulto = document.getElementById('adulto').value;   
    let = vip = document.getElementById('tieneVIP').value;
      

    if (vip == true) {
        alert("Acceso permitido: Pase VIP.");
    } else if (edad >= 18) {
        alert("Acceso permitido: Mayor de 18 años.");
    } else if (edad >= 12 && edad <= 17 && adulto == true) {
        alert("Acceso permitido: Entre 12 y 17 años con un adulto.");
    } else {
        alert("Acceso denegado: Menor de 12 años o no cumple los requisitos.");
    }

    

}



