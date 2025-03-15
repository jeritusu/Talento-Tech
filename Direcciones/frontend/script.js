// document.getElementById("addressForm").addEventListener("submit", async (e) => {
//     e.preventDefault();
//     const calle = document.getElementById("calle").value;
//     const ciudad = document.getElementById("ciudad").value;
//     const codigoPostal = document.getElementById("codigoPostal").value;
    
//     const response = await fetch("http://localhost:3000/direcciones", { 
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ calle, ciudad, codigoPostal }) 
//     });
  
//     const data = await response.json();
//     console.log(data);
//   });

document.getElementById("addressForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  
  const calle = document.getElementById("calle").value;
  const ciudad = document.getElementById("ciudad").value;  // Asegurar que el ID es correcto
  const codigoPostal = document.getElementById("codigoPostal").value;
  
  try {
      const response = await fetch("http://localhost:3000/direcciones", {  // URL corregida
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ calle, ciudad, codigoPostal })
      });

      if (!response.ok) {
          throw new Error(`Error HTTP: ${response.status}`);
      }

      const data = await response.json();
      console.log("Respuesta del servidor:", data);
      alert("¡Dirección agregada exitosamente!")
      // const confirmar = window.confirm("Dirección registrada correctamente. ¿Deseas ver las direcciones guardadas?");
        
      //   if (confirmar) {
      //       window.location.href = "http://localhost:3000/direcciones";  
      //   }
  } catch (error) {
      console.error("Error al enviar la solicitud:", error);
  }
});
