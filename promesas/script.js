// Simulamos una función que devuelve una promesa para obtener un usuario
function obtenerUsuario(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const usuario = { id: id, nombre: "Juan" }; // Simulamos un usuario
            resolve(usuario);
        }, 5000); // Simulamos un retraso de 1 segundo
    });
}

// Simulamos una función que devuelve una promesa para obtener los posts
function obtenerPosts(usuario) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const posts = ["Post 1", "Post 2", "Post 3"]; // Simulamos los posts
            resolve(posts);
        }, 5000); // Simulamos otro retraso de 1 segundo
    });
}

// Usamos promesas para manejar las operaciones asíncronas
obtenerUsuario(1)
    .then((usuario) => {
        console.log("Usuario obtenido:", usuario);
        return obtenerPosts(usuario); // Encadenamos la siguiente promesa
    })
    .then((posts) => {
        console.log("Posts del usuario:", posts);
    })
    .catch((error) => {
        console.error("Algo salió mal:", error);
    });
