document.addEventListener("DOMContentLoaded", () => {

    // ==========================
    // LOADER
    // ==========================

    const loader = document.getElementById("loader");

    if (loader) {
        setTimeout(() => {
            loader.style.opacity = "0";
            loader.style.visibility = "hidden";
        }, 1000);
    }

    // ==========================
    // MÚSICA
    // ==========================

    const bgMusic = document.getElementById("bg-music");

    if (bgMusic) {

        bgMusic.volume = 0.35;

        const startAudio = () => {

            bgMusic.play().then(() => {

                document.removeEventListener("click", startAudio);
                document.removeEventListener("keydown", startAudio);
                document.removeEventListener("touchstart", startAudio);

            }).catch(() => {
                console.log("Aguardando interação do usuário...");
            });

        };

        document.addEventListener("click", startAudio);
        document.addEventListener("keydown", startAudio);
        document.addEventListener("touchstart", startAudio);
    }

    // ==========================
    // MENU PRINCIPAL
    // ==========================

    const paginas = [

        [
            { texto: "SOBRE", href: "sobre.html" },
            { texto: "MEMBROS", href: "membros.html" },
            { texto: "FAN ARTS", href: "fanarts.html" },
            { texto: "PARCERIAS", href: "parcerias.html" }
        ],

        [
            { texto: "PLANILHA", href: "https://discord.gg/seu-link", target: "_blank" },
            { texto: "WISHLIST", href: "https://github.com/seu-link", target: "_blank" }
        ]

    ];

    let paginaAtual = 0;

    const buttonSlot = document.getElementById("button-slot");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    if (!buttonSlot || !prevBtn || !nextBtn) return;

    function renderizarPagina() {

        buttonSlot.innerHTML = "";

        paginas[paginaAtual].forEach(botao => {

            const a = document.createElement("a");

            a.className = "btn";
            a.href = botao.href;
            a.textContent = botao.texto;

            if (botao.target) {
                a.target = botao.target;
            }

            buttonSlot.appendChild(a);

        });

    }

    function trocarPagina(novaPagina, direcao) {

        buttonSlot.classList.remove(
            "slide-out-left",
            "slide-out-right",
            "slide-in-left",
            "slide-in-right"
        );

        buttonSlot.classList.add(
            direcao === "direita"
                ? "slide-out-left"
                : "slide-out-right"
        );

        setTimeout(() => {

            paginaAtual = novaPagina;

            renderizarPagina();

            buttonSlot.classList.remove(
                "slide-out-left",
                "slide-out-right"
            );

            buttonSlot.classList.add(
                direcao === "direita"
                    ? "slide-in-right"
                    : "slide-in-left"
            );

        }, 250);

    }

    prevBtn.addEventListener("click", () => {

        if (paginaAtual > 0) {
            trocarPagina(paginaAtual - 1, "esquerda");
        }

    });

    nextBtn.addEventListener("click", () => {

        if (paginaAtual < paginas.length - 1) {
            trocarPagina(paginaAtual + 1, "direita");
        }

    });

    renderizarPagina();

});