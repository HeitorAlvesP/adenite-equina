let lastScrollTop = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    let scrollTop = window.scrollY;

    if (scrollTop > lastScrollTop) {
        // Rolando para baixo, esconde o cabeçalho
        header.classList.add("header-hidden");
    } else {
        // Rolando para cima, mostra o cabeçalho
        header.classList.remove("header-hidden");
    }

    lastScrollTop = scrollTop;
});