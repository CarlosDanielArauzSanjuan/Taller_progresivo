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
// particulas
document.addEventListener('DOMContentLoaded', () => {
    const totalParticles = 20;

    for (let i = 0; i < totalParticles; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        particle.style.animationDuration = `${8 + Math.random() * 10}s`;
        document.body.appendChild(particle);
    }
});
const canvas = document.getElementById('magicParticles');
const ctx = canvas.getContext('2d');
let particlesArray = [];

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

const createParticles = () => {
    for (let i = 0; i < 80; i++) {
        particlesArray.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 2 + 1,
            speedX: Math.random() * 0.6 - 0.3,
            speedY: Math.random() * 0.6 - 0.3,
            opacity: Math.random() * 0.6 + 0.2,
        });
    }
};
const animateParticles = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particlesArray.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(160, 255, 217, ${p.opacity})`;
        ctx.fill();

        p.x += p.speedX;
        p.y += p.speedY;

        // Bounce
        if (p.x < 0 || p.x > canvas.width) p.speedX = -p.speedX;
        if (p.y < 0 || p.y > canvas.height) p.speedY = -p.speedY;
    });

    requestAnimationFrame(animateParticles);
};

createParticles();
animateParticles();




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