document.addEventListener('DOMContentLoaded', function() {
    // Datos de los mapas
    const maps = [
        {
            id: 0,
            title: "ARDA EN LA SEGUNDA EDAD",
            image: "/api/placeholder/800/600",
            description: "En la Segunda Edad de Arda, Sauron forjó el Anillo Único en el Monte del Destino. Los Númenóreanos prosperaron y finalmente fueron corrompidos por Sauron, lo que llevó a la caída de Númenor. Al final de esta era, la Última Alianza de Elfos y Hombres derrotó a Sauron temporalmente."
        },
        {
            id: 1,
            title: "BELERIAND",
            image: "/api/placeholder/800/600",
            description: "Beleriand fue la gran región occidental de la Tierra Media durante la Primera Edad. Aquí transcurrieron muchas de las historias de los Silmarils, incluyendo las grandes batallas contra Morgoth y sus siervos. Al final de la Primera Edad, Beleriand fue sumergida bajo las aguas durante la Guerra de la Ira."
        },
        {
            id: 2,
            title: "LA COMARCA",
            image: "/api/placeholder/800/600",
            description: "La Comarca es el hogar pacífico de los hobbits, conocido por sus colinas verdes y campos fértiles. Aquí comenzó la aventura de Bilbo Bolsón, y posteriormente la de Frodo, cuando Gandalf visitó Bolsón Cerrado. A pesar de su apariencia idílica, la Comarca fue brevemente ocupada por las fuerzas de Saruman al final de la Guerra del Anillo."
        },
        {
            id: 3,
            title: "EL LEJANO HARAD",
            image: "/api/placeholder/800/600",
            description: "El Lejano Harad es una región misteriosa al sur de Gondor, hogar de culturas exóticas y criaturas extrañas como los mûmakil (olifantes). Sus pueblos fueron influenciados por Sauron y enviaron guerreros para luchar contra Gondor en la Guerra del Anillo. Es una tierra de grandes desiertos y selvas tropicales poco exploradas por los pueblos del norte."
        },
        {
            id: 4,
            title: "MAPA DE LA TERCERA EDAD",
            image: "/api/placeholder/800/600",
            description: "La Tercera Edad abarca los eventos narrados en El Hobbit y El Señor de los Anillos. Durante este periodo, el poder de los elfos disminuyó mientras el de los hombres aumentaba. Esta era concluye con la destrucción del Anillo Único, la caída de Sauron, y la coronación de Aragorn como rey de Gondor y Arnor reunificados."
        },
        {
            id: 5,
            title: "NÚMENOR",
            image: "/api/placeholder/800/600",
            description: "Númenor fue una poderosa isla-reino otorgada a los Dúnedain por los Valar. Durante siglos prosperó hasta convertirse en la civilización más avanzada de la Tierra Media. Su último rey, Ar-Pharazôn, fue engañado por Sauron para atacar Valinor, lo que resultó en la completa destrucción de la isla y su hundimiento bajo el mar."
        },
        {
            id: 6,
            title: "ROHAN, GONDOR, MORDOR",
            image: "/api/placeholder/800/600",
            description: "Esta región central de la Tierra Media fue el escenario principal de la Guerra del Anillo. Rohan, el reino de los jinetes, acudió en ayuda de Gondor en la Batalla de los Campos del Pelennor. Mordor, dominado por la sombra de Sauron, fue el objetivo final de Frodo y Sam en su misión para destruir el Anillo Único en el Monte del Destino."
        },
        {
            id: 7,
            title: "TIERRA MEDIA DE PETER JACKSON",
            image: "/api/placeholder/800/600",
            description: "Este mapa representa la visión de la Tierra Media según las adaptaciones cinematográficas de Peter Jackson. Incluye localizaciones icónicas como Rivendel, Lothlórien, y la Montaña Solitaria tal como aparecen en las trilogías de El Hobbit y El Señor de los Anillos, con su propia interpretación geográfica y estética."
        },
        {
            id: 8,
            title: "TIERRAS DEL NORTE",
            image: "/api/placeholder/800/600",
            description: "Las Tierras del Norte incluyen Eriador, Rhovanion y las Montañas Nubladas. Esta región albergaba antiguos reinos como Arnor y Angmar, así como asentamientos como Rivendel, la Montaña Solitaria y el Reino de los Bosques. Aquí transcurrieron los eventos de El Hobbit y fue un área crucial en la Guerra del Anillo."
        },
        {
            id: 9,
            title: "UNDYINGLAND Y BELEGAER",
            image: "/api/placeholder/800/600",
            description: "Undyingland (Aman) es el continente occidental donde moran los Valar y los elfos inmortales, separado de la Tierra Media por el gran océano Belegaer. Tras la caída de Númenor, Aman fue removido del mundo físico y solo los elfos podían encontrar el Camino Recto para llegar a sus costas desde los Puertos Grises."
        },
        {
            id: 10,
            title: "MIRKWOOD Y LA MONTAÑA SOLITARIA",
            image: "/api/placeholder/800/600",
            description: "El Bosque Negro (Mirkwood) fue una vez el Gran Bosque Verde antes de ser corrompido por la sombra de Sauron. Aquí, la compañía de Thorin Escudo de Roble luchó contra arañas gigantes y fue capturada por los elfos del bosque. La Montaña Solitaria, hogar ancestral de los enanos, fue el objetivo final de su misión para recuperar su reino del dragón Smaug."
        }
    ];
    
    // Elementos DOM
    const mapContainer = document.querySelector('.map-container');
    const mapButtons = document.querySelector('.map-buttons');
    const mapTitle = document.getElementById('map-title');
    const mapDesc = document.getElementById('map-desc');
    
    // Comprobar si existen los elementos de desplazamiento
    const scrollUp = document.querySelector('.scroll-up');
    const scrollDown = document.querySelector('.scroll-down');
    
    // Función para generar las imágenes de los mapas
    function generateMapImages() {
        if (!mapContainer) return;
        
        mapContainer.innerHTML = '';
        
        maps.forEach(map => {
            const mapDiv = document.createElement('div');
            mapDiv.className = 'map-image';
            mapDiv.id = `map-${map.id}`;
            
            if (map.id === 0) {
                mapDiv.classList.add('active');
            }
            
            const img = document.createElement('img');
            img.src = map.image;
            img.alt = `Mapa de ${map.title}`;
            
            mapDiv.appendChild(img);
            mapContainer.appendChild(mapDiv);
        });
    }
    
    // Función para generar los botones de selección de mapas
    function generateMapButtons() {
        if (!mapButtons) return;
        
        mapButtons.innerHTML = '';
    
        maps.forEach((map, index) => {
            const button = document.createElement('button');
            button.className = 'map-button';
            if (map.id === 0) {
                button.classList.add('active');
            }
    
            button.textContent = map.title;
            button.dataset.id = map.id;
            button.dataset.index = index;
    
            button.addEventListener('click', function() {
                changeMap(map.id);
            });
    
            mapButtons.appendChild(button);
        });
    }
    
    // Función para cambiar el mapa activo (unificada)
    function changeMap(id) {
        // Actualizar la imagen activa
        document.querySelectorAll('.map-image').forEach(img => {
            img.classList.remove('active');
        });
        
        const targetMap = document.getElementById(`map-${id}`);
        if (targetMap) {
            targetMap.classList.add('active');
        }
        
        // Actualizar el botón activo
        document.querySelectorAll('.map-button').forEach(btn => {
            btn.classList.remove('active');
        });
        
        const targetButton = document.querySelector(`.map-button[data-id="${id}"]`);
        if (targetButton) {
            targetButton.classList.add('active');
        }
        
        // Actualizar el título y la descripción
        const mapInfo = maps.find(map => map.id === parseInt(id));
        if (mapInfo && mapTitle && mapDesc) {
            mapTitle.textContent = mapInfo.title;
            mapDesc.textContent = mapInfo.description;
            
            // Aplicar animación a la descripción
            updateDescriptionAnimation();
        }
    }
    
    // Función para animar la descripción
    function updateDescriptionAnimation() {
        const currentDesc = document.querySelector('.map-description');
        if (!currentDesc) return;
        
        currentDesc.style.animation = 'none';
        
        // Forzar un reflow para reiniciar la animación
        void currentDesc.offsetWidth;
        
        // Aplicar la animación
        currentDesc.style.animation = 'slideUp 0.8s forwards';
    }
    
    // Funcionalidad de scroll para los botones
    if (scrollUp) {
        scrollUp.addEventListener('click', function() {
            if (mapButtons) {
                mapButtons.scrollBy({
                    top: -100,
                    behavior: 'smooth'
                });
            }
        });
    }
    
    if (scrollDown) {
        scrollDown.addEventListener('click', function() {
            if (mapButtons) {
                mapButtons.scrollBy({
                    top: 100,
                    behavior: 'smooth'
                });
            }
        });
    }
    
    // Navegación por teclado
    document.addEventListener('keydown', function(e) {
        const activeButton = document.querySelector('.map-button.active');
        if (!activeButton) return;
        
        const currentIndex = parseInt(activeButton.dataset.index);
        let newIndex;
        
        if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
            newIndex = (currentIndex + 1) % maps.length;
            changeMap(maps[newIndex].id);
        } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
            newIndex = (currentIndex - 1 + maps.length) % maps.length;
            changeMap(maps[newIndex].id);
        }
    });
    
    // Habilitar deslizamiento táctil para dispositivos móviles
    let touchStartX = 0;
    let touchStartY = 0;
    
    if (mapContainer) {
        mapContainer.addEventListener('touchstart', function(e) {
            touchStartX = e.changedTouches[0].screenX;
            touchStartY = e.changedTouches[0].screenY;
        }, false);
        
        mapContainer.addEventListener('touchend', function(e) {
            const touchEndX = e.changedTouches[0].screenX;
            const touchEndY = e.changedTouches[0].screenY;
            
            const xDiff = touchStartX - touchEndX;
            const yDiff = touchStartY - touchEndY;
            
            // Determinar si fue un deslizamiento horizontal o vertical
            if (Math.abs(xDiff) > Math.abs(yDiff)) {
                const activeButton = document.querySelector('.map-button.active');
                if (!activeButton) return;
                
                const currentIndex = parseInt(activeButton.dataset.index);
                
                if (xDiff > 50) { // Deslizamiento a la izquierda
                    const newIndex = (currentIndex + 1) % maps.length;
                    changeMap(maps[newIndex].id);
                } else if (xDiff < -50) { // Deslizamiento a la derecha
                    const newIndex = (currentIndex - 1 + maps.length) % maps.length;
                    changeMap(maps[newIndex].id);
                }
            }
        }, false);
    }
    
    // Efecto de zoom en la imagen del mapa
    document.addEventListener('click', function(e) {
        if (e.target.closest('.map-image')) {
            const mapImg = e.target.closest('.map-image');
            
            if (mapImg.classList.contains('zoomed')) {
                mapImg.classList.remove('zoomed');
                mapImg.style.cursor = 'zoom-in';
            } else {
                mapImg.classList.add('zoomed');
                mapImg.style.cursor = 'zoom-out';
            }
        }
    });
    
    // Añadir estilos para el zoom
    const style = document.createElement('style');
    style.innerHTML = `
        .map-image.zoomed {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0,0.9);
            z-index: 1000;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 2rem;
        }
        .map-image.zoomed img {
            max-width: 90%;
            max-height: 90%;
            object-fit: contain;
            transform: scale(1);
            transition: transform 0.3s ease;
        }
        @keyframes slideUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);
    
    // Iniciar la galería con efectos especiales
    function initGalleryWithEffects() {
        // Efecto de aparición para el título
        const title = document.querySelector('h1');
        if (title) {
            title.style.opacity = '0';
            title.style.transform = 'translateY(-20px)';
            
            setTimeout(() => {
                title.style.transition = 'opacity 1s ease, transform 1s ease';
                title.style.opacity = '1';
                title.style.transform = 'translateY(0)';
            }, 300);
        }
        
        // Efecto de aparición para el contenedor principal
        const container = document.querySelector('.container');
        if (container) {
            container.style.opacity = '0';
            
            setTimeout(() => {
                container.style.transition = 'opacity 1s ease';
                container.style.opacity = '1';
            }, 800);
        }
        
        // Inicializar mapa de Leaflet si existe el elemento
        const mapaElement = document.getElementById('mapa');
        if (mapaElement && typeof L !== 'undefined') {
            const map = L.map('mapa').setView([0, 0], 5);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);
        }
    }
    
    // Inicializar la galería
    generateMapImages();
    generateMapButtons();
    initGalleryWithEffects();
});