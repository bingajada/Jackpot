const slots = ["🧙‍♂️", "🫷", "🎷", "❌", "🤪"];

const slot1 = document.getElementsByClassName("slot1");
const slot2 = document.getElementsByClassName("slot2");
const slot3 = document.getElementsByClassName("slot3");
const UpLow = document.getElementsByClassName("upperLower");

const botao = document.getElementById("Botao");
const chute = document.getElementById("Guess");

let atual = null;
let prox = null;

function Spin() {
    const randomIndex = Math.floor(Math.random() * slots.length);
    return slots[randomIndex];
} 

function SpinAll() {
    for (let i = 0; i < 1; i++) {
        slot1[i].innerHTML = Spin();
        slot2[i].innerHTML = Spin();
        slot3[i].innerHTML = Spin();
    }

    Check();
}

function Check() {
    if (slot1[0].innerHTML === slot2[0].innerHTML && slot1[0].innerHTML === slot3[0].innerHTML) {
        gerarNumero();
        botao.disabled = true;
        chute.style.display = "block";
    } else {
        if (slot1[0].innerHTML === slot2[0].innerHTML){
            console.log("antes 3: " + slot3[0].innerHTML);
            slot3[0].innerHTML = Spin();
            Receba();
            console.log("depois 3: " + slot3[0].innerHTML);
        } else if (slot1[0].innerHTML === slot3[0].innerHTML) {
            console.log("antes 2: " + slot2[0].innerHTML);
            slot2[0].innerHTML = Spin();
            Receba();
            console.log("depois 2: " + slot2[0].innerHTML);
        } else if (slot2[0].innerHTML === slot3[0].innerHTML) {
            console.log("antes 1: " + slot1[0].innerHTML);
            slot1[0].innerHTML = Spin();
            Receba();
            console.log("depois 1: " + slot1[0].innerHTML);
        }
    }
}

function Receba(){
    if (slot1[0].innerHTML === slot2[0].innerHTML && slot1[0].innerHTML === slot3[0].innerHTML) {
        gerarNumero();
        botao.disabled = true;
        chute.style.display = "block";
    }
}

function gerarNumero() {
    atual = Math.floor(Math.random() * 10);
    prox = Math.floor(Math.random() * 10);
    console.log(`Número atual: ${atual}, Próximo número: ${prox}`);
    
    UpLow[0].innerHTML = atual;
}

function Chutar(guess) {
    if (guess === "maior" && prox >= atual || guess === "menor" && prox <= atual) {
        atual = prox;
        prox = Math.floor(Math.random() * 10);
        UpLow[0].innerHTML = atual; 

        console.log(`Número atual: ${atual}, Próximo número: ${prox}`);

    } else {
        botao.disabled = false;
        chute.style.display = "none";

        UpLow[0].innerHTML = ":(";     
    }
}