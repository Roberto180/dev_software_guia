document.addEventListener("DOMContentLoaded", function() {
  const botoes = document.querySelectorAll(".botao");
  const mensagens = document.querySelectorAll(".mensagem");
  
  botoes.forEach(botao => {
    botao.addEventListener("click", () => {
      const idAlvo = botao.getAttribute("data-id");
  
      mensagens.forEach(mensagem => {
        if (mensagem.id === idAlvo) {
          mensagem.classList.toggle("ativa");
        } else {
          mensagem.classList.remove("ativa");
        }
      });
    });
  });
});

let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){
     nextImage();
}, 7000)

function nextImage(){
    count++;
    if(count>3){
        count = 1;
    }

document.getElementById("radio"+count).checked = true;
}

const navLinks = document.querySelectorAll('.nav-list a');

window.addEventListener('scroll', () => {
    navLinks.forEach(link => {
        const section = document.querySelector(link.getAttribute('href'));
        const sectionTop = section.offsetTop - 50; 
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            link.classList.add('active'); 
        } else {
            link.classList.remove('active'); 
        }
    });
});