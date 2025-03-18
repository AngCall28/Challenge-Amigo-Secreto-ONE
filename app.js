// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// 1. Declarar un array para almacenar los nombres de los amigos
let amigos = [];

// 2. Función para agregar amigos
function agregarAmigo() {
    // Capturar el valor del campo de entrada
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    // Validar la entrada
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Añadir el nombre al array de amigos
    amigos.push(nombre);

    // Limpiar el campo de entrada
    input.value = "";

    // Actualizar la lista visual en la página
    actualizarListaAmigos();
}

// 3. Función para actualizar la lista de amigos en la página
function actualizarListaAmigos() {
    // Obtener el elemento de la lista
    const listaAmigos = document.getElementById('listaAmigos');

    // Limpiar la lista existente
    listaAmigos.innerHTML = "";

    // Iterar sobre el array de amigos y agregar cada nombre como un <li>
    amigos.forEach((amigo) => {
        const nuevoAmigo = document.createElement('li');
        nuevoAmigo.textContent = amigo;
        listaAmigos.appendChild(nuevoAmigo);
    });
}

// 4. Función para sortear un amigo secreto
function sortearAmigo() {
    // Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado
    const amigoSecreto = amigos[indiceAleatorio];

    // Mostrar el resultado en la página
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>El amigo secreto es: <strong>${amigoSecreto}</strong></li>`;
}