document.addEventListener('DOMContentLoaded', function() {
    // Aquí puedes añadir cualquier funcionalidad específica para la página de Tierra Media
    console.log('Página de Tierra Media cargada correctamente');
    
    // Ejemplo: añadir efectos de hover avanzados a los elementos del menú
    const menuItems = document.querySelectorAll('.menu-item');
    
    menuItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            // Efecto adicional al hacer hover (opcional)
            this.style.borderColor = '#d4af37';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.borderColor = '#3a3022';
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Array con las rutas de las imágenes de fondo
    const backgroundImages = [
        '../storage/images/backgrounds/rivendel.jpg',
        '../storage/images/backgrounds/mordor.webp',
        '../storage/images/backgrounds/numenor.jpg',
        '../storage/images/backgrounds/theone.avif',
        '../storage/images/backgrounds/minasthirit.jpg',
    ];
    
    // Índice de la imagen actual
    let currentImageIndex = 0;
    
    // Función para cambiar el fondo
    function changeBackground() {
        // Incrementar el índice y volver a 0 si supera el máximo
        currentImageIndex = (currentImageIndex + 1) % backgroundImages.length;
        
        // Crear una nueva imagen para precargarla
        const newImage = new Image();
        newImage.src = backgroundImages[currentImageIndex];
        
        // Cuando la imagen esté cargada, cambiar el fondo con una transición muy suave
         newImage.onload = function() {
         // Agregar una transición muy sutil al fondo del body
         document.body.style.transition = "background-image 3s ease-in-out";
         document.body.style.backgroundImage = `url('${backgroundImages[currentImageIndex]}')`;
};

        // // Cuando la imagen esté cargada, cambiar el fondo con una transición suave
        // newImage.onload = function() {
        //     document.body.style.backgroundImage = `url('${backgroundImages[currentImageIndex]}')`;
        // };
    }
    
    // Cambiar el fondo cada 10 segundos (10000 ms)
    setInterval(changeBackground, 10000);
    
    // Configurar el fondo inicial
    document.body.style.backgroundImage = `url('${backgroundImages[0]}')`;
    
    // Efecto hover en los elementos del menú
    const menuItems = document.querySelectorAll('.menu-item');
    
    menuItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.borderColor = '#d4af37';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.borderColor = '#3a3022';
        });
    });
});