const url="https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json"

async function vizulizarInformacaoGlobal(){

    const res = await fetch(url)
const dados = await res.json()
console.log(dados)

const paragrafo = document.createElement('p')

paragrafo.classList.add('graficos-container__texto')

paragrafo.innerHTML = `Neymar
${dados.total_pessoas_conectadas}`

const container = document.getElementById("grafico-container")
container.appendChild(paragrafo)

}


vizulizarInformacaoGlobal();

