document.getElementById('buscar').addEventListener('click', function () {
    const consulta = document.getElementById('intro').value;

    if (consulta.trim() !== '') {
        busqueda(consulta)
    } else {
        alert('debes ingresar tu busqueda')
    }
});


function busqueda(consulta) {
    let accessKey = 'vjKmi7bTJbCMqOyr-ZxWFnTvLZJ-7kEYpmy9zpaL3gA';
    const url = `https://api.unsplash.com/search/photos?query=${consulta}&client_id=${accessKey}`;
    console.log(url)
    console.log(url)
    fetch(url)
        .then(response => {
            if (!response.ok) {
                alert('problemas con el api');
            }

          return response.json();

        })
        .then(data => {
            mostrarImagenes(data.results);
        })
        .catch(error => {
            console.log('pailas en el catch mano')
            alert('recontra pailas');
        });

}

function mostrarImagenes(imagenes) {
    const igm = document.getElementById('resultado');
    imagenes.forEach(element => {
        const ImagesCreadas = document.createElement('img');
        ImagesCreadas.src = element.urls.small;
        ImagesCreadas.alt = element.alt_description;
        igm.appendChild(ImagesCreadas);
    });

}