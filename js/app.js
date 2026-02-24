'use strict'
import { getCourses } from "./api.js";

function criarTelaHome() {

  const containerHome = document.getElementById('container-home')

  /* ===== fraseImagem ===== */
  const fraseImagem = document.createElement('div');
  fraseImagem.className = 'fraseImagem';

  const p = document.createElement('p');
  p.innerHTML = 'Escolha um <span>curso</span> <br> para gerenciar';

  const imgDevices = document.createElement('img');
  imgDevices.src = 'img/devices.svg';
  imgDevices.alt = '';

  fraseImagem.appendChild(p);
  fraseImagem.appendChild(imgDevices);

  /* ===== imagem estudante ===== */
  const imgStudent = document.createElement('img');
  imgStudent.src = 'img/studant.svg';
  imgStudent.alt = '';

  /* ===== cursos ===== */
  const containerCursos = document.createElement('div');
  containerCursos.className = 'cursos';
  containerCursos.id = 'cursos'

  containerHome.appendChild(fraseImagem);
  containerHome.appendChild(imgStudent);
  containerHome.appendChild(containerCursos);
}

criarTelaHome()

function criarCurso(cursos) {
  const containerCursos = document.getElementById('cursos')

  const curso = document.createElement('div');
  curso.className = 'curso';

  const id = cursos.id
  console.log(id)

  const img = document.createElement('img');
  if (id == 1) {
    img.src = './img/icon-ds.svg';
    img.alt = 'icon ds';
  } else {
    img.src = './img/icon-redes.svg';
    img.alt = 'icon redes';
  }

  const span = document.createElement('span');
  span.textContent = cursos.sigla;

  curso.addEventListener('click', () => {
    document.getElementById("container-home").style.display = "none";
    criarTelaAlunos()
  })

  curso.appendChild(img);
  curso.appendChild(span);

  containerCursos.appendChild(curso)
}

async function carregarCursos() {
  console.log('antes do fetch')
  const cursos = await getCourses()
  console.log('depois do fetch', cursos)
  cursos.forEach(criarCurso)
}
carregarCursos()


/* ALUNOS */

function criarTelaAlunos() {

  const header = document.getElementById('header')
  // container principal
  const headerInformations = document.createElement("div");
  headerInformations.classList.add("headerInformations");

  // span Status
  const statusSpan = document.createElement("span");
  statusSpan.textContent = "Status";

  // div legenda
  const legenda = document.createElement("div");
  legenda.classList.add("legenda");

  // span LEGENDA
  const legendaTitle = document.createElement("span");
  legendaTitle.textContent = "LEGENDA";

  // função pra criar cada item da legenda
  function criarInformacao(corClasse, texto) {
    const information = document.createElement("div");
    information.classList.add("information");

    const quadrado = document.createElement("div");
    quadrado.classList.add("quadrado", corClasse);

    const spanTexto = document.createElement("span");
    spanTexto.textContent = texto;

    information.appendChild(quadrado);
    information.appendChild(spanTexto);

    return information;
  }

  // itens da legenda
  const cursando = criarInformacao("azul", "Cursando");
  const finalizado = criarInformacao("amarelo", "Finalizado");

  // montando a legenda
  legenda.appendChild(legendaTitle);
  legenda.appendChild(cursando);
  legenda.appendChild(finalizado);

  // montando o headerInformations
  headerInformations.appendChild(statusSpan);
  headerInformations.appendChild(legenda);

  // adicionando no header
  header.appendChild(headerInformations);




  const containerAlunos = document.getElementById("container-alunos");
  containerAlunos.style.display = 'flex'

  // span title
  const title = document.createElement("span");
  title.className = "title";
  title.textContent = "Desenvolvimento de Sistemas";

  // div cards
  const cards = document.createElement("div");
  cards.className = "cards";

  // div card
  const card = document.createElement("div");
  card.className = "card";

  // img
  const img = document.createElement("img");
  img.src = "img/icon-profile.svg";
  img.alt = "";

  // span nome
  const nome = document.createElement("span");
  nome.textContent = "Guilherme Moreira de Souza";

  // montagem
  card.appendChild(img);
  card.appendChild(nome);

  cards.appendChild(card);

  containerAlunos.appendChild(title);
  containerAlunos.appendChild(cards);
}

// criarTelaAlunos()
