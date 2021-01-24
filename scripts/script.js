const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
let estaPulanto = false;
let posicao = 0;

function handleKeyup(event){
    if(event.keyCode === 32){
        if(!estaPulanto){
        pular();
        }
    }
}

function pular(){
    posicao = 0;
    estaPulando = true;
    let upInterval = setInterval(() => {
        if(posicao >= 150){
            clearInterval(upInterval);
            let downInterval = setInterval(() => {
                if(posicao <= 0){
                    clearInterval(downInterval);
                    estaPulando = false;
                } else {
                    posicao -= 20;
                    dino.style.bottom = posicao + 'px';
                }
            }, 20);
        } else {
        posicao += 20;
        dino.style.bottom = posicao + 'px';
        }
    }, 20);
}

function createCactus(){
    const cactus = document.createElement('div');
    let cactusPosicao = 1000;
    let tempoRandomico = Math.random() * 6000;

    cactus.classList.add('cactus');
    cactus.style.left = 1000 + 'px';
    background.appendChild(cactus);

    let leftInterval = setInterval(() => {
        if(cactusPosicao < -60){
            clearInterval(leftInterval);
            background.removeChild(cactus);
        } else if(cactusPosicao > 0 && cactusPosicao < 60 && posicao < 60){
            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 class="game-over">Fim de Jogo</h1>';
        } else {
            cactusPosicao -= 10;
            cactus.style.left = cactusPosicao + 'px';
        }
    }, 20);

    setTimeout(createCactus, tempoRandomico);
}

createCactus();
document.addEventListener('keyup', handleKeyup);