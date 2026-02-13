'use strict'

function criarHome() {
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
const cursos = document.createElement('div');
cursos.className = 'cursos';

function criarCurso(icon, nome) {
  const curso = document.createElement('div');
  curso.className = 'curso';

  const img = document.createElement('img');
  img.src = icon;
  img.alt = '';

  const span = document.createElement('span');
  span.textContent = nome;

  curso.appendChild(img);
  curso.appendChild(span);

  return curso;
}

cursos.appendChild(criarCurso('img/icon-ds.svg', 'DS'));
cursos.appendChild(criarCurso('img/icon-redes.svg', 'REDES'));

containerHome.appendChild(fraseImagem);
containerHome.appendChild(imgStudent);
containerHome.appendChild(cursos);

}

criarHome()