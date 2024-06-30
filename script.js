const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultados = document.querySelector(".caixa-resultados");
const textoResultado = document.querySelector(".texto-resultado");
const bendGuitarra = document.querySelector("#bend")

const perguntas = [
    {
        enunciado: "Você vai tocar qual estilo de rock?",
        alternartivas: [
            {
                texto: "Tocarei um rock psicodélico, pois tenho muita influência de Jimi Hendrix.",
                afirmacao:"Você formou sua banda de rock psicodélico chamada  Salamandras Intelectuais,"
            },

            {
                texto:"Tocarei um rock punk, pois tenho muita influência de Raimundos.",
                afirmacao:"Você formou sua banda de rock punk chamada Suor de Tarântula, "
            }
    ]
    },
    {
        enunciado: "Sobre quais assuntos serão abordados nas músicas?",
        alternartivas: [
            {
                texto: "Serão músicas focadas em críticas sociais e sobre a política e problemas estruturais da sociedade brasileira.",
                afirmacao:"com músicas de protesto contra a política e situações sociais como a pobreza, racismo, capitalismo e etc."
            },

            {
                texto:  "Serão músicas focadas em vários tipos de assuntos tanto sociais quanto coisas aleatórias.",
                afirmacao:"com músicas sobre variados assuntos como coisas que te aconteceram, piadas com palavras de duplo sentido, músicas sobre reflexões sobre a realidade atual e etc."
            }
    ]
    },
    {
        enunciado: "Quantos membros terá sua banda?",
        alternartivas: [
            
            {
                texto: "Terá 5 membros para poder fazer dobras de guitarra e melodias mais complexas.",
                afirmacao:"Sua banda conta  com 5 integrantes sendo eles 3 guitarristas, 1 baixista e 1 baterista, suas músicas apresentam complexas melodias e dobras de guitarra."
            },

            {
                texto:  "Terá 4 membros para fazer o básico bem feito e até enfeitar a música de vez em quando.",
                afirmacao:"Sua banda conta com 4 integrantes sendo eles 2 guitarristas, 1 baixista e 1 baterista, vocês tocam músicas mais simples, mas sem perder a qualidade e de vez em quando fazem dobras de guitarra e melodias complexas."
            }
    ]
    },
    {
        enunciado: "Onde ela tocará?",
        alternartivas: [
            {
                texto: "Em barzinhos underground tocando covers de bandas punk famosa.",
                afirmacao:"Como sua banda ainda não é conhecida, vocês tocam covers de seus artistas preferidos em bares undergrounds que dão chance para bandas novas."
            },
            {
                texto: "Tocará em bares de rock com músicas autorais.",
                afirmacao:"Vocês começaram agora, mas já tem algumas músicas autorais que sempre que conseguem tocam nos shows feitos em bares de rock."
            }
    ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternartivas of perguntaAtual.alternartivas){
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternartivas.texto;
        botaoAlternativa.addEventListener("click", () => respostaSelecionada(alternartivas));
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

function respostaSelecionada (opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Em 2025...";
    caixaAlternativas.textContent = "";
    textoResultado.textContent = historiaFinal;
    var audio = new Audio('bend.ogg');
    audio.addEventListener('canplaythrough', function() {
    audio.play();
});    
} 

mostraPergunta();
