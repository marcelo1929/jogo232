const personagem = document.querySelector('.personagem')
const obstaculo = document.querySelector('.obstaculo')
const nuvem = document.querySelector('.nuvem')
const jump = () => { 
    personagem.classList.add('pulo')
    setTimeout(() => {
        personagem.classList.remove('pulo')
    }, 1500);
}

const loop = setInterval(() => {
  const personagemPosition = +window.getComputedStyle(personagem).bottom.replace('px','') 
  const obstaculoPoation = obstaculo.offsetLeft;  
  const nuvemposition = nuvem.offsetLeft;
  if(obstaculoPoation<=150 && obstaculoPoation>0 && personagemPosition<=128){

  obstaculo.style.animation='none';
  obstaculo.style.left=`${obstaculoPoation}px`;
  
  personagem.style.animation='none';
  personagem.style.left=`${personagemPosition}px`;

  nuvem.style.animation='none';
  nuvem.style.left=`${nuvemposition}px`;

    personagem.style.animation='none'
    personagem.src='img/giphy.gif'

    clearInterval(loop);
  }
}, 
10);

document.addEventListener('keydown',jump)