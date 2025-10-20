// src/popup/popup.js
document.addEventListener('DOMContentLoaded', () => {
  const circulo = document.querySelector('.circulo');
  const imagem = document.querySelector('.copo');
  const botoes = document.querySelectorAll('.botao-menu');
  const btnSininho = document.getElementById('sininho');
  const statusEl = document.getElementById('status');

  function trocarACor(cor){
    if (circulo) circulo.style.background = cor;
  }

  function trocarImagem(endereco){
    if (imagem) imagem.src = endereco;
  }

  botoes.forEach(btn => {
    btn.addEventListener('click', () => {
      const cor = btn.getAttribute('data-cor');
      const img = btn.getAttribute('data-img');
      trocarACor(cor);
      trocarImagem(img);
    });
  });

  // exemplo de ping ao service worker/background
  btnSininho?.addEventListener('click', async () => {
    statusEl.textContent = 'Pingando background...';
    try {
      const res = await chrome.runtime.sendMessage({ type: 'PING' });
      statusEl.textContent = res?.time ? `Background está vivo: ${res.time}` : 'Resposta recebida';
    } catch (err) {
      statusEl.textContent = 'Erro ao comunicar com background.';
      console.error(err);
    }
  });
});
