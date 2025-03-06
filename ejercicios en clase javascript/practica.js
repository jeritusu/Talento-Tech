/*
//----------------------------------
//DECLARACION DE VARIABLES
//----------------------------------
let variable = "Hola Jairo";
console.log(variable);

//----------------------------------
//TIPOS DE VARIABLES
//----------------------------------

const queHaces = "Trabajo";
queHaces = "Estudio";
console.log(queHaces);

let edad = 42;
console.log(edad);

let tieneHijo = true;
console.log(tieneHijo); 

//----------------------------------
//OPERADORES ARITMETICOS
//----------------------------------

let num1 = 5;
let num2 = 5;
let resultado;

//suma
resultado = num1 + num2;
console.log(resultado);

//resta
resultado = num1 - num2;
console.log(resultado);
//multiplicación
resultado = num1 * num2;
console.log(resultado);
//división
resultado = num1 / num2;
console.log(resultado);

//----------------------------------
//OPERADORES ASIGNACION
//----------------------------------

num1 += 6;
num2 -= 2;


//suma
resultado = num1 + num2;
console.log(resultado);

//resta
resultado = num1 - num2;
console.log(resultado);
//multiplicación
resultado = num1 * num2;
console.log(resultado);
//división
resultado = num1 / num2;
console.log(resultado);

//----------------------------------
//OPERADORES COMPARACION
//----------------------------------
let comparo;
comparo = num1 < num2; 
console.log(comparo);
comparo = num1 > num2; 
console.log(comparo);
num1 == 3;
console.log(comparo);
num2 == 11;
console.log(comparo);



//----------------------------------
//CONDICIONALES
//----------------------------------

//CONDICIONAL IF

//Determinar si un numero es negativo o positivo o cero.

let numero = -2;

if (numero > 0){    
    console.log("El número es positivo");
} else if (numero < 0){
    console.log("El número es negativo");
    
} else {
    console.log("El número es cero..");
        
}



//Determinar un rango entre 0-10 , 11-20 , 21-30

let numero = 25;

if (numero >= 0 && numero <= 10){    
    console.log("El rango esta entre 0 a 10");
} else if (numero > 10 && numero <= 20){
    console.log("El rango esta entre 11 a 20");    
} else {
    console.log("El rango esta entre 21 a 30");
}

//CONDICIONAL SWITCH

let dia = 5;

switch(dia){
    case 1:
        console.log("Hoy es Lunes");
        break; 

    case 2:
        console.log("Hoy es Martes");
        break; 

    case 3:
        console.log("Hoy es Miercoles");
        break; 

    case 4:
        console.log("Hoy es Jueves");
        break; 

    case 5:
        console.log("Hoy es Viernes");
        break; 

    case 6:
        console.log("Hoy es Sabado");
        break; 

    case 7:
        console.log("Hoy es Domingo");
        break; 

        default: 
        console.log("No es un día Valido...")


}

*/
