
// //Con parametros
// let a;
// let b;

// function sumar(a,b){

//     return a + b;
// }

// const sumarFlecha = (a,b) => a + b;

// console.log(sumar (5,3));
// console.log(sumarFlecha (10,1));

// //Sin parametros
// const saludar = () => "Hola, mundo";
// console.log(saludar());

// //Plantilla literales
// const nombre = "Jairo";
// console.log(`Hola campista ${nombre}!`);

// //Multilinea
// const mensaje = `Hola, 
// esto es  un texto 
// Multilinea.`;
// console.log(mensaje);

// //Destructuring
// const numeros = [1,2,3];
// const [uno, dos, tres] = numeros;
// console.log(uno, dos, tres);

let persona = { nombre: "Ana", edad: 30};
let { nombre, edad } = persona;
console.log(nombre, edad);

