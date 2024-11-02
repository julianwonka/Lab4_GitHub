function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// Espera a que el contenido de la página esté cargado
document.addEventListener('DOMContentLoaded', function() {
    // Crear un botón para activar/desactivar el modo oscuro
    const darkModeButton = document.createElement('button');
    darkModeButton.innerText = 'Toggle Dark Mode'; // Texto del botón
    darkModeButton.onclick = toggleDarkMode; // Asigna la función de alternar al evento de clic

    // Añade el botón al final del cuerpo de la página
    document.body.appendChild(darkModeButton);
});

