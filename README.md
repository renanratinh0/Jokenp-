# ✋ Jokenpô

Um simples jogo de Jokenpô (Pedra, Papel e Tesoura) implementado em HTML, CSS e JavaScript.

## 📖 Sobre

Este projeto é um jogo interativo de Jokenpô que você pode jogar diretamente no navegador. O jogador escolhe entre pedra, papel ou tesoura, e o computador escolhe uma opção aleatória para competir. O resultado do jogo (vitória, derrota ou empate) é exibido na tela.

## ✨ Funcionalidades

- Interface intuitiva com botões representando as opções de Pedra, Papel e Tesoura.
- Computador escolhe automaticamente uma opção aleatória.
- Exibição do resultado do jogo diretamente na página (empate, vitória ou derrota).
- Animação e estilo aprimorados com Bootstrap e FontAwesome.

## 💻 Tecnologias Utilizadas

- **HTML**: Estrutura do jogo.
- **CSS**: Estilização do jogo, incluindo o layout grid e as animações.
- **JavaScript**: Lógica do jogo, incluindo a escolha aleatória do computador e a determinação do resultado.
- **Bootstrap**: Framework CSS utilizado para o design responsivo e componentes visuais.
- **FontAwesome**: Biblioteca de ícones para representar as jogadas (Pedra, Papel e Tesoura).

## 📂 Estrutura do Projeto

- **`index.html`**: Contém a estrutura principal do jogo.
- **`styles.css`**: Arquivo de estilos personalizado.
- **`script.js`**: Contém a lógica do jogo.

## 🚀 Como Executar

1. Clone este repositório.
2. Abra o arquivo `index.html` em um navegador de sua escolha.
3. Escolha entre Pedra, Papel ou Tesoura para jogar!

## 🔍 Detalhes do Código

### Lógica do Jogo

A lógica do jogo é implementada no arquivo `script.js`. Existem três funções principais que correspondem às três opções (Pedra, Papel e Tesoura) que o jogador pode escolher. Cada uma delas define a escolha do jogador e chama a função `Advesario()` para determinar a escolha aleatória do computador. A função `Luta()` então compara as escolhas e determina o resultado, que é exibido na tela.

```javascript
function Pedra() {
    selecionado = "pedra";
    selecionadoN = 1;
    advesario = Advesario();
    Luta();
}

function Papel() {
    selecionado = "papel";
    selecionadoN = 2;
    advesario = Advesario();
    Luta();
}

function Tesoura() {
    selecionado = "tesoura";
    selecionadoN = 3;
    advesario = Advesario();
    Luta();
}
