const form = document.getElementById('form')

const atividades = []
const somarNotas = []
const aprovado = '<span class="aprovado"> Aprovado</span>'
const reprovado = '<span class="reprovado">Reprovado</span>'

let linhas = ''

form.addEventListener('submit', function (e) {
  e.preventDefault()

  adicionarLinha()
  atualizaTabela()
  atualizaMedia()
})

function adicionarLinha() {
  let atividade = document.getElementById('ativity-name')
  let nota = document.getElementById('test-grade')

  if (!atividades.includes(atividade.value)) {
    atividades.push(atividade.value)
    somarNotas.push(Number(nota.value))

    atividades.push(atividade.value)
    somarNotas.push(Number(nota.value))

    let linha = `<tr>`
    linha += `<td> ${atividade.value}</td>`
    linha += `<td> ${nota.value}</td>`
    linha += `<td> ${nota.value >= 7 ? aprovado : reprovado}</td>`
    linha += `</tr>`

    linhas += linha

    atividade.value = ''
    nota.value = ''
  } else {
    alert(`A Atividade ${atividade.value}, já foi incluida anteriormente`)
  }
}

function atualizaTabela() {
  const corpoTabela = document.querySelector('tbody')
  corpoTabela.innerHTML = linhas
}

function atualizaMedia() {
  const totalNotas = somarNotas.reduce(function (a, b) {
    return a + b
  })

  const totalProvas = atividades.length

  let media = totalNotas / totalProvas

  let notaFinal = document.getElementById('final-grade')
  notaFinal.innerHTML = media.toFixed(2)

  let resultado = document.getElementById('resultado')
  resultado.innerHTML = `${media >= 7 ? aprovado : reprovado}`
}
