console.log('Developer: Heitor Avles Pinto')
console.log('www.linkedin.com/in/heitor-alves-pinto-a0004928b/')

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

function toggleContato() {
    const modal = document.getElementById("contatoModal");
    if (modal.style.display === "flex") {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    } else {
        modal.style.display = "flex";
        document.body.style.overflow = "hidden";
    }
}

window.onclick = function(event) {
    const modal = document.getElementById("contatoModal");
    if (event.target === modal) {
        toggleContato();
    }
}

document.addEventListener('keydown', function(event) {
    const modal = document.getElementById("contatoModal");
    if (event.key === "Escape" && modal.style.display === "flex") {
        toggleContato();
    }
});

function toggleMenu() {
    const menu = document.getElementById("mobile-menu");
    menu.classList.toggle("active");
}

document.addEventListener("click", function(event) {
    const menu = document.getElementById("mobile-menu");
    const button = document.querySelector(".menu-btn");
    
    if (!menu.contains(event.target) && !button.contains(event.target)) {
        menu.classList.remove("active");
    }
});

document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('mobile-menu').classList.remove('active');
    });
});

document.addEventListener('DOMContentLoaded', function() {

    const modal = document.getElementById('tableModal');
    const btn = document.getElementById('openTableModal');

    if (!modal) {
        console.error('Modal tableModal não foi encontrado no DOM');
        return;
    }
    
    if (!btn) {
        console.error('Botão openTableModal não foi encontrado no DOM');
        return;
    }

    modal.style.display = 'none';
    
    btn.addEventListener('click', function() {
        console.log('Abrindo modal...');
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });

    const closeBtn = modal.querySelector('.close-modal');
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    } else {
        console.warn('Botão de fechar não encontrado dentro do modal');
    }
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});

document.getElementById('copyLinkBtn').addEventListener('click', function() {

    const url = 'https://heitoralvesp.github.io/adenite-equina/';
    
    navigator.clipboard.writeText(url)
        .then(() => {
            const btn = document.getElementById('copyLinkBtn');
            btn.innerHTML = '<i class="fa-solid fa-check"></i> Link copiado!';
            
            setTimeout(() => {
                btn.innerHTML = '<i class="fa-solid fa-link"></i> Copiar Link';
            }, 400);
        })
        .catch(err => {
            console.error('Falha ao copiar: ', err);
            alert('Não foi possível copiar o link. Tente manualmente: ' + url);
        });
});