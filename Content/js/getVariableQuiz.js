const quiz = document.getElementsByClassName('a-quiz');

function inicio() {
    for (let i = 0; i < quiz.length; i++) {
        quiz[i].addEventListener('click', getQuiz);
    }
}

function getQuiz(e){
    let parametro = e.path[1].dataset.target;
    validarQuizLocalStorage( parametro );
}


// Validar local storage
function validarQuizLocalStorage( parametro ) {

    // Revisamos los valores iniciales de LocalStorage
    if (localStorage.getItem('quiz') !== null) {
        localStorage.removeItem('quiz');
        agregarQuizLocalStorage(parametro);

    } else {
        agregarQuizLocalStorage(parametro);
    }
}

function agregarQuizLocalStorage(valor) {
    localStorage.setItem('quiz', valor);
}


inicio();