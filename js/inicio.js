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

// Función para ocultar el mensaje de error y mostrar el título
function ocultarError() {
    const elementoError = document.querySelector('.error-message');
    const elementoTitulo = document.querySelector('.login-title');
    
    elementoError.style.display = 'none';
    elementoTitulo.style.display = 'block';
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
            const doorSound = new Audio('path/to/door-sound.mp3');
            doorSound.play();
            
            // Esperar un tiempo para que el usuario vea la animación antes de redirigir
            setTimeout(() => {
                alert("Las puertas de ARDA se abren. Bienvenido a la Tierra Media...");
                // window.location.href = "main.html"; // Descomentar para redirigir
            }, 2000);
        } else {
            // Mostrar mensaje de error
            errorMsg.style.display = 'block';
            
            // Ocultar el mensaje después de 3 segundos
            setTimeout(() => {
                errorMsg.style.display = 'none';
            }, 3000);
        }
    });
});