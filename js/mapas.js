const map = L.map('mapa', {
    crs: L.CRS.Simple,
    minZoom: -0.63,       // 👈 Limita el zoom mínimo
    zoomSnap: 0.25,    
    wheelPxPerZoomLevel: 120,
    touchZoom: true,   // 👈 Habilita zoom con dedos
    dragging: true,    
    doubleClickZoom: true,
    scrollWheelZoom: true
  });
  
  // Tamaño de la imagen (ajústalo a tu imagen)
  const w = 2000;
  const h = 1400;
  const bounds = [[0, 0], [h, w]];
  
  L.imageOverlay('../storage/images/mapas/main-map.png', bounds).addTo(map);
  map.fitBounds(bounds);
  
  // Opcional: marcador de ejemplo
  L.marker([1050, 970]).addTo(map)
    .bindPopup('¡Aquí está Rivendel 🏕️ !')
    .openPopup();

    L.marker([1165, 1370]).addTo(map)
    .bindPopup('¡Aquí está la Montaña Solitaria 🗻 ,<br> la desolacion de Smaug 🐉')
    .openPopup();

    L.marker([850, 930]).addTo(map)
    .bindPopup('¡Aquí está Moria 𓉸 !')
    .openPopup();

    L.marker([630, 870]).addTo(map)
    .bindPopup('¡Aquí está Isengard ⛈ !')
    .openPopup();

    L.marker([380, 1280]).addTo(map)
    .bindPopup('¡Aquí está Minas Tirith 🏰 !')
    .openPopup();

    L.marker([500, 970]).addTo(map)
    .bindPopup('¡Aquí está El Habismo De Helm 🎠 !')
    .openPopup();

    L.marker([380, 1350]).addTo(map)
    .bindPopup('¡Aquí está la Puerta Negra 🏴 !')
    .openPopup();
    
    L.marker([430, 1440]).addTo(map)
    .bindPopup('¡Aquí está la Montaña del Destino 🔥 !')
    .openPopup();