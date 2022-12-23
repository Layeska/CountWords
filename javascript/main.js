
let textArea = document.querySelector("#textArea");
let caracter = document.querySelector("#characters");
let palabra = document.querySelector("#words");
let oracion = document.querySelector("#sentenses");
let parrafo = document.querySelector("#paragraphs");


textArea.addEventListener("input", () => {
    caracter.textContent = textArea.value.length;
    let texto = textArea.value.trim();

    palabra.textContent = texto.split(/\s+/).filter((item) => item).length;
    oracion.textContent = texto.split(/[.!|?]+/g).length-1;

    parrafo.textContent = texto.replace(/\n$/gm, "").split(/\n/).length;
});


function changeLanguaje(lang) {
    location.hash = lang;
    location.reload();
};

let languaje = {
    eng: {
        title: "The Word Counter",
        text: "Write in the box and the words, sentences, letters and paragraphs written will be counted",
        p1: "Characters",
        p2: "Words",
        p3: "Sentences",
        p4: "Paragraphs"
    },
    es: {
        title: "El Contador de Palabras",
        text: "Escriba en el recuadro y se contarán las palabras, oraciones, letras y párrafos escritos",
        p1: "Caracteres",
        p2: "Palabras",
        p3: "Oraciones",
        p4: "Párrafos"
    }
};

let titleHTML = document.querySelector(".title");
let subtitle = document.querySelector(".subtitle");
let character = document.querySelector("#character");
let words = document.querySelector("#word");
let sentences = document.querySelector("#sentense");
let paragraphs = document.querySelector("#paragraph");
let btn = document.querySelector("#button");
let btn2 = document.querySelector("#es");

if(window.location.hash == "#es") {
    titleHTML.textContent = languaje.es.title;
    subtitle.textContent = languaje.es.text;
    character.textContent = languaje.es.p1;
    words.textContent = languaje.es.p2;
    sentences.textContent = languaje.es.p3;
    paragraphs.textContent = languaje.es.p4;
    btn.style.opacity = 0.5;
} else {
    titleHTML.textContent = languaje.eng.title;
    subtitle.textContent = languaje.eng.text;
    character.textContent = languaje.eng.p1;
    words.textContent = languaje.eng.p2;
    sentences.textContent = languaje.eng.p3;
    paragraphs.textContent = languaje.eng.p4;
    btn2.style.opacity = 0.5;
}