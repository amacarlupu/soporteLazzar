const body = document.querySelector('body');
const templateQuiz = document.getElementById('template-quiz').content;
const fragment = document.createDocumentFragment();
const load = document.querySelector('.load');

function inicio() {
    document.addEventListener('DOMContentLoaded', obtenerQuizId);
}

async function fetchQuizes(parametro) {
    try {
        const resp = await fetch(`http://localhost/cursoPHP/API_quizes/dataQuiz/${parametro}`);
        const data = await resp.json();
        load.classList.toggle('active');
        renderCards(data);
    } catch (err) {
        console.log(err);
    }
}

function renderCards(data) {
    data.forEach(quiz => {
        templateQuiz.querySelector('h1').textContent = quiz.tituloQuiz;
        templateQuiz.querySelector('iframe').setAttribute('src', quiz.urlQuiz);
        const newQuiz = templateQuiz.cloneNode(true);
        fragment.appendChild(newQuiz);
    });

    body.appendChild(fragment);
}


// Obtener valor del LocalStorage
function obtenerQuizId() {
    let quiz;
    load.classList.remove('active');
    quiz = localStorage.getItem('quiz');
    fetchQuizes(quiz);
}

inicio();