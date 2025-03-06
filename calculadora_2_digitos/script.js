 // Función para obtener y validar los números de entrada
function obtenerNumeros() {
    const input1 = document.getElementById('numero1').value;
    const input2 = document.getElementById('numero2').value;

    // Validar que se hayan ingresado ambos números
    if (input1 === "" || input2 === "") {
        document.getElementById('resultado').textContent = "Error: Por favor, ingrese ambos números.";
        return null;
    }
    
    const num1 = parseFloat(input1);
    const num2 = parseFloat(input2);

    // Validar que los valores ingresados sean números válidos
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('resultado').textContent = "Error: Ingrese valores numéricos válidos.";
        return null;
    }
    return [num1, num2];
}

// Función para obtener los valores de los inputs
function obtenerNumeros() {
    const num1 = parseFloat(document.getElementById('numero1').value);
    const num2 = parseFloat(document.getElementById('numero2').value);
    return [num1, num2];
}

// Función para sumar
function sumar() {
    const [num1, num2] = obtenerNumeros();
    const resultado = num1 + num2;
    document.getElementById('resultado').textContent = "Resultado: " + resultado;
}

// Función para restar
function restar() {
    const [num1, num2] = obtenerNumeros();
    const resultado = num1 - num2;
    document.getElementById('resultado').textContent = "Resultado: " + resultado;
}

// Función para multiplicar
function multiplicar() {
    const [num1, num2] = obtenerNumeros();
    const resultado = num1 * num2;
    document.getElementById('resultado').textContent = "Resultado: " + resultado;
}

// Función para dividir
function dividir() {
    const [num1, num2] = obtenerNumeros();
    if(num2 === 0) {
        document.getElementById('resultado').textContent = "Error: División por cero";
        return;
    }
    const resultado = num1 / num2;
    document.getElementById('resultado').textContent = "Resultado: " + resultado;
}