const modalCursos = document.getElementsByClassName("modal");
recorrerModal();


function recorrerModal(){
  for (let i=0; i<modalCursos.length;i++){
    modalCursos[i].addEventListener("click", detenerVideo);
  }
}

// Load the IFrame Player API code asynchronously.
var tag = document.createElement("script");
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


let player;
let playerODBC;
let playerFormatos;

let ytOrdenCompra01;
let ytOrdenCompra02;
let ytOrdenCompra03;
let ytIngresoAlmacen01;
let ytIngresoAlmacen02;
let ytRegistroCompras01;
let ytRegistroCompras02;
let ytGuiaRemision01;


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

  ytOrdenCompra01 = new YT.Player("ytOrdenCompra01", {
    height: "420",
    width: "720",
    videoId: "OQ4TzJh_HUc",
    events: {
      // 'onReady': onPlayerReady,
      // 'onStateChange': onPlayerStateChange
    },
  });

  ytOrdenCompra02 = new YT.Player("ytOrdenCompra02", {
    height: "420",
    width: "720",
    videoId: "robVjbDM2DQ",
    events: {
    },
  });

  ytOrdenCompra03 = new YT.Player("ytOrdenCompra03", {
    height: "420",
    width: "720",
    videoId: "P-AGlQizshc",
    events: {
    },
  });

  ytIngresoAlmacen01 = new YT.Player("ytIngresoAlmacen01", {
    height: "420",
    width: "720",
    videoId: "Onxnp1e-X8Y",
    events: {
    },
  });

  ytIngresoAlmacen02 = new YT.Player("ytIngresoAlmacen02", {
    height: "420",
    width: "720",
    videoId: "UBHQPrXfdEw",
    events: {
    },
  });

  ytRegistroCompras01 = new YT.Player("ytRegistroCompras01", {
    height: "420",
    width: "720",
    videoId: "g74-3EeJdRI",
    events: {
    },
  });

  ytRegistroCompras02 = new YT.Player("ytRegistroCompras02", {
    height: "420",
    width: "720",
    videoId: "Nw2ZzB_0jQw",
    events: {
    },
  });

  ytGuiaRemision01 = new YT.Player("ytGuiaRemision01", {
    height: "420",
    width: "720",
    videoId: "WEWuo8HmpzU",
    events: {
    },
  });
}

// Funcion que pausa el video cuando el modal es "none"
function detenerVideo(event) {

  let contentModal = event.path[5].style.display;

  if (contentModal === "block") {
    player.stopVideo();
    playerODBC.stopVideo();
    playerFormatos.stopVideo();

    ytOrdenCompra01.stopVideo();
    ytOrdenCompra02.stopVideo();
    ytOrdenCompra03.stopVideo();
    ytIngresoAlmacen01.stopVideo();
    ytIngresoAlmacen02.stopVideo();
    ytRegistroCompras01.stopVideo();
    ytRegistroCompras02.stopVideo();
    ytGuiaRemision01.stopVideo();
   }
}
