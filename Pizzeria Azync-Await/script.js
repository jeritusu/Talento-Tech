// Función que simula un retraso en cada paso del pedido
function esperar(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Función que añade un mensaje a la lista con animación
function agregarMensaje(mensaje) {
    const lista = document.getElementById("progreso");
    const item = document.createElement("li");
    item.textContent = mensaje;
    lista.appendChild(item);
    
    // Agregar animación después de un breve tiempo
    setTimeout(() => {
        item.classList.add("visible");
    }, 100);
}

// Función asíncrona que maneja el proceso de pedido de pizza
async function hacerPedido() {
    document.getElementById("progreso").innerHTML = ""; // Limpiar progreso
    
    try {
        agregarMensaje("🛎️ Tomando el pedido...");
        await esperar(2000);
        agregarMensaje("✅ Pedido tomado.");

        agregarMensaje("👨‍🍳 Preparando la pizza...");
        await esperar(3000);
        agregarMensaje("✅ Pizza preparada.");

        agregarMensaje("🔥 Horneando la pizza...");
        await esperar(5000);
        agregarMensaje("✅ Pizza horneada.");

        agregarMensaje("🚗 Entregando la pizza...");
        await esperar(2000);
        agregarMensaje("✅ Pizza entregada. ¡Disfruta tu comida! 🍕");

    } catch (error) {
        agregarMensaje("❌ Error en el pedido: " + error);
    }
}

// Evento para iniciar el proceso cuando se presiona el botón
document.getElementById("pedirPizza").addEventListener("click", hacerPedido);

