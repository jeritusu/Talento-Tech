 // Datos de ingredientes de la Pizza Código
 const harina = 1.50;
 const queso = 2.00;
 const salsa = 1.00;
 const toppings = 1.50;

 // Cálculo del costo de producción
 const costoProduccion = harina + queso + salsa + toppings;
 document.getElementById("costo-produccion").innerText = "Costo de producción por pizza: $" + 
 costoProduccion.toFixed(2);

 // Precio de venta con 60% de margen de ganancia
 const margenGanancia = 0.60;
 const precioVenta = costoProduccion * (1 + margenGanancia);
 document.getElementById("precio-venta").innerText = "Precio de venta por pizza: $" + precioVenta.toFixed(2);

 // Ganancias diarias suponiendo la venta de 15 pizzas al día
 const platosVendidosPorDia = 15;
 const gananciaPorDia = (precioVenta - costoProduccion) * platosVendidosPorDia;
 document.getElementById("ganancia-dia").innerText = "Ganancia por día: $" + gananciaPorDia.toFixed(2);

 // Tiempo para recuperar la inversión inicial de $5,000
 const inversionInicial = 5000;
 const diasParaRecuperarInversion = inversionInicial / gananciaPorDia;
 document.getElementById("dias-inversion").innerText = "Días para recuperar inversión: " + 
 Math.ceil(diasParaRecuperarInversion);
