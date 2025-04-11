// Inicialización del mapa con Leaflet
const map = L.map('mapa', {
    crs: L.CRS.Simple,
    minZoom: -0.63,
    zoomSnap: 0.25,    
    wheelPxPerZoomLevel: 120,
    touchZoom: true,
    dragging: true,    
    doubleClickZoom: true,
    scrollWheelZoom: true
});
  
// Tamaño de la imagen del mapa
const w = 2000;
const h = 1400;
const bounds = [[0, 0], [h, w]];
  
// Cargar la imagen del mapa
L.imageOverlay('../storage/images/mapas/main-map.png', bounds).addTo(map);
map.fitBounds(bounds);
  
// Definición de los puntos de interés
const pointsOfInterest = [
    {
        position: [1050, 970],
        name: 'Rivendel',
        description: '¡Aquí está Rivendel 🏕️! El refugio élfico fundado por Elrond, donde se celebró el Concilio que decidió el destino del Anillo Único. Un valle oculto con cascadas y arquitectura élfica.',
        icon: '🏕️'
    },
    {
        position: [1165, 1370],
        name: 'Montaña Solitaria',
        description: '¡Aquí está la Montaña Solitaria 🗻, la desolación de Smaug 🐉! Hogar ancestral de los enanos de Durin, conquistada por el dragón Smaug y posteriormente recuperada por Thorin y compañía con ayuda de Bilbo Bolsón.',
        icon: '🗻'
    },
    {
        position: [850, 930],
        name: 'Moria',
        description: '¡Aquí está Moria 𓉸! Las antiguas minas de los enanos, conocidas como Khazad-dûm. Un vasto complejo subterráneo que alberga el puente de Khazad-dûm donde Gandalf se enfrentó al Balrog.',
        icon: '𓉸'
    },
    {
        position: [630, 870],
        name: 'Isengard',
        description: '¡Aquí está Isengard ⛈! La fortaleza de Saruman el Blanco, con su imponente torre de Orthanc. Desde aquí, Saruman creó su ejército de Uruk-hai para servir a Sauron.',
        icon: '⛈'
    },
    {
        position: [380, 1280],
        name: 'Minas Tirith',
        description: '¡Aquí está Minas Tirith 🏰! La Ciudad Blanca, capital de Gondor, construida en siete niveles sobre la montaña. Último bastión de resistencia frente a las fuerzas de Mordor.',
        icon: '🏰'
    },
    {
        position: [500, 970],
        name: 'Abismo de Helm',
        description: '¡Aquí está El Abismo de Helm 🎠! La fortaleza de Rohan donde se libró una crucial batalla contra las fuerzas de Saruman. Su muralla fue defendida por los Rohirrim junto a Aragorn, Legolas y Gimli.',
        icon: '🎠'
    },
    {
        position: [380, 1350],
        name: 'Puerta Negra',
        description: '¡Aquí está la Puerta Negra 🏴! La entrada fortificada a Mordor, conocida como Morannon. Aquí tuvo lugar la última distracción para que Frodo pudiera completar su misión.',
        icon: '🏴'
    },
    {
        position: [430, 1440],
        name: 'Montaña del Destino',
        description: '¡Aquí está la Montaña del Destino 🔥! El volcán Orodruin donde Sauron forjó el Anillo Único y el único lugar donde podía ser destruido. El destino final del viaje de Frodo y Sam.',
        icon: '🔥'
    }
];

// Agregar todos los marcadores al mapa
pointsOfInterest.forEach(poi => {
    const marker = L.marker(poi.position).addTo(map);
    
    // Crear el contenido del popup con más detalle
    const popupContent = `
        <div class="poi-popup">
            <h3>${poi.icon} ${poi.name}</h3>
            <p>${poi.description}</p>
        </div>
    `;
    
    marker.bindPopup(popupContent);
});

// Evento para centrar el mapa cuando carga completamente
map.on('load', function() {
    map.fitBounds(bounds);
});