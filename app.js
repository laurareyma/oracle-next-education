// Array para almacenar los nombres

let amigos = []

// Implementar una función para agregar amigos

// Capturar el valor del campo de entrada

// Función para actualizar la lista de amigos
function actualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Función para agregar amigos
function agregarAmigo() {
    const nombre = document.getElementById('amigo').value.trim();
    if (nombre) {
        amigos.push(nombre);
        actualizarLista();
        document.getElementById('amigo').value = '';
    } else {
        alert('Por favor, ingrese un nombre válido');
    }
}

// Función para sortear el amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Por favor, ingrese al menos dos nombres');
        return;
    }
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    const li = document.createElement('li');
    li.textContent = amigoSorteado;
    resultado.appendChild(li);
}

