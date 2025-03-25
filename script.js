//botão do menu
function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}
document.addEventListener("click", function(event) {
    const menu = document.getElementById("menu");
    const button = document.querySelector(".menu-btn");
    if (!menu.contains(event.target) && !button.contains(event.target)) {
        menu.style.display = "none";
    }
});



// botão do contato
function toggleContato() {
    const modal = document.getElementById("contatoModal");
    modal.style.display = modal.style.display === "flex" ? "none" : "flex";
}

window.onclick = function(event) {
    const modal = document.getElementById("contatoModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}



//função de audio do paragafo
let sintese;
let lendo = false;
let secaoAtual = null;

function toggleLeitura(id) {
    if (lendo && secaoAtual === id) {
        pararLeitura();
    } else {
        iniciarLeitura(id);
    }
}

function iniciarLeitura(id) {
    let secao = document.getElementById(id);
    let paragrafos = secao.querySelectorAll("p, li");
    let texto = "";

    paragrafos.forEach(p => texto += p.innerText + " ");

    if ('speechSynthesis' in window) {
        sintese = new SpeechSynthesisUtterance(texto);
        sintese.lang = 'pt-BR';
        sintese.rate = 1;
        sintese.pitch = 1;

        let vozes = speechSynthesis.getVoices();
        sintese.voice = vozes.find(voz => voz.lang === 'pt-BR') || null;

        speechSynthesis.speak(sintese);
        lendo = true;
        secaoAtual = id;
        atualizarBotoes();
    } else {
        alert("Seu navegador não suporta leitura em voz alta.");
    }
}

function pararLeitura() {
    if ('speechSynthesis' in window) {
        speechSynthesis.cancel();
        lendo = false;
        secaoAtual = null;
        atualizarBotoes();
    }
}

function atualizarBotoes() {
    let botoes = document.querySelectorAll(".audio-btn");
    botoes.forEach(botao => {
        if (lendo && botao.getAttribute("onclick").includes(secaoAtual)) {
            botao.innerHTML = "⏹️ Parar";
            botao.classList.add("parando");
        } else {
            botao.innerHTML = "🔊 Ouvir Texto";
            botao.classList.remove("parando");
        }
    });
}






// let sintese;
// let lendo = false;
// function toggleLeitura() {
//     if (!lendo) {
//         iniciarLeitura();
//     } else {
//         pararLeitura();
//     }
// }
// function iniciarLeitura() {
//     let paragrafos = document.querySelectorAll("p");
//     let texto = "";
//     paragrafos.forEach(p => texto += p.innerText + " ");

//     if ('speechSynthesis' in window) {
//         sintese = new SpeechSynthesisUtterance(texto);
//         sintese.lang = 'pt-BR';
//         sintese.rate = 1;
//         sintese.pitch = 1;

//         let vozes = speechSynthesis.getVoices();
//         sintese.voice = vozes.find(voz => voz.lang === 'pt-BR') || null;

//         speechSynthesis.speak(sintese);
//         lendo = true;
//         atualizarBotao();
//     } else {
//         alert("Seu navegador não suporta leitura em voz alta.");
//     }
// }
// function pararLeitura() {
//     if ('speechSynthesis' in window) {
//         speechSynthesis.cancel();
//         lendo = false;
//         atualizarBotao();
//     }
// }
// function atualizarBotao() {
//     let botao = document.getElementById("audio-btn");
//     if (lendo) {
//         botao.innerHTML = "⏹️ Parar";
//         botao.classList.add("parando");
//     } else {
//         botao.innerHTML = "🔊 Ouvir Texto";
//         botao.classList.remove("parando");
//     }
// }