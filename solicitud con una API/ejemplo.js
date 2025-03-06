const Respuestas = ["1","2","3"];
let respuesta = "4";

function combinar(){
    let nuevaCombinacion = [respuesta,...Respuestas];
    // console.log(nuevaCombinacion)

    for (let index = 0; index < nuevaCombinacion.lenght; index++) {
        let j = Math.floor(Math.random() * (index + 1));
        console.log(j);
        [nuevaCombinacion[index], nuevaCombinacion[j]] = [nuevaCombinacion[j], nuevaCombinacion[index]]
    }

    // console.log(nuevaCombinacion)
}



combinar();