function planificadorSemana(dia) {
    // Convertir la entrada a minúsculas para evitar errores por mayúsculas
    let = dia = document.getElementById('dia').value;
    dia = dia.toLowerCase();

    switch (dia) {
        case "lunes":
            alert("Actividades para el lunes:\n\n🧘 Clase de yoga o meditación\n📋 Planificación de la semana");
            //alert("🧘 Clase de yoga o meditación");
            //alert("📋 Planificación de la semana");
            //alert("🍏 Inicio de hábitos saludables");
            //alert("");
            //alert("📂 Organizar pendientes laborales o académicos");
            break;

        case "martes":
            alert("Actividades para el martes:\n\n🏋️ Sesión de ejercicio en el gimnasio\n🎬 Noche de películas o series");
            
            break;

        case "miercoles":
            alert("Actividades para el miércoles:\n\n📚 Aprender algo nuevo (cursos, tutoriales, lectura)\n👨‍👩‍👧‍👦 Salida con amigos o familia");
            
            break;

        case "jueves":
            alert("Actividades para el jueves:\n\n🍏 Inicio de hábitos saludables\n📖 Leer un libro o artículo interesante");
            
            break;

        case "viernes":
            alert("Actividades para el viernes:\n\n💻 Estudio o capacitación en línea\n🍽️ Cena ligera y relajante");
            
            break;

        case "sabado":
            alert("Actividades para el sabado:\n\n🎨 Actividad creativa (dibujar, escribir, tocar un instrumento)\n🥾 Caminata o actividad al aire libre");
            
            break;

        case "domingo":
            alert("Actividades para el domingo:\n\n🥾 Caminata o actividad al aire libre\n✅ Revisión de metas semanales");
            
            break;

        // Puedes agregar más días con sus actividades aquí

        default:
            console.log("⚠️ Error: Día inválido. Por favor ingresa un día válido de la semana.");
    }
}