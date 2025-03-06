function operadores(){

    let saldo = 5000;
    let ingreso = 2000;
    let gastos = 1500;

    let saldoFinal = saldo + ingreso;

    document.getElementById('saldo').value = saldoFinal;

    let devolucion = gastos * ingreso;

    document.getElementById('devolucion').value = devolucion;

    document.getElementById('gasto').value = gastos;
}