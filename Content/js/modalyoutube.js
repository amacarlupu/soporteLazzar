const modal = document.querySelector("#modalInstalaciones"); // Obtiene el valor del modal
const modal2 = document.querySelector("#modalConexionODBC");
const modal3 = document.querySelector("#modalFormatos");

// Evento que escucha el click el modal para cerrar el modal y detener el video
modal.addEventListener("click", detener);
modal2.addEventListener("click", detener);

// Load the IFrame Player API code asynchronously.
var tag = document.createElement("script");
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Replace the 'ytplayer' element with an <iframe> and
// YouTube player after the API code downloads.
let player;
let playerODBC;
let playerFormatos;

function onYouTubePlayerAPIReady() {
  player = new YT.Player("ytplayer", {
    height: "420",
    width: "720",
    videoId: "mVIaLmjNEJg",
    events: {
      // 'onReady': onPlayerReady,
      // 'onStateChange': onPlayerStateChange
    },
  });

  playerODBC = new YT.Player("ytplayerODBC", {
    height: "420",
    width: "720",
    videoId: "vF-plcWXUI4",
    events: {
    },
  });

  playerFormatos = new YT.Player("ytplayerFormatos", {
    height: "420",
    width: "720",
    videoId: "cgULctNFSzE",
    events: {
    },
  });
}

// // Funcion que pausa el video cuando el modal es "none"
function detener(event) {

  let contentModal = event.path[5].style.display;

  console.log('contentModal', event);

  if (contentModal === "block") {
    player.stopVideo();
    playerODBC.stopVideo();
    playerFormatos.stopVideo();

//         if( player ){
//             player.stopVideo();
//         }
//         // player.pauseVideo();
//        if( playerODBC ){
//         playerODBC.stopVideo();
//        }
   }
}
