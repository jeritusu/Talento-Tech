// Simulamos una función que hace una solicitud a una API (con setTimeout)
function obtenerUsuario(id, callback) {
    setTimeout(() => {
        const usuario = { id: id, nombre: "Juan" }; // Simulamos un usuario
        callback(usuario);
    }, 5000); // Simulamos un retraso de 1 segundo
}

function obtenerPosts(usuario, callback) {
    setTimeout(() => {
        const posts = ["Post 1", "Post 2", "Post 3"]; // Simulamos los posts
        callback(posts);
    }, 5000); // Simulamos otro retraso de 1 segundo
}

// Usamos callbacks para manejar las operaciones asíncronas
obtenerUsuario(1, (usuario) => {
    console.log("Usuario obtenido:", usuario);
    obtenerPosts(usuario, (posts) => {
        console.log("Posts del usuario:", posts);
    });
});
