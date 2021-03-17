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
let ytOrdenCompra07;

let ytIngresoAlmacen01;
let ytIngresoAlmacen02;

let ytRegistroCompras01;
let ytRegistroCompras02;

let ytGuiaRemision01;

let ytFacturacion01;
let ytFacturacion02;
let ytFacturacion03;
let ytFacturacion04;
let ytFacturacion05;
let ytFacturacion06;
let ytFacturacion07;

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
    },
  });

  ytOrdenCompra02 = new YT.Player("ytOrdenCompra02", {
    height: "420",
    width: "720",
    videoId: "robVjbDM2DQ",
    events: {
    },
  });

  ytOrdenCompra07 = new YT.Player("ytOrdenCompra07", {
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

  ytFacturacion01 = new YT.Player("ytFacturacion01", {
    height: "420",
    width: "720",
    videoId: "rfD578c_g5g",
    events: {
    },
  });

  ytFacturacion02 = new YT.Player("ytFacturacion02", {
    height: "420",
    width: "720",
    videoId: "nM_v4Ft8McM",
    events: {
    },
  });

  ytFacturacion03 = new YT.Player("ytFacturacion03", {
    height: "420",
    width: "720",
    videoId: "sfElyYxCJxs",
    events: {
    },
  });

  ytFacturacion04 = new YT.Player("ytFacturacion04", {
    height: "420",
    width: "720",
    videoId: "uQTnihDsPvo",
    events: {
    },
  });

  ytFacturacion05 = new YT.Player("ytFacturacion05", {
    height: "420",
    width: "720",
    videoId: "VazaFc5D9ho",
    events: {
    },
  });

  ytFacturacion06 = new YT.Player("ytFacturacion06", {
    height: "420",
    width: "720",
    videoId: "32c_wv4BeaE",
    events: {
    },
  });

  ytFacturacion07 = new YT.Player("ytFacturacion07", {
    height: "420",
    width: "720",
    videoId: "wDp_k3EXg0k",
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
    ytOrdenCompra07.stopVideo();

    ytIngresoAlmacen01.stopVideo();
    ytIngresoAlmacen02.stopVideo();

    ytRegistroCompras01.stopVideo();
    ytRegistroCompras02.stopVideo();
    
    ytGuiaRemision01.stopVideo();

    ytFacturacion01.stopVide0();
    ytFacturacion02.stopVide0();
    ytFacturacion03.stopVide0();
    ytFacturacion04.stopVide0();
    ytFacturacion05.stopVide0();
    ytFacturacion06.stopVide0();
    ytFacturacion07.stopVide0();
   }
}
