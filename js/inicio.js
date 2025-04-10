document.addEventListener('DOMContentLoaded', function() {
    const accessForm = document.getElementById('accessForm');
    const errorMsg = document.getElementById('errorMsg');
    const loginContainer = document.querySelector('.login-container');

    // Función para mostrar el mensaje de error y ocultar el título
function mostrarError(mensaje) {
    const elementoError = document.querySelector('.error-message');
    const elementoTitulo = document.querySelector('.login-title');
    
    elementoError.textContent = mensaje;
    elementoError.style.display = 'block';
    elementoTitulo.style.display = 'none';
}

// Ejemplo de uso:
// Llama a mostrarError("Tu mensaje de error") cuando haya un error
// Llama a ocultarError() cuando el error se resuelva o al cargar la página
accessForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const accessKey = document.getElementById('accessKey').value.toLowerCase();
    
    // Validación de la clave (ajusta según tus necesidades)
    if (accessKey === "mellon" || accessKey === "amigo") {
        // Añadir la clase que activa la animación de brillo en el borde
        loginContainer.classList.add('login-success');
        
        // Opcional: reproducir un sonido de "apertura de puerta"
        const doorSound = new Audio('../storage/sounds/break.mp3');
        doorSound.playbackRate += 1.2;
        doorSound.play();
        
        // Esperar un tiempo para que el usuario vea la animación y escuche el sonido antes de redirigir
        setTimeout(() => {
            alert("Le nathlam hí!, Las puertas de ARDA se abren....");
            window.location.href = "../html/tierra-media.html"; // Redirige a tierramedia.html
        }, 2000);
    } else {

        // Mostrar mensaje de error
        errorMsg.style.display = 'block';
        const failure = new Audio('../storage/sounds/failure.mp3');
        failure.playbackRate += 0.4;
        failure.play();
        
        // Ocultar el mensaje después de 3 segundos
        setTimeout(() => {
            errorMsg.style.display = 'none';

        }, 4000);
    }
});
});