document.getElementById('form-usuario').addEventListener('submit', async (e) => {
    e.preventDefault();
  
    const nombre = document.getElementById('nombre').value;
    // const edad = document.getElementById('edad').value;
    const edad = parseInt(document.getElementById('edad').value, 10);

    const email = document.getElementById('email').value;
  
    const usuario = { nombre, edad, email };
  
    try {
      const response = await fetch('http://localhost:3000/usuarios', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(usuario),
      });
      const data = await response.json();
      alert('Usuario creado: ' + JSON.stringify(data));
      cargarUsuarios();
    } catch (err) {
      console.error('Error creando usuario:', err);
    }
  });
  
  async function cargarUsuarios() {
    try {
      const response = await fetch('http://localhost:3000/usuarios');
      const usuarios = await response.json();
      const usuariosList = document.getElementById('usuarios-list');
      usuariosList.innerHTML = usuarios.map(usuario => `
        <div class="usuario-item" data-id="${usuario._id}">
          <div>
            <strong>${usuario.nombre}</strong> (${usuario.edad} años)<br>
            ${usuario.email}
          </div>
          <div>
            <button class="update" onclick="editarUsuario('${usuario._id}')">Editar</button>
            <button class="delete" onclick="eliminarUsuario('${usuario._id}')">Eliminar</button>
          </div>
        </div>
      `).join('');
    } catch (err) {
      console.error('Error cargando usuarios:', err);
    }
  }
  
  async function eliminarUsuario(id) {
    try {
      const response = await fetch(`http://localhost:3000/usuarios/${id}`, {
        method: 'DELETE',
      });
      const data = await response.json();
      alert('Usuario eliminado: ' + JSON.stringify(data));
      cargarUsuarios();
    } catch (err) {
      console.error('Error eliminando usuario:', err);
    }
  }
  
  async function editarUsuario(id) {
    const nombre = prompt('Nuevo nombre:');
    const edad = prompt('Nueva edad:');
    const email = prompt('Nuevo email:');
  
    if (nombre && edad && email) {
      try {
        const response = await fetch(`http://localhost:3000/usuarios/${id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ nombre, edad, email }),
        });
        const data = await response.json();
        alert('Usuario actualizado: ' + JSON.stringify(data));
        cargarUsuarios();
      } catch (err) {
        console.error('Error actualizando usuario:', err);
      }
    }
  }
  
  // Cargar usuarios al iniciar
  cargarUsuarios();