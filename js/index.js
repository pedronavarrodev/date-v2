'use strict';
let votoSim = window.document.getElementById('sim');
let votoNao = window.document.getElementById('nao');

let parceiro = prompt('Seu nome?');
document.querySelector('.conteudo__titulo').innerHTML += parceiro + ' ?';

const alertas = () => {
  alert(`Te espero em nosso date  ${parceiro} 💞`);
  location.href = "https://youtu.be/nfezTxgrcUo";
};

const zoeira = () => {
  votoNao.style.position = 'absolute';
  votoNao.style.top = (Math.random() * window.innerHeight) + 'px';
  votoNao.style.left = (Math.random() * window.innerWidth) + 'px';
};

votoSim.addEventListener('click', alertas);
votoNao.addEventListener('mouseover', zoeira);