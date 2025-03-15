const getDataBtn = document.getElementById('getData');
const postDataBtn = document.getElementById('postData');

// Solicitud GET
getDataBtn.addEventListener('click', async () => {
    const response = await fetch('http://localhost:4000/api/data');
    const data = await response.json();
    console.log(data);
});

// Solicitud POST
postDataBtn.addEventListener('click', async () => {
    const response = await fetch('http://localhost:4000/api/data', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: 'Alexander', skill: 'Desarrollo web' })
    });
    const data = await response.json();
    console.log(data);
});
