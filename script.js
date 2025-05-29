document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const item = header.parentElement;
        item.classList.toggle('active');
    });
});

// Carousel functionality
const carousel = document.querySelector('.carousel');
const inner = carousel.querySelector('.carousel-inner');
const items = carousel.querySelectorAll('.carousel-item');
const prevBtn = carousel.querySelector('.prev');
const nextBtn = carousel.querySelector('.next');

let currentIndex = 0;
const itemWidth = items[0].clientWidth;

function updateCarousel() {
    inner.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : items.length - 1;
    updateCarousel();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex < items.length - 1) ? currentIndex + 1 : 0;
    updateCarousel();
});

// Auto-rotate carousel
setInterval(() => {
    currentIndex = (currentIndex < items.length - 1) ? currentIndex + 1 : 0;
    updateCarousel();
}, 5000);

// Smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 70,
            behavior: 'smooth'
        });
    });
});


////modal contato
function toggleContato() {
    const modal = document.getElementById("contatoModal");
    if (modal.style.display === "flex") {
        modal.style.display = "none";
        document.body.style.overflow = "auto"; // Permite scroll novamente
    } else {
        modal.style.display = "flex";
        document.body.style.overflow = "hidden"; // Impede scroll quando modal aberto
    }
}

window.onclick = function(event) {
    const modal = document.getElementById("contatoModal");
    if (event.target === modal) {
        toggleContato();
    }
}

// Fechar modal com tecla ESC
document.addEventListener('keydown', function(event) {
    const modal = document.getElementById("contatoModal");
    if (event.key === "Escape" && modal.style.display === "flex") {
        toggleContato();
    }
});


///////menu xbcon/////
function toggleMenu() {
    const menu = document.getElementById("mobile-menu");
    menu.classList.toggle("active");
}

// Fechar o menu ao clicar fora
document.addEventListener("click", function(event) {
    const menu = document.getElementById("mobile-menu");
    const button = document.querySelector(".menu-btn");
    
    if (!menu.contains(event.target) && !button.contains(event.target)) {
        menu.classList.remove("active");
    }
});

// Fechar o menu ao clicar em um link
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('mobile-menu').classList.remove('active');
    });
});