/*
 - 1 Pegar a nota que o usuario selecionou
 - 2 Quando o usuario clicar em submit deve esconder a tela das notas e aparecer a tela dos agradecimento 
  - 3 na tela de agradecimento deve aparecer na msg a nota que o usuario selecionou
*/

const sectionCardRating = document.querySelector(".card-rating");
const sectionCardNote = document.querySelector(".card-note");
const btnSubmit = document.getElementById("btn-submit");
const btnVoltar = document.getElementById("btn-voltar");

btnSubmit.addEventListener("click", () => {
  mostrarResposta();
});

function mostrarResposta() {
  sectionCardNote.classList.remove("none");
  sectionCardRating.classList.add("none");
}

btnVoltar.addEventListener("click", () => {
  mostrarTelaPrincipal();
});

function mostrarTelaPrincipal() {
  sectionCardRating.classList.remove("none");
  sectionCardNote.classList.add("none");
}

let btnNotes = document.querySelectorAll(".btn-notes");

btnNotes.forEach((note) => {
  note.addEventListener("click", () => {
    let resposta = document.querySelector("span");
    resposta.innerText = note.innerHTML;
  });
});
