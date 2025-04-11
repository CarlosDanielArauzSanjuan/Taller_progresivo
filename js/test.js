const questions = [
    {
      text: "¿Qué valoras más en un amigo?",
      options: {
        A: { text: "Lealtad", characters: ["Frodo", "Sam", "Bilbo"] },
        B: { text: "Valentía", characters: ["Aragorn", "Éowyn"] },
        C: { text: "Sabiduría", characters: ["Gandalf", "Elrond"] },
        D: { text: "Astucia", characters: ["Gollum", "Saruman"] },
        E: { text: "Poder", characters: ["Sauron", "Smaug"] }
      }
    },
    {
      text: "¿Cuál es tu mayor fortaleza?",
      options: {
        A: { text: "Resiliencia", characters: ["Frodo", "Sam"] },
        B: { text: "Liderazgo", characters: ["Aragorn", "Thorin"] },
        C: { text: "Conocimiento", characters: ["Gandalf", "Elrond"] },
        D: { text: "Ingenio", characters: ["Gollum", "Saruman"] },
        E: { text: "Ambición", characters: ["Sauron", "Smaug"] }
      }
    },
    {
      text: "¿Qué te motiva en la vida?",
      options: {
        A: { text: "Amistad", characters: ["Frodo", "Sam", "Bilbo"] },
        B: { text: "Honor", characters: ["Aragorn", "Éowyn"] },
        C: { text: "Conocimiento", characters: ["Gandalf", "Elrond"] },
        D: { text: "Supervivencia", characters: ["Gollum", "Saruman"] },
        E: { text: "Dominio", characters: ["Sauron", "Smaug"] }
      }
    },
    {
      text: "¿Cómo enfrentas los desafíos?",
      options: {
        A: { text: "Con determinación", characters: ["Frodo", "Sam"] },
        B: { text: "Con coraje", characters: ["Aragorn", "Éowyn"] },
        C: { text: "Con sabiduría", characters: ["Gandalf", "Elrond"] },
        D: { text: "Con astucia", characters: ["Gollum", "Saruman"] },
        E: { text: "Con fuerza bruta", characters: ["Sauron", "Smaug"] }
      }
    },
    {
      text: "¿Qué lugar prefieres?",
      options: {
        A: { text: "La Comarca", characters: ["Frodo", "Sam", "Bilbo"] },
        B: { text: "Gondor", characters: ["Aragorn", "Éowyn"] },
        C: { text: "Rivendel", characters: ["Gandalf", "Elrond"] },
        D: { text: "Isengard", characters: ["Saruman"] },
        E: { text: "Mordor", characters: ["Sauron", "Smaug"] }
      }
    },
    {
      text: "¿Cuál es tu arma preferida?",
      options: {
        A: { text: "Espada", characters: ["Aragorn", "Éowyn"] },
        B: { text: "Bastón", characters: ["Gandalf", "Saruman"] },
        C: { text: "Arco", characters: ["Legolas", "Bard"] },
        D: { text: "Hacha", characters: ["Gimli", "Thorin"] },
        E: { text: "Anillo de poder", characters: ["Sauron", "Gollum"] }
      }
    },
    {
      text: "¿Qué criatura te representa mejor?",
      options: {
        A: { text: "Hobbit", characters: ["Frodo", "Sam", "Bilbo"] },
        B: { text: "Humano", characters: ["Aragorn", "Éowyn"] },
        C: { text: "Elfo", characters: ["Legolas", "Elrond"] },
        D: { text: "Enano", characters: ["Gimli", "Thorin"] },
        E: { text: "Dragón", characters: ["Smaug"] }
      }
    },
    {
      text: "¿Qué valoras más en una comunidad?",
      options: {
        A: { text: "Unidad", characters: ["Frodo", "Sam", "Bilbo"] },
        B: { text: "Justicia", characters: ["Aragorn", "Éowyn"] },
        C: { text: "Conocimiento", characters: ["Gandalf", "Elrond"] },
        D: { text: "Orden", characters: ["Saruman"] },
        E: { text: "Poder", characters: ["Sauron"] }
      }
    },
    {
      text: "¿Cuál es tu mayor debilidad?",
      options: {
        A: { text: "Inseguridad", characters: ["Frodo", "Bilbo"] },
        B: { text: "Impulsividad", characters: ["Éowyn", "Thorin"] },
        C: { text: "Arrogancia", characters: ["Gandalf", "Elrond"] },
        D: { text: "Codicia", characters: ["Gollum", "Smaug"] },
        E: { text: "Sed de poder", characters: ["Sauron", "Saruman"] }
      }
    },
    {
      text: "¿Qué tipo de líder eres?",
      options: {
        A: { text: "Servicial", characters: ["Frodo", "Sam"] },
        B: { text: "Valiente", characters: ["Aragorn", "Éowyn"] },
        C: { text: "Sabio", characters: ["Gandalf", "Elrond"] },
        D: { text: "Estratégico", characters: ["Saruman", "Galadriel"] },
        E: { text: "Dominante", characters: ["Sauron", "Thorin"] }
      }
    }
  ];
  
  let currentQuestionIndex = 0;
  const userAnswers = [];
  const characterScores = {};
  const STORAGE_KEY = 'tolkien_test_progress';
  
  // Inicializar el test
  window.onload = () => {
    document.getElementById('total-questions').textContent = questions.length;
    if (hasStoredProgress()) {
      document.getElementById('show-saved-result').style.display = 'inline';
      if (confirm("🔄 Tienes una sesión anterior. ¿Quieres continuar desde donde la dejaste?")) {
        loadProgress();
        showQuestion();
      } else {
        clearProgress();
        showQuestion();
      }
    } else {
      showQuestion();
    }
  };
  
  // Mostrar la pregunta actual
  function showQuestion() {
    if (currentQuestionIndex >= questions.length) {
      showResult();
      return;
    }
  
    const q = questions[currentQuestionIndex];
    document.getElementById('question-container').textContent = q.text;
    document.getElementById('current-question').textContent = currentQuestionIndex + 1;
    
    const optionsDiv = document.getElementById('options-container');
    optionsDiv.innerHTML = '';
  
    for (let key in q.options) {
      const btn = document.createElement('button');
      btn.textContent = `${key}) ${q.options[key].text}`;
      btn.onclick = () => selectOption(key);
      optionsDiv.appendChild(btn);
    }
  }
  
  // Seleccionar una opción
  function selectOption(optionKey) {
    const selected = questions[currentQuestionIndex].options[optionKey];
    userAnswers.push(selected.characters);
  
    selected.characters.forEach(char => {
      characterScores[char] = (characterScores[char] || 0) + 1;
    });
  
    currentQuestionIndex++;
    saveProgress();
    
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showResult();
    }
  }
  
  // Mostrar el resultado final
  function showResult() {
    document.getElementById('quiz-container').style.display = 'none';
    document.getElementById('progress-indicator').style.display = 'none';
    const resultDiv = document.getElementById('result-container');
    resultDiv.style.display = 'block';
  
    const maxScore = Math.max(...Object.values(characterScores));
    const topCharacters = Object.keys(characterScores).filter(char => characterScores[char] === maxScore);
  
    resultDiv.innerHTML = `
      <h2>Resultado Final</h2>
      <div class="top-characters">
        <h3>Tu personaje es: ${topCharacters.join(", ")}</h3>
        <p>Puntuación: ${maxScore} de ${questions.length}</p>
      </div>
      <h3>Todas las puntuaciones:</h3>
    `;
  
    // Ordenar personajes por puntuación
    const sortedCharacters = Object.keys(characterScores).sort((a, b) => 
      characterScores[b] - characterScores[a]
    );
  
    sortedCharacters.forEach(char => {
      const isTop = topCharacters.includes(char);
      resultDiv.innerHTML += `
        <p${isTop ? ' class="top-character"' : ''}>
          <strong>${char}</strong>: ${characterScores[char]} puntos
        </p>
      `;
    });
  
    resultDiv.innerHTML += `
      <button onclick="restartQuiz()">Reiniciar Test</button>
      <button onclick="shareResult()">Compartir Resultado</button>
    `;
    
    // Guardar resultado final
    saveProgress();
  }
  
  // Mostrar resultado guardado
  function showSavedResult() {
    if (!hasStoredProgress()) {
      alert("No hay resultados guardados.");
      return;
    }
  
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    const scores = saved.characterScores;
    
    if (!scores || Object.keys(scores).length === 0) {
      alert("No hay puntuaciones guardadas.");
      return;
    }
  
    const maxScore = Math.max(...Object.values(scores));
    const topCharacters = Object.keys(scores).filter(char => scores[char] === maxScore);
  
    document.getElementById('quiz-container').style.display = 'none';
    document.getElementById('progress-indicator').style.display = 'none';
    const resultDiv = document.getElementById('result-container');
    resultDiv.style.display = 'block';
    
    resultDiv.innerHTML = `
      <h2>Resultado Guardado</h2>
      <div class="top-characters">
        <h3>Tu personaje es: ${topCharacters.join(", ")}</h3>
        <p>Puntuación: ${maxScore}</p>
      </div>
      <h3>Todas las puntuaciones:</h3>
    `;
  
    // Ordenar personajes por puntuación
    const sortedCharacters = Object.keys(scores).sort((a, b) => 
      scores[b] - scores[a]
    );
  
    sortedCharacters.forEach(char => {
      const isTop = topCharacters.includes(char);
      resultDiv.innerHTML += `
        <p${isTop ? ' class="top-character"' : ''}>
          <strong>${char}</strong>: ${scores[char]} puntos
        </p>
      `;
    });
  
    resultDiv.innerHTML += `
      <button onclick="restartQuiz()">Reiniciar Test</button>
      <button onclick="continueSavedQuiz()">Continuar Test</button>
    `;
  }
  
  // Compartir resultado
  function shareResult() {
    const maxScore = Math.max(...Object.values(characterScores));
    const topCharacters = Object.keys(characterScores).filter(char => characterScores[char] === maxScore);
    
    const text = `¡Mi personaje en el Test de Personalidad de Tolkien es: ${topCharacters.join(", ")}!`;
    
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
  
  // Reiniciar el test
  function restartQuiz() {
    currentQuestionIndex = 0;
    userAnswers.length = 0;
    Object.keys(characterScores).forEach(key => delete characterScores[key]);
    
    clearProgress();
    
    document.getElementById('result-container').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    document.getElementById('progress-indicator').style.display = 'block';
    document.getElementById('show-saved-result').style.display = 'none';
    
    showQuestion();
  }
  
  // Continuar test guardado
  function continueSavedQuiz() {
    document.getElementById('result-container').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    document.getElementById('progress-indicator').style.display = 'block';
    
    showQuestion();
  }
  
  // Guardar progreso
  function saveProgress() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      currentQuestionIndex,
      userAnswers,
      characterScores,
      timestamp: new Date().getTime()
    }));
  }
  
  // Cargar progreso
  function loadProgress() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const data = JSON.parse(saved);
      currentQuestionIndex = data.currentQuestionIndex || 0;
      
      // Limpiar datos actuales
      userAnswers.length = 0;
      Object.keys(characterScores).forEach(key => delete characterScores[key]);
      
      // Cargar datos guardados
      if (data.userAnswers && data.userAnswers.length) {
        data.userAnswers.forEach(characters => userAnswers.push(characters));
      }
      
      if (data.characterScores) {
        Object.assign(characterScores, data.characterScores);
      }
      
      return true;
    }
    return false;
  }
  
  // Verificar si hay progreso guardado
  function hasStoredProgress() {
    return localStorage.getItem(STORAGE_KEY) !== null;
  }
  
  // Limpiar progreso
  function clearProgress() {
    localStorage.removeItem(STORAGE_KEY);
  }
  
  // Avanzar a la siguiente pregunta
  function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showResult();
    }
  }