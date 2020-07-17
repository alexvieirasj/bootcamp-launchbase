
const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');

for(let card of cards) {
    card.addEventListener('click', function(){
        const paginaId = card.getAttribute('id');
        modalOverlay.classList.add('active');
        modalOverlay.querySelector('iframe').src = `https://rocketseat.com.br/${paginaId}`; //busca na propriedade diretamente
    });
}

document.querySelector('.close-modal')
    .addEventListener('click',  function(){
        modalOverlay.classList.remove('active');
        modalOverlay.querySelector('iframe').src = ""; //busca na propriedade diretamente
    });