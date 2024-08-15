var selecionado;
var selecionadoN;
var advesario;
var advesarioN;
var resultado;

function Pedra() {
    selecionado = "pedra";
    selecionadoN = 1;
    console.log(selecionado);
    advesario = Advesario();
    Luta();
}

function Papel() {
    selecionado = "papel";
    selecionadoN = 2;
    console.log(selecionado);
    advesario = Advesario();
    Luta();
}

function Tesoura() {
    selecionado = "tesoura";
    selecionadoN = 3;
    console.log(selecionado);
    advesario = Advesario();
    Luta();
}

function Advesario() {
    var lista = ['pedra', 'papel', 'tesoura'];
    var escolha = lista[Math.floor(Math.random() * lista.length)];
    console.log("Adversário escolheu: " + escolha);
    
    if (escolha === 'pedra') {
        advesarioN = 1;
    } else if (escolha === 'papel') {
        advesarioN = 2;
    } else if (escolha === 'tesoura') {
        advesarioN = 3;
    }
    return escolha;
}

function Luta() {
    if (selecionadoN === advesarioN) {
        resultado = "Empate!";
    } else if (selecionadoN === 1 && advesarioN === 3) {
        resultado = "Você venceu!";
    } else if (selecionadoN === 2 && advesarioN === 1) {
        resultado = "Você venceu!";
    } else if (selecionadoN === 3 && advesarioN === 2) {
        resultado = "Você venceu!";
    } else {
        resultado = "Adversário venceu!";
    }
    
    console.log("Seu adversário escolheu " + advesario + ". " + resultado);
    document.querySelector('.Resposta').textContent = "Seu adversário escolheu " + advesario + ". " + resultado;
}
