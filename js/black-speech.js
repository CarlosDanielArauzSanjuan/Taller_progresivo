// // Playlist con canciones de la banda sonora de El Señor de los Anillos
// const playlist = [
//     {
//         title: "The Shire",
//         artist: "Howard Shore",
//         src: "https://audio-samples.github.io/samples/mp3/sample1.mp3" // URL de ejemplo
//     },
//     {
//         title: "Concerning Hobbits",
//         artist: "Howard Shore",
//         src: "https://audio-samples.github.io/samples/mp3/sample2.mp3" // URL de ejemplo
//     },
//     {
//         title: "The Ring Goes South",
//         artist: "Howard Shore",
//         src: "https://audio-samples.github.io/samples/mp3/sample3.mp3" // URL de ejemplo
//     },
//     {
//         title: "The Bridge of Khazad-dûm",
//         artist: "Howard Shore",
//         src: "https://audio-samples.github.io/samples/mp3/sample2.mp3" // URL de ejemplo
//     },
//     {
//         title: "May It Be",
//         artist: "Enya",
//         src: "https://audio-samples.github.io/samples/mp3/sample1.mp3" // URL de ejemplo
//     }
// ];

// // Estado del reproductor
// let audioPlayer;
// let currentTrackIndex = 0;
// let isPlaying = false;
// let isMuted = false;
// let volume = 0.5; // 50% de volumen por defecto

// // Función para inicializar el reproductor de música
// function initializeMusicPlayer() {
//     // Crear el elemento de audio
//     audioPlayer = new Audio();
//     audioPlayer.volume = volume;
    
//     // Cargar la primera canción
//     loadTrack(currentTrackIndex);
    
//     // Configurar los eventos de los botones
//     document.getElementById('play-pause').addEventListener('click', togglePlayPause);
//     document.getElementById('prev-track').addEventListener('click', playPreviousTrack);
//     document.getElementById('next-track').addEventListener('click', playNextTrack);
//     document.getElementById('mute-toggle').addEventListener('click', toggleMute);
    
//     // Eventos del reproductor de audio
//     audioPlayer.addEventListener('ended', () => {
//         playNextTrack();
//     });
    
//     audioPlayer.addEventListener('play', updatePlayPauseButton);
//     audioPlayer.addEventListener('pause', updatePlayPauseButton);
// }

// // Función para cargar una pista
// function loadTrack(trackIndex) {
//     if (trackIndex >= 0 && trackIndex < playlist.length) {
//         currentTrackIndex = trackIndex;
//         const track = playlist[currentTrackIndex];
        
//         audioPlayer.src = track.src;
//         audioPlayer.load();
        
//         updateNowPlaying();
//     }
// }

// // Función para reproducir o pausar
// function togglePlayPause() {
//     if (audioPlayer.paused) {
//         audioPlayer.play()
//             .catch(error => {
//                 console.error('Error al reproducir audio:', error);
//             });
//     } else {
//         audioPlayer.pause();
//     }
    
//     isPlaying = !audioPlayer.paused;
//     updatePlayPauseButton();
// }

// // Función para reproducir la pista anterior
// function playPreviousTrack() {
//     let newIndex = currentTrackIndex - 1;
//     if (newIndex < 0) {
//         newIndex = playlist.length - 1;
//     }
    
//     loadTrack(newIndex);
    
//     if (isPlaying) {
//         audioPlayer.play()
//             .catch(error => {
//                 console.error('Error al reproducir audio:', error);
//             });
//     }
// }

// // Función para reproducir la siguiente pista
// function playNextTrack() {
//     let newIndex = (currentTrackIndex + 1) % playlist.length;
//     loadTrack(newIndex);
    
//     if (isPlaying) {
//         audioPlayer.play()
//             .catch(error => {
//                 console.error('Error al reproducir audio:', error);
//             });
//     }
// }

// // Función para activar/desactivar el silencio
// function toggleMute() {
//     isMuted = !isMuted;
//     audioPlayer.muted = isMuted;
//     updateMuteButton();
// }

// // Función para actualizar el botón de reproducción/pausa
// function updatePlayPauseButton() {
//     const playPauseButton = document.getElementById('play-pause');
//     const iconElement = playPauseButton.querySelector('i');
    
//     if (audioPlayer.paused) {
//         iconElement.className = 'fas fa-play';
//     } else {
//         iconElement.className = 'fas fa-pause';
//     }
// }

// // Función para actualizar el botón de silencio
// function updateMuteButton() {
//     const muteButton = document.getElementById('mute-toggle');
//     const iconElement = muteButton.querySelector('i');
    
//     if (isMuted) {
//         iconElement.className = 'fas fa-volume-mute';
//     } else {
//         iconElement.className = 'fas fa-volume-up';
//     }
// }

// // Función para actualizar la información de la canción actual
// function updateNowPlaying() {
//     const nowPlayingElement = document.getElementById('now-playing');
//     const track = playlist[currentTrackIndex];
    
//     nowPlayingElement.textContent = `${track.title} - ${track.artist}`;
// }

// // Exportar funciones para uso en otros archivos si es necesario
// window.musicPlayer = {
//     play: () => {
//         if (audioPlayer.paused) {
//             togglePlayPause();
//         }
//     },
//     pause: () => {
//         if (!audioPlayer.paused) {
//             togglePlayPause();
//         }
//     },
//     next: playNextTrack,
//     previous: playPreviousTrack,
//     setVolume: (newVolume) => {
//         volume = Math.max(0, Math.min(1, newVolume));
//         audioPlayer.volume = volume;
//     }
// };

// // Inicializar el reproductor de música cuando se cargue la página
// document.addEventListener('DOMContentLoaded', initializeMusicPlayer);

document.addEventListener("DOMContentLoaded", () => {
    const ambientSound = new Audio('../storage/sounds/blach_speech.mp3');
    ambientSound.volume = 0;
    ambientSound.preload = "auto";
    ambientSound.loop = true;
  
    let fadeInterval;
  
    const fadeInAudio = () => {
      ambientSound.play().then(() => {
        let vol = 0;
        clearInterval(fadeInterval);
        fadeInterval = setInterval(() => {
          if (vol < 0.4) {
            vol += 0.02;
            ambientSound.volume = vol;
          } else {
            clearInterval(fadeInterval);
            ambientSound.volume = 0.4;
          }
        }, 200);
      }).catch((error) => {
        const tryPlay = () => {
          fadeInAudio();
          document.removeEventListener("click", tryPlay);
          document.removeEventListener("keydown", tryPlay);
          document.removeEventListener("mousedown", tryPlay);
        };
        document.addEventListener("click", tryPlay);
        document.addEventListener("keydown", tryPlay);
        document.addEventListener("mousedown", tryPlay);
      });
    };
  
    const fadeOutAndStop = () => {
      clearInterval(fadeInterval);
      let vol = ambientSound.volume;
      const fadeOut = setInterval(() => {
        if (vol > 0.02) {
          vol -= 0.02;
          ambientSound.volume = vol;
        } else {
          clearInterval(fadeOut);
          ambientSound.volume = 0;
          ambientSound.pause();
        }
      }, 150);
    };
  
    ambientSound.addEventListener('timeupdate', () => {
      if (ambientSound.currentTime < 0.5 && ambientSound.volume < 0.05) {
        fadeInAudio();
      }
    });
  
    fadeInAudio();
  
    // ✅ DETENER audio al hacer login exitoso
    const accessForm = document.getElementById('accessForm');
    const loginContainer = document.querySelector('.login-container');
  
    accessForm.addEventListener('submit', function (event) {
      event.preventDefault();
      const accessKey = document.getElementById('accessKey').value.toLowerCase();
  
      if (accessKey === "mellon" || accessKey === "amigo") {
        loginContainer.classList.add('login-success');
        fadeOutAndStop(); // 🚫 Detener audio con fade-out
  
        // Aquí puedes lanzar sonidos adicionales si quieres
        const doorSound = new Audio('../storage/sounds/break.mp3');
        doorSound.playbackRate += 1.2;
        doorSound.play();
      } else {
        const errorMsg = document.getElementById('errorMsg');
        errorMsg.style.display = 'block';
      }
    });
  });