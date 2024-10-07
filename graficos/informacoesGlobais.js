const url="https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json"

async function vizulizarInformacaoGlobal(){

    const res = await fetch(url)
const dados = await res.json()
console.log(dados)
const pessoasNomundo = (dados.total_pessoas_mundo / 1e9)
const horas = parseInt(dados.tempo_medio)
const minutos = Math.round((dados.tempo_medio - horas)*100)

const paragrafo = document.createElement('p')

paragrafo.classList.add('graficos-container__texto')

paragrafo.innerHTML = `Neymar
<span> ${pessoasNomundo} </span> de pessoas e aproximadamente
<span> ${dados.total_pessoas_conectadas} </span> estão conectadas em alguma rede social e passam em média
<span> ${horas} </span> : <span>${minutos} </span> horas conectadas`


const container = document.getElementById("grafico-container")
container.appendChild(paragrafo)

}


vizulizarInformacaoGlobal();

