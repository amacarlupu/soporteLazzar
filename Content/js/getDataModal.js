const modal = document.getElementsByClassName('apiModal');
const cursosContainer = document.getElementsByClassName('cursos-container')[0];

inicio();

function inicio() {
    for (let i = 0; i < modal.length; i++) {
        modal[i].addEventListener('click', getModal);
    }
}


function getModal(event) {
    event.preventDefault();
    let modalData = event.path[1].dataset.target;
    let idModal = modalData.slice(1);

    ejecutarApiModal(idModal);
}

async function ejecutarApiModal(id) {

    const respuesta = await apiModal(id);
    const dato = respuesta[0];
    // console.log('respuesta: ', dato);
    insertarModal(dato);
}

async function apiModal(id) {
    // console.log('id: ', id);
    const respuesta = await fetch(`http://localhost/cursoPHP/API_php/dataModal/${id}`);
    const datos = await respuesta.json();
    return datos;
}

function insertarModal(dato) {

    // Variable que contiene los datos a insertar
    const content = document.createElement('div');

    // Darle forma con template literals
    content.innerHTML = `
        <div class="modal fade modalCurso apiPhp" id="${dato.idModal}" tabindex="-1" role="dialog" data-backdrop="static"
        aria-labelledby="${dato.idModal}" aria-hidden="true" >
            <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="${dato.idModal}">${dato.desModal}</h5>
                        <button type="button" class="close btn-cerrar" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body content-video">
                        <iframe src="${dato.urlVideo}"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Añadir al elemento padre
    cursosContainer.appendChild(content);

    // Activar el modal
    const activar = new bootstrap.Modal(document.querySelector(`#${dato.idModal}`), {
        backdrop: 'static', keyboard: false
    });
    activar.show();
    final(); // Funcio para cerrar modal
}


// Funcion para cerra video del modal, se activa al presionar la 'X'
function final() {
    const cerrarVideo = document.querySelectorAll('.btn-cerrar');
    for (let i = 0; i < cerrarVideo.length; i++) {
        cerrarVideo[i].addEventListener('click', cerrarVideoModal);
    }
}


function cerrarVideoModal(e) {
    e.preventDefault();
    $('.apiPhp').on('hidden.bs.modal', function (e) {
        $iframe = $(this).find("iframe");
        $iframe.attr("src", $iframe.attr("src"));
    });
}

