const content = document.getElementsByClassName('apiModal');
const contentVideo = document.querySelector('.content-video iframe');

iniciar();

function iniciar() {
  for (let i = 0; i < content.length; i++) {
    content[i].addEventListener('click', cerrarVideo);
  }
}

function cerrarVideo(e) {
  console.log('evento', e);
}



// $(".modal").on('hidden.bs.modal', function (e) {
//     $(".modal-body iframe").attr("src", $(".modal-body iframe").attr("src"));
// });

// $(function(){
//     $('.modal').on('hidden.bs.modal', function (e) {
//       $iframe = $(this).find("iframe");
//       $iframe.attr("src", $iframe.attr("src"));
//     });
//   });