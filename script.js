document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const item = header.parentElement;
        item.classList.toggle('active');
    });
});

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



// Controle do modal da tabela
document.addEventListener('DOMContentLoaded', function() {
    // Verificação mais segura dos elementos
    const modal = document.getElementById('tableModal');
    const btn = document.getElementById('openTableModal');
    
    // Verifica se os elementos principais existem
    if (!modal) {
        console.error('Modal tableModal não foi encontrado no DOM');
        return;
    }
    
    if (!btn) {
        console.error('Botão openTableModal não foi encontrado no DOM');
        return;
    }

    // Configuração inicial do modal
    modal.style.display = 'none';
    
    // Evento para abrir modal
    btn.addEventListener('click', function() {
        console.log('Abrindo modal...');
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
    
    // Busca pelo botão de fechar somente se o modal existir
    const closeBtn = modal.querySelector('.close-modal');
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    } else {
        console.warn('Botão de fechar não encontrado dentro do modal');
    }
    
    // Fechar ao clicar fora do conteúdo
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});