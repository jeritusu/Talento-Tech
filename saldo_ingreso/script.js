// ----------------------
// Variables iniciales
// ----------------------
let saldo = 5000;   // Saldo inicial
let ingresos = 2000; 
let gastos = 1500;

function calcular(){
   // ----------------------
// Paso 1: Calcular el saldo final tras ingresos y gastos
// ----------------------
saldo += ingresos; // saldo = saldo + ingresos
saldo -= gastos;   // saldo = saldo - gastos

// Guardamos el resultado del paso 1
const resultadoPaso1 = `Paso 1 - Saldo final después de ingresos y gastos: $${saldo}`;

// ----------------------
// Paso 2: Calcular intereses generados (2%)
// ----------------------
saldo *= 1.02; // saldo = saldo * 1.02
// toFixed(2) para mostrar dos decimales
const resultadoPaso2 = `Paso 2 - Saldo con intereses (2%): $${saldo.toFixed(2)}`;

// ----------------------
// Paso 3: Retirar un 10% de emergencia
// ----------------------
saldo -= saldo * 0.10; // saldo = saldo - (saldo * 0.10)
const resultadoPaso3 = `Paso 3 - Saldo después de retirar 10% de emergencia: $${saldo.toFixed(2)}`;

// ----------------------
// Paso 4: Calcular el tiempo para alcanzar la meta
//           (meta = 10,000) si se duplica el saldo cada mes
// ----------------------
let meta = 10000;
let tiempo = 0; 

// Usamos '/=' en un bucle para calcular cuántas veces dividimos
// la meta entre 2 hasta que sea menor o igual al saldo actual.
while (meta > saldo) {
  meta /= 2; // meta = meta / 2
  tiempo++;
}

const resultadoPaso4 = `Paso 4 - Meses necesarios para alcanzar la meta de $10,000 si el saldo se duplica cada mes: ${tiempo}`;

// ----------------------
// Mostrar resultados en pantalla
// ----------------------
const resultadosDiv = document.getElementById('resultados');

resultadosDiv.innerHTML = `
  <p>${resultadoPaso1}</p>
  <p>${resultadoPaso2}</p>
  <p>${resultadoPaso3}</p>
  <p>${resultadoPaso4}</p>
`;

}

 
