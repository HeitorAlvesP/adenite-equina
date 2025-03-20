let lastScrollTop = 0;
const header = document.getElementById("header");

window.addEventListener("scroll", function () {
    let currentScroll = window.scrollY;
    if (currentScroll > lastScrollTop) {
        // Rola para baixo -> Esconde o header
        header.style.transform = "translateY(-100%)";
    } else {
        // Rola para cima -> Mostra o header
        header.style.transform = "translateY(0)";
    }
    lastScrollTop = currentScroll;
});