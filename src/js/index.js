const botaoTrailer = document.querySelector(".botao-trailer");
const modal = document.querySelector(".modal");
const video = document.getElementById("video");
const linkVideo = video.src;
const botaoFechar = document.querySelector(".fechar-modal");

function alternaModal(){
    modal.classList.toggle('aberto');
}

botaoTrailer.addEventListener("click", () => {
    video.setAttribute("src", linkVideo)
    alternaModal();
})

botaoFechar.addEventListener("click", () => {
    video.setAttribute("src", "")
    alternaModal();
})
