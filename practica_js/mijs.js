function miFuncion(){
   // alert("probando")
   let contenedor = document.getElementById('contenedor')
   let nuevoElemento = document.createElement('p')
   nuevoElemento.textContent = 'jairo'
   let espacioVacio = contenedor.firstChild
   contenedor.insertBefore(nuevoElemento, espacioVacio)
}