// Temas inspirados en locaciones de la Tierra Media
const themes = {
    light: {
        name: 'Claro',
        icon: 'fa-moon',
        label: 'Modo Oscuro',
        backgroundImages: [
            'https://i.imgur.com/8YJWLKE.jpg', // Rivendel
            'https://i.imgur.com/XB0H3w5.jpg', // Lothlorien
            'https://i.imgur.com/mvOTtQf.jpg', // Minas Tirith
            'https://i.imgur.com/VDYrjc9.jpg', // La Comarca
            'https://i.imgur.com/kTLpBr8.jpg'  // Gondor
        ]
    },
    dark: {
        name: 'Oscuro',
        icon: 'fa-sun',
        label: 'Modo Claro',
        backgroundImages: [
            'https://i.imgur.com/VRqTCOv.jpg', // Mordor
            'https://i.imgur.com/Y5nOFVX.jpg', // Barad-dûr
            'https://i.imgur.com/PYqhJJP.jpg', // Moria
            'https://i.imgur.com/9TYwAd8.jpg', // Angmar
            'https://i.imgur.com/Z9pHJIW.jpg'  // Dol Guldur
        ]
    }
};

// Estado del tema
let currentTheme = 'light';
let currentBackgroundIndex = 0;
let backgroundInterval;

// Función para inicializar el tema
function initializeTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    
    // Recuperar el tema guardado en localStorage si existe
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        currentTheme = savedTheme;
        document.body.className = `${currentTheme}-theme`;
    }
    
    // Configurar el botón de cambio de tema
    updateThemeToggleButton();
    
    // Iniciar el cambio de imágenes de fondo
    startBackgroundSlideshow();
    
    // Añadir evento al botón de tema
    themeToggle.addEventListener('click', toggleTheme);
}

// Función para alternar entre temas
function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    // Guardar el tema en localStorage
    localStorage.setItem('theme', currentTheme);
    
    // Actualizar clases y botón
    document.body.className = `${currentTheme}-theme`;
    updateThemeToggleButton();
    
    // Reiniciar el slideshow con las nuevas imágenes
    startBackgroundSlideshow();
}

// Función para actualizar el botón de cambio de tema
function updateThemeToggleButton() {
    const themeToggle = document.getElementById('theme-toggle');
    const targetTheme = currentTheme === 'light' ? themes.dark : themes.light;
    
    themeToggle.innerHTML = `
        <i class="fas ${themes[currentTheme === 'light' ? 'dark' : 'light'].icon}"></i>
        <span>${targetTheme.label}</span>
    `;
}

// Función para iniciar el slideshow de fondo
function startBackgroundSlideshow() {
    // Detener cualquier intervalo existente
    if (backgroundInterval) {
        clearInterval(backgroundInterval);
    }
    
    // Reiniciar índice
    currentBackgroundIndex = 0;
    
    // Establecer la primera imagen
    updateBackgroundImage();
    
    // Configurar el intervalo para cambiar la imagen cada 10 segundos
    backgroundInterval = setInterval(() => {
        currentBackgroundIndex = (currentBackgroundIndex + 1) % themes[currentTheme].backgroundImages.length;
        updateBackgroundImage();
    }, 10000);
}

// Función para actualizar la imagen de fondo
function updateBackgroundImage() {
    const backgroundElement = document.querySelector('.background-image');
    const newImage = themes[currentTheme].backgroundImages[currentBackgroundIndex];
    
    // Crear una nueva imagen para precarga
    const imgPreload = new Image();
    imgPreload.src = newImage;
    
    imgPreload.onload = () => {
        // Aplicar la desvanecimiento
        backgroundElement.style.opacity = '0';
        
        setTimeout(() => {
            backgroundElement.style.backgroundImage = `url('${newImage}')`;
            backgroundElement.style.opacity = '0.2';
        }, 500);
    };
}

// Exportar funciones para uso en otros archivos si es necesario
window.themeController = {
    getCurrentTheme: () => currentTheme,
    toggleTheme: toggleTheme
};

// Inicializar el tema cuando se cargue la página
document.addEventListener('DOMContentLoaded', initializeTheme);