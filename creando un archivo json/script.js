const formulario = document.querySelector("form");
formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const formData = new FormData(formulario);
    const datos = {};

    formData.forEach((valor, clave) => {
        datos[clave] = valor;

        console.log(datos);

    });

    console.log(JSON.stringify(datos));

})