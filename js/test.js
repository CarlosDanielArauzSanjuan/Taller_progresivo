// Personajes con características y emojis
const characters = {
    "Frodo": {
      description: "Valiente y determinado, cargas con grandes responsabilidades a pesar del miedo.",
      emoji: "💍",
      traits: ["valiente", "leal", "humilde", "resiliente", "pacífico"]
    },
    "Gandalf": {
      description: "Sabio consejero y poderoso mago que guía a otros con astucia e inteligencia.",
      emoji: "✨",
      traits: ["sabio", "poderoso", "estratégico", "independiente", "mentor"]
    },
    "Aragorn": {
      description: "Líder nato y guerrero valiente, dispuesto a defender lo que es justo.",
      emoji: "👑",
      traits: ["honorable", "valiente", "líder", "protector", "fuerte"]
    },
    "Sam": {
      description: "Increíblemente leal y servicial, siempre apoyando a quienes amas.",
      emoji: "🌱",
      traits: ["leal", "servicial", "práctico", "modesto", "persistente"]
    },
    "Galadriel": {
      description: "Sabia y poderosa, con gran visión y capacidad para inspirar a otros.",
      emoji: "⭐",
      traits: ["sabia", "poderosa", "bella", "misteriosa", "protectora"]
    },
    "Legolas": {
      description: "Ágil y preciso, con gran conexión con la naturaleza y habilidades impresionantes.",
      emoji: "🏹",
      traits: ["ágil", "observador", "paciente", "preciso", "natural"]
    },
    "Gimli": {
      description: "Valiente y testarudo, con gran lealtad hacia tus amigos y principios.",
      emoji: "⚒️",
      traits: ["fuerte", "leal", "obstinado", "directo", "apasionado"]
    },
    "Éowyn": {
      description: "Valiente y rebelde, no te detienes ante las normas sociales cuando luchas por tus sueños.",
      emoji: "⚔️",
      traits: ["valiente", "rebelde", "determinada", "apasionada", "independiente"]
    },
    "Saruman": {
      description: "Inteligente y estratégico, pero quizás demasiado ambicioso y dispuesto a usar cualquier medio.",
      emoji: "🔮",
      traits: ["inteligente", "ambicioso", "manipulador", "poderoso", "pragmático"]
    },
    "Gollum/Sméagol": {
      description: "Con dos caras: una oscura y posesiva, otra vulnerable y nostálgica.",
      emoji: "🐟",
      traits: ["astuto", "obsesivo", "dividido", "superviviente", "solitario"]
    }
  };
  
  // Preguntas con emojis
  const questions = [
    {
      text: "🤝 ¿Qué valoras más en un amigo?",
      options: {
        A: { text: "Lealtad incondicional", traits: ["leal", "servicial"] },
        B: { text: "Valentía para defender lo justo", traits: ["valiente", "honorable"] },
        C: { text: "Sabiduría y buenos consejos", traits: ["sabio", "mentor"] },
        D: { text: "Ingenio y adaptabilidad", traits: ["astuto", "superviviente"] },
        E: { text: "Sinceridad, aunque duela", traits: ["directo", "independiente"] }
      }
    },
    {
      text: "💪 ¿Cuál consideras que es tu mayor fortaleza?",
      options: {
        A: { text: "Persistencia ante las dificultades", traits: ["resiliente", "persistente"] },
        B: { text: "Capacidad de liderar e inspirar", traits: ["líder", "honorable"] },
        C: { text: "Conocimiento y sabiduría", traits: ["sabio", "inteligente"] },
        D: { text: "Adaptabilidad y astucia", traits: ["astuto", "pragmático"] },
        E: { text: "Habilidad para alcanzar mis metas", traits: ["determinada", "ambicioso"] }
      }
    },
    {
      text: "⭐ ¿Qué te motiva principalmente en la vida?",
      options: {
        A: { text: "Ayudar a los que quiero", traits: ["servicial", "leal"] },
        B: { text: "Hacer lo correcto y honorable", traits: ["honorable", "protector"] },
        C: { text: "Descubrir y compartir conocimiento", traits: ["sabio", "mentor"] },
        D: { text: "Asegurar mi bienestar y supervivencia", traits: ["superviviente", "pragmático"] },
        E: { text: "Alcanzar mis ambiciones y sueños", traits: ["ambicioso", "apasionado"] }
      }
    },
    {
      text: "🏔️ ¿Cómo enfrentas los grandes desafíos?",
      options: {
        A: { text: "Con determinación, paso a paso", traits: ["resiliente", "persistente"] },
        B: { text: "Con coraje, enfrentándolos directamente", traits: ["valiente", "fuerte"] },
        C: { text: "Con estrategia y planificación", traits: ["sabio", "estratégico"] },
        D: { text: "Buscando soluciones alternativas", traits: ["astuto", "adaptable"] },
        E: { text: "Confiando en mis habilidades superiores", traits: ["poderoso", "confiado"] }
      }
    },
    {
      text: "🏞️ ¿En qué lugar te sentirías más a gusto?",
      options: {
        A: { text: "Un hogar acogedor rodeado de amigos", traits: ["modesto", "pacífico"] },
        B: { text: "Una gran ciudad con historia y tradición", traits: ["honorable", "protector"] },
        C: { text: "Una biblioteca o lugar de conocimiento", traits: ["sabio", "observador"] },
        D: { text: "En constante movimiento, sin ataduras", traits: ["independiente", "solitario"] },
        E: { text: "En lugares misteriosos y poderosos", traits: ["misterioso", "poderoso"] }
      }
    },
    {
      text: "⚔️ Si tuvieras que elegir un arma, ¿cuál sería?",
      options: {
        A: { text: "Una espada confiable y resistente", traits: ["valiente", "honorable"] },
        B: { text: "Un bastón mágico o vara de poder", traits: ["poderoso", "sabio"] },
        C: { text: "Un arco para atacar con precisión", traits: ["preciso", "observador"] },
        D: { text: "Un hacha potente y contundente", traits: ["fuerte", "directo"] },
        E: { text: "Mi astucia e inteligencia", traits: ["astuto", "manipulador"] }
      }
    },
    {
      text: "🌍 ¿Cómo describirías tu relación con el mundo?",
      options: {
        A: { text: "Disfruto de las pequeñas cosas simples", traits: ["modesto", "pacífico"] },
        B: { text: "Siento la responsabilidad de protegerlo", traits: ["protector", "honorable"] },
        C: { text: "Busco comprenderlo y aprender de él", traits: ["sabio", "observador"] },
        D: { text: "Lo veo como un lugar a veces hostil", traits: ["superviviente", "solitario"] },
        E: { text: "Creo que podría ser mejor bajo mi influencia", traits: ["ambicioso", "poderoso"] }
      }
    },
    {
      text: "👥 ¿Qué valoras más en una comunidad?",
      options: {
        A: { text: "La unidad y apoyo mutuo", traits: ["leal", "servicial"] },
        B: { text: "El honor y las tradiciones", traits: ["honorable", "protector"] },
        C: { text: "El conocimiento y sabiduría colectiva", traits: ["sabio", "mentor"] },
        D: { text: "La libertad individual", traits: ["independiente", "rebelde"] },
        E: { text: "El orden y la jerarquía clara", traits: ["pragmático", "líder"] }
      }
    },
    {
      text: "🧩 ¿Cuál consideras tu mayor debilidad?",
      options: {
        A: { text: "A veces dudo de mis capacidades", traits: ["humilde", "modesto"] },
        B: { text: "Puedo ser demasiado impulsivo", traits: ["apasionado", "valiente"] },
        C: { text: "Tiendo a sobreanalizar las situaciones", traits: ["sabio", "observador"] },
        D: { text: "Desconfío fácilmente de los demás", traits: ["solitario", "superviviente"] },
        E: { text: "Puedo ser demasiado ambicioso", traits: ["ambicioso", "manipulador"] }
      }
    },
    {
      text: "👑 Como líder, ¿cuál sería tu enfoque?",
      options: {
        A: { text: "Servir y apoyar a mi equipo", traits: ["servicial", "leal"] },
        B: { text: "Liderar con el ejemplo y valentía", traits: ["valiente", "honorable"] },
        C: { text: "Aconsejar con sabiduría", traits: ["sabio", "mentor"] },
        D: { text: "Ser pragmático y eficiente", traits: ["pragmático", "astuto"] },
        E: { text: "Tener una visión clara y exigir excelencia", traits: ["poderoso", "ambicioso"] }
      }
    }
  ];
  
  // Utilidad para capitalizar primera letra
  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  // Variables globales
  let currentQuestionIndex = 0;
  let currentUser = "";
  let userTraits = {};
  const STORAGE_KEY = 'tolkien_test_results';
  
  // Inicializar la aplicación
  window.onload = () => {
    document.getElementById('total-questions').textContent = questions.length;
    loadPreviousResults();
  };
  
  // Animaciones con fade
  function fadeOut(element, callback) {
    element.style.opacity = 1;
    let opacity = 1;
    const timer = setInterval(() => {
      if (opacity <= 0.1) {
        clearInterval(timer);
        element.style.opacity = 0;
        if (callback) callback();
      }
      element.style.opacity = opacity;
      opacity -= 0.1;
    }, 30);
  }
  
  function fadeIn(element) {
    element.style.opacity = 0;
    let opacity = 0;
    const timer = setInterval(() => {
      if (opacity >= 1) {
        clearInterval(timer);
      }
      element.style.opacity = opacity;
      opacity += 0.1;
    }, 30);
  }
  function spawnElvenRunes() {
    const runes = ["ᚨ", "ᚱ", "ᛞ", "✧", "ᛟ", "ᚷ"];
    const numRunes = 40;
  
    for (let i = 0; i < numRunes; i++) {
      const rune = document.createElement("div");
      rune.classList.add("elven-particle");
      rune.textContent = runes[Math.floor(Math.random() * runes.length)];
      rune.style.left = `${Math.random() * 100}vw`;
      rune.style.top = `${Math.random() * 100}vh`;
      rune.style.fontSize = `${Math.random() * 1.5 + 0.8}rem`;
      rune.style.animationDelay = `${Math.random() * 10}s`;
      document.body.appendChild(rune);
    }
  }
  
  window.addEventListener("load", spawnElvenRunes);
  
  // Iniciar el test
  function startQuiz() {
    const nameInput = document.getElementById('user-name');
    currentUser = nameInput.value.trim();
    
    if (!currentUser) {
      alert('Por favor, ingresa tu nombre para comenzar.');
      return;
    }
    
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    
    // Reiniciar variables
    currentQuestionIndex = 0;
    userTraits = {};
    
    showQuestion();
  }
  
  // Mostrar la pregunta actual
  function showQuestion() {
    if (currentQuestionIndex >= questions.length) {
      calculateResult();
      return;
    }
  
    const q = questions[currentQuestionIndex];
    const questionDiv = document.getElementById('question-container');
    const optionsDiv = document.getElementById('options-container');
  
    fadeOut(questionDiv, () => {
      fadeOut(optionsDiv, () => {
        // Actualizar contenido
        questionDiv.textContent = q.text;
        document.getElementById('current-question').textContent = currentQuestionIndex + 1;
        
        optionsDiv.innerHTML = '';
        for (let key in q.options) {
          const btn = document.createElement('button');
          btn.textContent = `${key}) ${q.options[key].text}`;
          btn.onclick = () => selectOption(key);
          optionsDiv.appendChild(btn);
        }
  
        // Mostrar suavemente
        fadeIn(questionDiv);
        fadeIn(optionsDiv);
      });
    });
  }
  
  // Seleccionar una opción
  function selectOption(optionKey) {
    const selectedOption = questions[currentQuestionIndex].options[optionKey];
    
    // Efecto visual al botón seleccionado
    const buttons = document.querySelectorAll('#options-container button');
    buttons.forEach(btn => btn.disabled = true); // desactivar botones
    const selectedBtn = Array.from(buttons).find(b => b.textContent.startsWith(optionKey));
    if (selectedBtn) selectedBtn.classList.add('selected-option');
    
    // Guardar rasgos
    selectedOption.traits.forEach(trait => {
      userTraits[trait] = (userTraits[trait] || 0) + 1;
    });
  
    currentQuestionIndex++;
    
    // Esperar un momento antes de cambiar de pregunta
    setTimeout(() => {
      showQuestion();
    }, 400);
  }
  
  // Calcular el resultado
  function calculateResult() {
    let maxMatch = 0;
    let bestCharacter = "";
    
    // Comparamos rasgos del usuario con cada personaje
    for (const [charName, charData] of Object.entries(characters)) {
      let matchScore = 0;
      let totalPossibleScore = 0;
      
      // Evaluar la coincidencia de rasgos
      charData.traits.forEach(trait => {
        if (userTraits[trait]) {
          matchScore += userTraits[trait];
        }
        totalPossibleScore += questions.length / 5; // Valor máximo posible por rasgo
      });
      
      // Calcular porcentaje de coincidencia
      const matchPercentage = totalPossibleScore > 0 ? (matchScore / totalPossibleScore) * 100 : 0;
      
      if (matchPercentage > maxMatch) {
        maxMatch = matchPercentage;
        bestCharacter = charName;
      }
    }
    
    // Guardar resultado
    const finalMatch = Math.round(maxMatch);
    saveResult(bestCharacter, finalMatch);
    
    // Mostrar resultado
    showResult(bestCharacter, finalMatch);
  }
  
  // Mostrar el resultado
  function showResult(characterName, matchPercentage) {
    document.getElementById('quiz-container').style.display = 'none';
    const resultDiv = document.getElementById('result-container');
    resultDiv.style.display = 'block';
  
    const character = characters[characterName];
    
    resultDiv.innerHTML = `
      <div class="character-result animated-result">
        <h2>¡${currentUser}, eres como ${characterName}! ${character.emoji}</h2>
        <p><strong>Compatibilidad:</strong> ${matchPercentage}%</p>
        <p>${character.description}</p>
        <h3>Tus rasgos destacados:</h3>
        <ul>
          ${character.traits.map(trait => `<li>${capitalize(trait)}</li>`).join('')}
        </ul>
        <div class="actions">
          <button onclick="restartQuiz()">Reiniciar Test</button>
          <button onclick="shareResult('${characterName}')">Compartir Resultado</button>
          <button onclick="goToStart()">Volver al Inicio</button>
        </div>
      </div>
    `;
  }
  
  // Cargar resultados anteriores
  function loadPreviousResults() {
    const savedResults = localStorage.getItem(STORAGE_KEY);
    if (savedResults) {
      const resultsObj = JSON.parse(savedResults);
      const resultsList = document.getElementById('previous-results-list');
      resultsList.innerHTML = '';
      
      const users = Object.keys(resultsObj);
      if (users.length > 0) {
        document.getElementById('previous-results-container').style.display = 'block';
        
        users.forEach(user => {
          const li = document.createElement('li');
          li.textContent = `${user}: ${resultsObj[user].character} ${characters[resultsObj[user].character].emoji}`;
          li.onclick = () => showSavedResult(user);
          li.style.cursor = 'pointer';
          li.style.textDecoration = 'underline';
          resultsList.appendChild(li);
        });
      }
    }
  }
  
  // Mostrar resultado guardado
  function showSavedResult(username) {
    const savedResults = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!savedResults || !savedResults[username]) {
      alert("No se encontró el resultado para este usuario.");
      return;
    }
    
    const userResult = savedResults[username];
    const characterName = userResult.character;
    const matchPercentage = userResult.matchPercentage;
    
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'none';
    
    const resultDiv = document.getElementById('result-container');
    resultDiv.style.display = 'block';
    
    const character = characters[characterName];
    
    resultDiv.innerHTML = `
      <div class="character-result animated-result">
        <h2>Resultado guardado para ${username}</h2>
        <h3>${username} es como ${characterName}! ${character.emoji}</h3>
        <p><strong>Compatibilidad:</strong> ${matchPercentage}%</p>
        <p>${character.description}</p>
        <h3>Rasgos destacados:</h3>
        <ul>
          ${character.traits.map(trait => `<li>${capitalize(trait)}</li>`).join('')}
        </ul>
        <div class="actions">
          <button onclick="startNewTest()">Hacer un nuevo test</button>
          <button onclick="goToStart()">Volver al Inicio</button>
        </div>
      </div>
    `;
  }
  
  // Compartir resultado
  function shareResult(characterName) {
    const text = `¡Según el Test de Personalidad de Tolkien, soy como ${characterName} ${characters[characterName].emoji}!`;
    
    if (navigator.share) {
      navigator.share({
        title: 'Test de Personalidad de Tolkien',
        text: text,
      })
      .catch(error => {
        console.log('Error al compartir:', error);
        copyToClipboard(text);
      });
    } else {
      copyToClipboard(text);
    }
  }
  
  // Copiar al portapapeles
  function copyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('Resultado copiado al portapapeles. ¡Puedes compartirlo donde quieras!');
  }
  
  // Guardar resultado
  function saveResult(character, matchPercentage) {
    let savedResults = localStorage.getItem(STORAGE_KEY);
    let resultsObj = savedResults ? JSON.parse(savedResults) : {};
    
    resultsObj[currentUser] = {
      character: character,
      matchPercentage: matchPercentage,
      date: new Date().toISOString()
    };
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(resultsObj));
  }
  
  // Eliminar los resultados
  function clearAllResults() {
    if (confirm("¿Estás seguro de que deseas eliminar todos los resultados anteriores? Esta acción no se puede deshacer.")) {
      localStorage.removeItem(STORAGE_KEY);
      document.getElementById('previous-results-list').innerHTML = '';
      document.getElementById('previous-results-container').style.display = 'none';
      alert("Todos los resultados han sido eliminados.");
    }
  }
  
  // Reiniciar el test
  function restartQuiz() {
    currentQuestionIndex = 0;
    userTraits = {};
    
    document.getElementById('result-container').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    
    showQuestion();
  }
  
  // Iniciar nuevo test
  function startNewTest() {
    document.getElementById('user-name').value = '';
    goToStart();
  }
  
  // Volver al inicio
  function goToStart() {
    document.getElementById('result-container').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'none';
    document.getElementById('start-screen').style.display = 'block';
    
    loadPreviousResults();
  }