const url1="https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json"

async function redesSocias(){

    const res1 = await fetch(url1)
const dados1 = await res1.json()
console.log(dados1)

const Facebook = (dados1.Facebook)
const Youtube = (dados1.Youtube)
const WeChat = (dados1.WeChat)
const Tiktok = (dados1.Tiktok)
const WhatsApp = (dados1.WhatsApp)


const paragrafo1 = document.createElement('p')

paragrafo1.classList.add('graficos-container__texto')

paragrafo1.innerHTML = `Neymar
Quantidade de Pessoas que utilizam o Face
<span> ${Facebook} </span> 
Quantidade de Pessoas que utilizam o Tiktok
<span> ${Tiktok} </span>
Quantidade de Pessoas que utilizam o Youtube
<span> ${Youtube} </span>
Quantidade de Pessoas que utilizam o WhatsApp
<span> ${WhatsApp} </span>
Quantidade de Pessoas que utilizam o WeChat
<span> ${WeChat} </span>


`





const container1 = document.getElementById("grafico-container")
container1.appendChild(paragrafo1)

}


redesSocias();

