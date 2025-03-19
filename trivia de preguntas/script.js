// const Respuestas = ["1","2","3"];
// let respuesta = "4";

// function combinar (){
//     const nuevacombinacion = [respuesta,...Respuestas];
//     console.log(nuevacombinacion)

//     for (let index = 0; index < nuevacombinacion.length; index++) {

//         let j = Math.floor(Math.random() * (index + 1));
//         [nuevacombinacion[index], nuevacombinacion[j]] = [nuevacombinacion[j], nuevacombinacion[index]]
//     }

//     console.log(nuevacombinacion)
// }


// combinar();

// function obtenerInformacion(){

//     const  URL = "https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple"

//     fetch(URL)
//     .then((res) => res.json())
//     .then((data) => {
//         info (data.results);
//     });
// }

// function info(datos){
//     console.log(datos[0]['correct_answer'])
//     console.log(datos[0]['incorrect_answers'])
//     document.getElementById('id').textContent = datos[0]['question'];
// }

// obtenerInformacion ();


async function obtenerPregunta() {
    const URL = "https://opentdb.com/api.php?amount=1&category=21&difficulty=easy&type=multiple";
    const respuesta = await fetch(URL);
    const datos = await respuesta.json();
    mostrarPregunta(datos.results[0]);
}

function mostrarPregunta(data) {
    document.getElementById("pregunta").textContent = data.question;
    let opciones = [...data.incorrect_answers, data.correct_answer];
    opciones = opciones.sort(() => Math.random() - 0.5);

    const contenedorOpciones = document.getElementById("opciones");
    contenedorOpciones.innerHTML = "";
    
    opciones.forEach(opcion => {
        const boton = document.createElement("button");
        boton.textContent = opcion;
        boton.classList.add("option");
        boton.onclick = () => evaluarRespuesta(opcion, data.correct_answer, boton);
        contenedorOpciones.appendChild(boton);
    });
}

function evaluarRespuesta(seleccion, correcta, boton) {
    if (seleccion === correcta) {
        boton.classList.add("correct");
        alert("¡Respuesta correcta!");
    } else {
        boton.classList.add("incorrect");
        alert("Respuesta incorrecta. La correcta era: " + correcta);
    }
    setTimeout(obtenerPregunta, 2000);
}

obtenerPregunta();