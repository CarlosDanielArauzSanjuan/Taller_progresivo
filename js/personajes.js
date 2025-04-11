
// pendientes
// 1. mostar una tabla lateral sobre como filtrar, con ejemplos
// 2. mejorar el css y agregar animaciones 


// Constantes para la API
const API_BASE_URL = 'https://the-one-api.dev/v2';
const API_KEY = 'CI5e1aa9JNC9KgdbG275';

// Variables de estado
let currentPage = 1;
let totalPages = 1;
let currentResults = [];
let currentFilters = {};

// Elementos DOM
const subFiltersContainer = document.getElementById('sub-filters');
const applyFiltersBtn = document.getElementById('apply-filters');
const resultsGrid = document.getElementById('results-grid');
const resultsCount = document.getElementById('results-count');
const pageInfo = document.getElementById('page-info');
const prevPageBtn = document.getElementById('prev-page');
const nextPageBtn = document.getElementById('next-page');

// Configuración de subfiltros para personajes
const filterConfigs = [
    { id: 'name', label: 'Nombre', type: 'text' },
    { id: 'race', label: 'Raza', type: 'text' },
    { id: 'gender', label: 'Género', type: 'text' }
];

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

// Función principal de inicialización
function initializeApp() {
    // Configurar event listeners
    applyFiltersBtn.addEventListener('click', handleFilterApply);
    prevPageBtn.addEventListener('click', () => changePage(currentPage - 1));
    nextPageBtn.addEventListener('click', () => changePage(currentPage + 1));
    
    // Inicializar los subfiltros
    renderSubFilters();
    
    // Cargar datos iniciales
    fetchData();
}

// Renderizar los subfiltros para personajes
function renderSubFilters() {
    subFiltersContainer.innerHTML = '';
    
    filterConfigs.forEach(filter => {
        const filterGroup = document.createElement('div');
        filterGroup.className = 'filter-group';
        
        const label = document.createElement('label');
        label.setAttribute('for', `filter-${filter.id}`);
        label.textContent = filter.label + ':';
        
        const input = document.createElement('input');
        input.setAttribute('type', filter.type);
        input.setAttribute('id', `filter-${filter.id}`);
        input.setAttribute('name', filter.id);
        input.setAttribute('placeholder', `Buscar por ${filter.label.toLowerCase()}`);
        
        filterGroup.appendChild(label);
        filterGroup.appendChild(input);
        subFiltersContainer.appendChild(filterGroup);
    });
}

// Recopilar los valores de los filtros actuales
function collectFilters() {
    const filters = {};
    
    filterConfigs.forEach(filter => {
        const element = document.getElementById(`filter-${filter.id}`);
        if (element && element.value.trim() !== '') {
            filters[filter.id] = element.value.trim();
        }
    });
    
    return filters;
}

// Manejar la aplicación de filtros
function handleFilterApply() {
    currentFilters = collectFilters();
    currentPage = 1;
    fetchData();
}

// Función para cambiar de página
function changePage(newPage) {
    currentPage = newPage;
    fetchData();
}

// Actualizar la información de paginación
function updatePagination(total) {
    const resultsPerPage = 12;
    totalPages = Math.ceil(total / resultsPerPage);
    
    pageInfo.textContent = `Página ${currentPage} de ${totalPages}`;
    prevPageBtn.disabled = currentPage <= 1;
    nextPageBtn.disabled = currentPage >= totalPages;
}

// Renderizar mensaje de estado (carga, error o sin resultados)
function renderStatusMessage(message, type = 'loading') {
    resultsGrid.innerHTML = `<div class="${type}">${message}</div>`;
}

// Filtrar resultados según los criterios
function filterResults(data) {
    if (Object.keys(currentFilters).length === 0) {
        return data;
    }

    return data.filter(item => {
        return Object.entries(currentFilters).every(([key, value]) => {
            if (!item[key]) return false;
            
            // Convertir ambos a minúsculas para comparación sin distinción de mayúsculas/minúsculas
            const itemValue = String(item[key]).toLowerCase();
            const filterValue = String(value).toLowerCase();
            
            // Permitir coincidencias parciales
            return itemValue.includes(filterValue);
        });
    });
}

// Obtener datos de la API
async function fetchData() {
    renderStatusMessage('Cargando personajes...');
    
    try {
        // Hacer la solicitud a la API
        const response = await fetch(`${API_BASE_URL}/character`, {
            headers: {
                'Authorization': `Bearer ${API_KEY}`
            }
        });
        
        if (!response.ok) {
            throw new Error('Error al obtener datos de la API');
        }
        
        const data = await response.json();
        
        // Filtrar los resultados según los criterios
        const filteredResults = filterResults(data.docs);
        currentResults = filteredResults;
        
        // Actualizar el conteo de resultados
        resultsCount.textContent = `${filteredResults.length} personajes encontrados`;
        
        // Paginar los resultados
        const resultsPerPage = 12;
        const startIndex = (currentPage - 1) * resultsPerPage;
        const paginatedResults = filteredResults.slice(startIndex, startIndex + resultsPerPage);
        
        // Actualizar la paginación
        updatePagination(filteredResults.length);
        
        // Renderizar los resultados
        if (paginatedResults.length > 0) {
            renderResults(paginatedResults);
        } else {
            renderStatusMessage('No se encontraron personajes con los filtros actuales.', 'no-results');
        }
    } catch (error) {
        console.error('Error:', error);
        renderStatusMessage('Error al cargar los personajes. Por favor, intenta de nuevo más tarde.', 'error');
    }
}

// Renderizar los resultados en la interfaz
function renderResults(results) {
    resultsGrid.innerHTML = '';
    
    results.forEach(item => {
        const card = document.createElement('div');
        card.className = 'result-card';
        
        card.innerHTML = `
            <h3>${item.name}</h3>
            <p><strong>Raza:</strong> ${item.race || 'Desconocida'}</p>
            <p><strong>Género:</strong> ${item.gender || 'Desconocido'}</p>
            <p><strong>Fecha de nacimiento:</strong> ${item.birth || 'Desconocida'}</p>
            <p><strong>Fecha de muerte:</strong> ${item.death || 'Desconocida'}</p>
            <p><strong>Altura:</strong> ${item.height || 'Desconocida'}</p>
            <p><strong>Color de cabello:</strong> ${item.hair || 'Desconocido'}</p>
        `;
        
        resultsGrid.appendChild(card);
    });
}

// Formatear números para mostrar de manera más legible
function formatNumber(num) {
    return num.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}