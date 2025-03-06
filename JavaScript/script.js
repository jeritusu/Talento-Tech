/*function pruebas_dom(){
    let x = document.getElementById('titulo');
    console.log(x.textContent);
    alert(x.textContent);
}

function pruebas_dom(){
    let y = document.getElementsByClassName('texto');
    console.log(y[0].textContent);
    console.log(y[1].textContent);
    console.log(y[2].textContent);
    console.log(y[3].textContent);
    console.log(y[0]+y[1]+y[2]+y[3]);
}

function pruebas_dom(){
    var titulo = document.getElementById('titulo');
    titulo.style.color = 'blue';
    titulo.style.fontSize = '24px';

}
*/

function pruebas_dom(){
var imagen = document.getElementById('miImagen');
imagen.setAttribute("src", "descarga.jpg");
console.log(imagen.getAttribute("src"));
}


