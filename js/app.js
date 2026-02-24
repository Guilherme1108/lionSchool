'use strict'
import { getCourses, getStudentsByCourse, getStudentById } from './api.js'

let telaAtual = 'home'

function criarTelaHome() {

  const containerHome = document.getElementById('container-home')

  /* ===== fraseImagem ===== */
  const fraseImagem = document.createElement('div')
  fraseImagem.className = 'fraseImagem'

  const p = document.createElement('p')
  p.innerHTML = 'Escolha um <span>curso</span> <br> para gerenciar'

  const imgDevices = document.createElement('img')
  imgDevices.src = 'img/devices.svg'
  imgDevices.alt = ''

  fraseImagem.appendChild(p)
  fraseImagem.appendChild(imgDevices)

  /* ===== imagem estudante ===== */
  const imgStudent = document.createElement('img')
  imgStudent.src = 'img/studant.svg'
  imgStudent.alt = ''

  /* ===== cursos ===== */
  const containerCursos = document.createElement('div')
  containerCursos.className = 'cursos'
  containerCursos.id = 'cursos'

  containerHome.appendChild(fraseImagem)
  containerHome.appendChild(imgStudent)
  containerHome.appendChild(containerCursos)
}
criarTelaHome()

function criarCurso(cursos) {
  const containerCursos = document.getElementById('cursos')

  const curso = document.createElement('div')
  curso.className = 'curso'

  const id = cursos.id

  const img = document.createElement('img')
  if (id == 1) {
    img.src = './img/icon-ds.svg'
    img.alt = 'icon ds'
  } else {
    img.src = './img/icon-redes.svg'
    img.alt = 'icon redes'
  }

  const span = document.createElement('span')
  span.textContent = cursos.sigla

  curso.addEventListener('click', () => {
    document.getElementById('container-home').style.display = 'none'
    document.getElementById('container-alunos').style.display = 'flex'
    document.getElementById('headerInformations').style.display = 'flex'
    carregarAlunos(id)
    telaAtual = 'alunos'

    document.getElementById('textback').textContent = 'Voltar'
  })

  curso.appendChild(img)
  curso.appendChild(span)

  containerCursos.appendChild(curso)
}

async function carregarCursos() {
  const cursos = await getCourses()
  cursos.forEach(criarCurso)
}
carregarCursos()

/* SEGUNDA PARTE DO HEADER */
function criarDetalhesDoHeader() {
  const header = document.getElementById('header')

  const divVoltar = document.getElementById('back')
  divVoltar.addEventListener('click', () => {

    if (telaAtual === 'aluno') {
      // volta para alunos
      document.getElementById('container-aluno').style.display = 'none'
      document.getElementById('container-aluno').innerHTML = ''

      document.getElementById('container-alunos').style.display = 'flex'
      document.getElementById('headerInformations').style.display = 'flex'

      telaAtual = 'alunos'
      return
    }

    if (telaAtual === 'alunos') {
      // volta para home
      document.getElementById('container-alunos').style.display = 'none'
      document.getElementById('headerInformations').style.display = 'none'

      const cards = document.getElementById('cards')
      cards.innerHTML = ''

      document.getElementById('textback').textContent = 'Sair'

      document.getElementById('container-home').style.display = 'flex'
      telaAtual = 'home'
    }
  })

  // container principal
  const headerInformations = document.createElement('div')
  headerInformations.classList.add('headerInformations')
  headerInformations.id = 'headerInformations'

  // span Status
  const statusSpan = document.createElement('span')
  statusSpan.textContent = 'Status'

  // div legenda
  const legenda = document.createElement('div')
  legenda.classList.add('legenda')

  // span LEGENDA
  const legendaTitle = document.createElement('span')
  legendaTitle.textContent = 'LEGENDA'

  // função pra criar cada item da legenda
  function criarInformacao(corClasse, texto) {
    const information = document.createElement('div')
    information.classList.add('information')

    const quadrado = document.createElement('div')
    quadrado.classList.add('quadrado', corClasse)

    const spanTexto = document.createElement('span')
    spanTexto.textContent = texto

    information.appendChild(quadrado)
    information.appendChild(spanTexto)

    return information
  }

  // itens da legenda
  const cursando = criarInformacao('azul', 'Cursando')
  const finalizado = criarInformacao('amarelo', 'Finalizado')

  // montando a legenda
  legenda.appendChild(legendaTitle)
  legenda.appendChild(cursando)
  legenda.appendChild(finalizado)

  // montando o headerInformations
  headerInformations.appendChild(statusSpan)
  headerInformations.appendChild(legenda)

  // adicionando no header
  header.appendChild(headerInformations)
}
criarDetalhesDoHeader()


/* ALUNOS */

function criarTelaAlunos() {

  const containerAlunos = document.getElementById('container-alunos')

  // span title
  const title = document.createElement('span')
  title.className = 'title'
  title.textContent = 'Desenvolvimento de Sistemas'

  // div cards
  const cards = document.createElement('div')
  cards.className = 'cards'
  cards.id = 'cards'

  containerAlunos.appendChild(title)
  containerAlunos.appendChild(cards)
}
criarTelaAlunos()

function criarCardAluno(aluno) {
  // div cards
  const cards = document.getElementById('cards')

  // div card
  const card = document.createElement('div')
  card.className = 'card'

  card.addEventListener('click', () => {
    document.getElementById('container-alunos').style.display = 'none'
    document.getElementById('headerInformations').style.display = 'none'

    carregarAluno(id)
    document.getElementById('container-aluno').style.display = 'flex'
    telaAtual = 'aluno'
  })

  const id = aluno.id

  // img
  const img = document.createElement('img')
  img.src = aluno.foto
  img.alt = 'foto do aluno'

  const divAreaDoNome = document.createElement('div')

  // span nome
  const nome = document.createElement('span')
  nome.textContent = aluno.nome

  // montagem
  divAreaDoNome.appendChild(nome)


  card.appendChild(img)
  card.appendChild(divAreaDoNome)

  cards.appendChild(card)

}

async function carregarAlunos(id) {
  const alunos = await getStudentsByCourse(id)
  alunos.forEach(criarCardAluno)
}

/* ALUNO */
function criarTelaAluno(aluno) {
  console.log(aluno)

  const containerAluno = document.getElementById('container-aluno')

  const profile = document.createElement('div')
  profile.className = 'profile'
  profile.id = 'profile'

  const img = document.createElement('img')
  img.src = aluno.foto
  img.alt = 'Foto do aluno'

  const span = document.createElement('span')
  span.textContent = aluno.nome

  profile.appendChild(img)
  profile.appendChild(span)

  containerAluno.appendChild(profile)

  const graphics = document.createElement('div')
  graphics.className = 'graphics'

  aluno.desempenho.forEach(({ categoria, valor }) => {
    const dataGraphics = document.createElement('div')
    dataGraphics.className = 'dataGraphics'

    const number = document.createElement('span')
    number.className = 'number'
    number.textContent = valor

    const bar = document.createElement('div')
    bar.className = 'bar'

    const filledBar = document.createElement('div')
    filledBar.className = 'filledBar'
    filledBar.style.height = `${valor}%`

    if(number < 50) {
      filledBar.style.backgroundColor = '#C11010'
    } else if (number > 50 && number < 75) {
      filledBar.style.backgroundColor = '#E5B657'
    } else {
      filledBar.style.backgroundColor = '#3347B0'
    }

    bar.appendChild(filledBar)

    const matter = document.createElement('span')
    matter.className = 'matter'
    matter.textContent = categoria

    dataGraphics.appendChild(number)
    dataGraphics.appendChild(bar)
    dataGraphics.appendChild(matter)

    graphics.appendChild(dataGraphics)
  })

  containerAluno.appendChild(graphics)

}

async function carregarAluno(id) {
  const aluno = await getStudentById(id)
  criarTelaAluno(aluno)
}