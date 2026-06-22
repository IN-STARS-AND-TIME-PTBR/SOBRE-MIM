document.addEventListener("DOMContentLoaded", () => {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.getElementById("close-btn");
    const fanartImages = document.querySelectorAll(".fanart-card img");

    // Abrir o Lightbox ao clicar em uma fanart
    fanartImages.forEach(img => {
        img.addEventListener("click", () => {
            lightboxImg.src = img.src;
            lightboxImg.alt = img.alt;
            lightbox.style.display = "flex";
        });
    });

    // Função para fechar o Lightbox
    const fecharLightbox = () => {
        lightbox.style.display = "none";
        lightboxImg.src = ""; // Limpa a imagem antiga da memória
    };

    // Fechar ao clicar no botão X
    if (closeBtn) {
        closeBtn.addEventListener("click", fecharLightbox);
    }

    // Fechar ao clicar no fundo escuro (fora da imagem)
    if (lightbox) {
        lightbox.addEventListener("click", (e) => {
            if (e.target === lightbox) {
                fecharLightbox();
            }
        });
    }

    // Fechar usando a tecla ESC do teclado
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && lightbox.style.display === "flex") {
            fecharLightbox();
        }
    });
});