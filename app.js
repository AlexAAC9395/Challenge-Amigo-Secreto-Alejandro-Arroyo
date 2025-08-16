// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Lista donde se guardaran los nombres
let listaAmigos = [];

// Función para agregar un amigo
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Validar nombres repetidos (insensible a mayúsculas/minúsculas)
    if (listaAmigos.some(amigo => amigo.toLowerCase() === nombre.toLowerCase())) {
        alert("El nombre introducido ya existe en la lista.");
        input.value = "";
        return;
    }

    listaAmigos.push(nombre);
    mostrarLista();
    input.value = "";
}

// Función para mostrar la lista en pantalla
function mostrarLista() {
    const listaHTML = document.getElementById("listaAmigos");
    listaHTML.innerHTML = "";

    listaAmigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaHTML.appendChild(li);
    });
}

// Función para sortear un amigo aleatoriamente
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("No hay nombres en la lista para sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoSorteado = listaAmigos[indiceAleatorio];

    const resultadoHTML = document.getElementById("resultado");
    resultadoHTML.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigoSorteado}</strong></li>`;
}