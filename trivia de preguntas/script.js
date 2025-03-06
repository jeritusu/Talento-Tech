const Respuestas = ["1","2","3"];
let respuesta = "4";

function combinar (){
    const nuevacombinacion = [respuesta,...Respuestas];
    console.log(nuevacombinacion)

    for (let index = 0; index < nuevacombinacion.length; index++) {

        let j = Math.floor(Math.random() * (index + 1));
        [nuevacombinacion[index], nuevacombinacion[j]] = [nuevacombinacion[j], nuevacombinacion[index]]
    }

    console.log(nuevacombinacion)
}


combinar();

function obtenerInformacion(){

    const  URL = "https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple"

    fetch(URL)
    .then((res) => res.json())
    .then((data) => {
        info (data.results);
    });
}

function info(datos){
    console.log(datos[0]['correct_answer'])
    console.log(datos[0]['incorrect_answers'])
    document.getElementById('id').textContent = datos[0]['question'];
}

obtenerInformacion ();