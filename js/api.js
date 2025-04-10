// Configuración de la API
const API_BASE_URL = 'https://the-one-api.dev/v2';
const API_KEY = 'CI5e1aa9JNC9KgdbG275';

// Configuración de imágenes para el fondo
const backgroundImages = [
    'https://wallpaperaccess.com/full/751312.jpg',
    'https://wallpapercave.com/wp/wp3478436.jpg',
    'https://wallpaperaccess.com/full/1097651.jpg',
    'https://wallpaperaccess.com/full/4046704.jpg',
    'https://wallpapercave.com/wp/wp2722874.jpg',
    'https://wallpapercave.com/wp/wp3478453.jpg',
    'https://wallpapercave.com/wp/wp2723012.jpg'
];

// Playlist de canciones de El Señor de los Anillos
const playlist = [
    {
        title: "The Fellowship Theme",
        src: "https://soundcloud.com/user-551466939/the-fellowship-theme-howard-shore",
        artist: "Howard Shore"
    },
    {
        title: "Concerning Hobbits",
        src: "https://soundcloud.com/howard-shore-official/concerning-hobbits",
        artist: "Howard Shore"
    },
    {
        title: "The Bridge of Khazad-dûm",
        src: "https://soundcloud.com/rivendell-music/the-bridge-of-khazad-dum",
        artist: "Howard Shore"
    },
    {
        title: "Rohan Theme",
        src: "https://soundcloud.com/user-551466939/rohan-theme-howard-shore",
        artist: "Howard Shore"
    },
    {
        title: "Into the West",
        src: "https://soundcloud.com/howard-shore-official/into-the-west",
        artist: "Annie Lennox & Howard Shore"
    }
];

// Simulación de reproductor de audio (no se puede implementar completamente debido a restricciones de SoundCloud)
// En una implementación real, se usaría el API de SoundCloud o archivos MP3 directos
let currentSongIndex = 0;
let isPlaying = false;
let isMuted = false;

// Función para inicializar el componente principal de React
const { useState, useEffect } = React;

function App() {
    const [category, setCategory] = useState('movie');
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState('');
    const [sortOrder, setSortOrder] = useState('asc');
    const [limit, setLimit] = useState(10);
    const [selectedItem, setSelectedItem] = useState(null);
    const [totalCount, setTotalCount] = useState(0);

    const categories = [
        { value: 'movie', label: 'Películas' },
        { value: 'character', label: 'Personajes' },
        { value: 'quote', label: 'Citas' },
        { value: 'book', label: 'Libros' },
        { value: 'chapter', label: 'Capítulos' }
    ];

    const sortOptions = {
        movie: [
            { value: 'name', label: 'Nombre' },
            { value: 'runtimeInMinutes', label: 'Duración' },
            { value: 'budgetInMillions', label: 'Presupuesto' },
            { value: 'boxOfficeRevenueInMillions', label: 'Ingresos' },
            { value: 'academyAwardNominations', label: 'Nominaciones a los Oscar' },
            { value: 'academyAwardWins', label: 'Premios Oscar' }
        ],
        character: [
            { value: 'name', label: 'Nombre' },
            { value: 'race', label: 'Raza' },
            { value: 'gender', label: 'Género' },
            { value: 'birth', label: 'Nacimiento' },
            { value: 'death', label: 'Muerte' }
        ],
        quote: [
            { value: 'dialog', label: 'Diálogo' }
        ],
        book: [
            { value: 'name', label: 'Nombre' }
        ],
        chapter: [
            { value: 'name', label: 'Nombre' },
            { value: 'chapterName', label: 'Nombre del Capítulo' }
        ]
    };

    useEffect(() => {
        fetchData();
        
        // Inicializar el slideshow de fondo
        initBackgroundSlideshow();
        
        // Inicializar los controles de música
        initMusicControls();
        
        // Inicializar el selector de tema
        initThemeToggle();
    }, []);
    
    useEffect(() => {
        fetchData();
    }, [category, page, sortBy, sortOrder, limit]);

    const fetchData = async () => {
        setLoading(true);
        setError(null);
        try {
            let url = `${API_BASE_URL}/${category}?page=${page}&limit=${limit}`;
            
            if (sortBy) {
                url += `&sort=${sortBy}:${sortOrder}`;
            }
            
            if (searchTerm) {
                // Para personajes busca por nombre
                if (category === 'character' || category === 'movie' || category === 'book') {
                    url += `&name=/.*${searchTerm}.*/i`;
                }
                // Para citas busca por diálogo
                else if (category === 'quote') {
                    url += `&dialog=/.*${searchTerm}.*/i`;
                }
                // Para capítulos busca por nombre del capítulo
                else if (category === 'chapter') {
                    url += `&chapterName=/.*${searchTerm}.*/i`;
                }
            }
            
            const response = await fetch(url, {
                headers: {
                    'Authorization': `Bearer ${API_KEY}`
                }
            });
            
            if (!response.ok) {
                throw new Error(`Error al obtener datos: ${response.status}`);
            }
            
            const result = await response.json();
            setData(result.docs);
            setTotalPages(Math.ceil(result.total / result.limit));
            setTotalCount(result.total);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = (e) => {
        e.preventDefault();
        setPage(1);
        fetchData();
    };

    const handleReset = () => {
        setSearchTerm('');
        setSortBy('');
        setSortOrder('asc');
        setLimit(10);
        setPage(1);
        setSelectedItem(null);
    };

    const viewDetails = (item) => {
        setSelectedItem(item);
    };

    const goBack = () => {
        setSelectedItem(null);
    };

    if (selectedItem) {
        return (
            <div className="container">
                <header>
                    <h1>El Señor de los Anillos - API Explorer</h1>
                </header>
                
                <button className="back-button" onClick={goBack}>
                    ← Volver a la lista
                </button>
                
                <div className="detail-view">
                    <h2>{selectedItem.name || selectedItem.dialog || 'Detalle'}</h2>
                    <dl>
                        {Object.entries(selectedItem).map(([key, value]) => (
                            key !== '_id' && (
                                <React.Fragment key={key}>
                                    <dt>{key}:</dt>
                                    <dd>{value}</dd>
                                </React.Fragment>
                            )
                        ))}
                    </dl>
                </div>
            </div>
        );
    }

    return (
        <div className="container">
            <header>
                <h1>El Señor de los Anillos - API Explorer</h1>
            </header>
            
            <div className="filters">
                <div className="filter-group">
                    <h3>Categoría</h3>
                    <select 
                        value={category} 
                        onChange={(e) => {
                            setCategory(e.target.value);
                            setPage(1);
                            setSortBy('');
                            setSearchTerm('');
                        }}
                    >
                        {categories.map(cat => (
                            <option key={cat.value} value={cat.value}>
                                {cat.label}
                            </option>
                        ))}
                    </select>
                </div>
                
                <div className="filter-group">
                    <h3>Buscar</h3>
                    <form onSubmit={handleSearch}>
                        <input 
                            type="text" 
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder={`Buscar ${
                                category === 'character' || category === 'movie' || category === 'book' 
                                    ? 'por nombre' 
                                    : category === 'quote' 
                                        ? 'por diálogo' 
                                        : 'por nombre de capítulo'
                            }...`}
                        />
                        <button type="submit">Buscar</button>
                    </form>
                </div>
                
                <div className="filter-group">
                    <h3>Ordenar por</h3>
                    <select 
                        value={sortBy} 
                        onChange={(e) => setSortBy(e.target.value)}
                    >
                        <option value="">Sin ordenar</option>
                        {sortOptions[category]?.map(option => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                    
                    {sortBy && (
                        <select 
                            value={sortOrder} 
                            onChange={(e) => setSortOrder(e.target.value)}
                        >
                            <option value="asc">Ascendente</option>
                            <option value="desc">Descendente</option>
                        </select>
                    )}
                </div>
                
                <div className="filter-group">
                    <h3>Resultados por página</h3>
                    <select 
                        value={limit} 
                        onChange={(e) => {
                            setLimit(Number(e.target.value));
                            setPage(1);
                        }}
                    >
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="50">50</option>
                    </select>
                    
                    <button onClick={handleReset}>Restablecer filtros</button>
                </div>
            </div>
            
            {error && <div className="error">{error}</div>}
            
            {!error && (
                <div className="status">
                    Mostrando {data.length} de {totalCount} resultados
                </div>
            )}
            
            {loading ? (
                <div className="loading">Cargando datos...</div>
            ) : (
                <>
                    {data.length === 0 ? (
                        <div className="no-results">
                            No se encontraron resultados.
                        </div>
                    ) : (
                        <div className="results">
                            {data.map(item => (
                                <div className="card" key={item._id}>
                                    <div className="card-header">
                                        <h3>{item.name || item.dialog || 'Sin nombre'}</h3>
                                    </div>
                                    <div className="card-body">
                                        {category === 'movie' && (
                                            <>
                                                <p><strong>Duración:</strong> {item.runtimeInMinutes} minutos</p>
                                                <p><strong>Presupuesto:</strong> ${item.budgetInMillions} millones</p>
                                            </>
                                        )}
                                        {category === 'character' && (
                                            <>
                                                <p><strong>Raza:</strong> {item.race || 'Desconocida'}</p>
                                                <p><strong>Género:</strong> {item.gender || 'Desconocido'}</p>
                                            </>
                                        )}
                                        {category === 'quote' && (
                                            <p><em>"{item.dialog}"</em></p>
                                        )}
                                        {category === 'book' && (
                                            <p>{item._id}</p>
                                        )}
                                        {category === 'chapter' && (
                                            <p><strong>Capítulo:</strong> {item.chapterName || 'Sin nombre'}</p>
                                        )}
                                        <button onClick={() => viewDetails(item)}>Ver detalles</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                    
                    {totalPages > 1 && (
                        <div className="pagination">
                            <button 
                                onClick={() => setPage(p => Math.max(1, p - 1))}
                                disabled={page === 1}
                            >
                                Anterior
                            </button>
                            <span>Página {page} de {totalPages}</span>
                            <button 
                                onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                                disabled={page === totalPages}
                            >
                                Siguiente
                            </button>
                        </div>
                    )}
                </>
            )}
        </div>
    );
}

// Inicializa el slideshow de fondo
function initBackgroundSlideshow() {
    const slideshowElement = document.getElementById('background-slideshow');
    let currentImageIndex = 0;
    
    // Función para cambiar la imagen de fondo
    function changeBackgroundImage() {
        const nextImage = backgroundImages[currentImageIndex];
        slideshowElement.style.backgroundImage = `url(${nextImage})`;
        
        // Efecto de desvanecimiento
        slideshowElement.style.opacity = 0;
        setTimeout(() => {
            slideshowElement.style.opacity = 0.2;
        }, 100);
        
        // Pasar a la siguiente imagen en la lista
        currentImageIndex = (currentImageIndex + 1) % backgroundImages.length;
    }
    
    // Cambiar la imagen inmediatamente y luego cada 10 segundos
    changeBackgroundImage();
    setInterval(changeBackgroundImage, 10000);
}

// Simulación de funciones para el reproductor de música
function initMusicControls() {
    const playPauseBtn = document.getElementById('play-pause-btn');
    const prevSongBtn = document.getElementById('prev-song-btn');
    const nextSongBtn = document.getElementById('next-song-btn');
    const muteBtn = document.getElementById('mute-btn');
    const songInfo = document.querySelector('.song-info');
    const playIcon = document.querySelector('.play-icon');
    const pauseIcon = document.querySelector('.pause-icon');
    
    // En una implementación real, se usaría un objeto Audio para reproducir la música
    // Pero aquí simulamos el comportamiento
    
    // Actualizar información de la canción
    function updateSongInfo() {
        const currentSong = playlist[currentSongIndex];
        songInfo.textContent = `${currentSong.title} - ${currentSong.artist}`;
    }
    
    // Simular play/pause
    playPauseBtn.addEventListener('click', () => {
        isPlaying = !isPlaying;
        
        if (isPlaying) {
            playIcon.classList.add('hidden');
            pauseIcon.classList.remove('hidden');
            console.log(`Reproduciendo: ${playlist[currentSongIndex].title}`);
        } else {
            playIcon.classList.remove('hidden');
            pauseIcon.classList.add('hidden');
            console.log('Pausado');
        }
        
        updateSongInfo();
    });
    
// Simular canción anterior
prevSongBtn.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
    console.log(`Canción anterior: ${playlist[currentSongIndex].title}`);
    
    if (isPlaying) {
        console.log(`Reproduciendo: ${playlist[currentSongIndex].title}`);
    }
    
    updateSongInfo();
});

// Simular siguiente canción
nextSongBtn.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex + 1) % playlist.length;
    console.log(`Siguiente canción: ${playlist[currentSongIndex].title}`);
    
    if (isPlaying) {
        console.log(`Reproduciendo: ${playlist[currentSongIndex].title}`);
    }
    
    updateSongInfo();
});

// Simular silenciar
muteBtn.addEventListener('click', () => {
    isMuted = !isMuted;
    
    if (isMuted) {
        muteBtn.textContent = '🔇';
        console.log('Audio silenciado');
    } else {
        muteBtn.textContent = '🔊';
        console.log('Audio activado');
    }
});

// Inicializar información de la canción
updateSongInfo();
}

// Función para cambiar entre tema claro y oscuro
function initThemeToggle() {
const themeToggleBtn = document.getElementById('theme-toggle-btn');
const body = document.body;

// Comprobar si hay una preferencia de tema guardada
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.className = savedTheme;
}

themeToggleBtn.addEventListener('click', () => {
    // Alternar entre temas
    if (body.classList.contains('light-theme')) {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark-theme');
        console.log('Tema cambiado a: Mordor/Angmar (oscuro)');
    } else {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        localStorage.setItem('theme', 'light-theme');
        console.log('Tema cambiado a: Gondor/Rivendel (claro)');
    }
});
}

// Implementar una función para el reproductor de audio real (no simulado)
// Nota: Esta implementación usaría el API del navegador pero está comentada
// para evitar problemas de reproducción automática y permisos

/*
function setupRealAudioPlayer() {
const audioElement = document.createElement('audio');
audioElement.id = 'audio-player';
audioElement.style.display = 'none';
document.body.appendChild(audioElement);

// Cargar la primera canción
audioElement.src = playlist[currentSongIndex].src;

const playPauseBtn = document.getElementById('play-pause-btn');
const prevSongBtn = document.getElementById('prev-song-btn');
const nextSongBtn = document.getElementById('next-song-btn');
const muteBtn = document.getElementById('mute-btn');
const songInfo = document.querySelector('.song-info');

// Play/Pause
playPauseBtn.addEventListener('click', () => {
    if (audioElement.paused) {
        audioElement.play();
        playPauseBtn.textContent = '⏸';
    } else {
        audioElement.pause();
        playPauseBtn.textContent = '▶';
    }
});

// Canción anterior
prevSongBtn.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
    audioElement.src = playlist[currentSongIndex].src;
    updateSongInfo();
    if (!audioElement.paused) {
        audioElement.play();
    }
});

// Siguiente canción
nextSongBtn.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex + 1) % playlist.length;
    audioElement.src = playlist[currentSongIndex].src;
    updateSongInfo();
    if (!audioElement.paused) {
        audioElement.play();
    }
});

// Silenciar
muteBtn.addEventListener('click', () => {
    audioElement.muted = !audioElement.muted;
    muteBtn.textContent = audioElement.muted ? '🔇' : '🔊';
});

// Actualizar info de la canción
function updateSongInfo() {
    const currentSong = playlist[currentSongIndex];
    songInfo.textContent = `${currentSong.title} - ${currentSong.artist}`;
}

// Pasar a la siguiente canción cuando termine la actual
audioElement.addEventListener('ended', () => {
    currentSongIndex = (currentSongIndex + 1) % playlist.length;
    audioElement.src = playlist[currentSongIndex].src;
    updateSongInfo();
    audioElement.play();
});

// Inicializar
updateSongInfo();
}
*/

// Renderizar la aplicación React
ReactDOM.render(<App />, document.getElementById('root'));