import { Api } from "../../global/JS/classes/api.js";
import { Dom } from "../../global/JS/Classes/dom.js";
import { FiltrosHome } from "./classe_filtros_home.js";

const filtroTodos = document.getElementById("todos");
const filtroPanificadora = document.getElementById("panificadora");
const filtroFrutas = document.getElementById("frutas");
const filtroBebidas = document.getElementById("bebidas");
const filtroPesquisa = document.getElementById("barra-pesquisa");
const inputPesquisa = document.querySelector("input");
const cards_main = document.getElementById("container__cards");


let produtosNoArray = [];

const sectionCards = document.getElementById('container__cards');
const pegarProdutos =  await Api.pegarTodosProdutos();



async function receberProdutosApi() {
    Dom.criarCards(pegarProdutos);
};


receberProdutosApi() ;



function identificarItemClicado(event) {
    const itemClicado = event.target;

    if(itemClicado.id === "add_cart" || itemClicado.closest("button").id === "add_cart") {
        const produtoID = itemClicado.closest(".card").id;
        filtrarParaAdicionarCarrinho(produtoID);
    };
};


async function filtrarParaAdicionarCarrinho(produtoID) {

    let produtoSelecionado = "";

    pegarProdutos.forEach((produto) => {
        if(produto.id === produtoID) {
            produtoSelecionado = produto;
            produtosNoArray.push(produtoSelecionado);
        };
    });

    renderizarCarrinho(produtosNoArray);
    calculaPrecoCarrinho(produtosNoArray);
};



sectionCards.addEventListener('click', identificarItemClicado);


async function renderizarCarrinho(produtosNoArray) {
    const ul_container = document.getElementById('carrinho__lista');
    ul_container.innerHTML = '';

    produtosNoArray.forEach((produto)=> {
        const produtosCarrinho =  Dom.criarItemCarrinho(produto.id, produto.imagem, produto.nome, produto.preco, produto.categoria);
        ul_container.appendChild(produtosCarrinho);
    });
};



function calculaPrecoCarrinho(produtos) {
    const precoTotal = document.getElementById('totalpreco');
    const numeroDeProdutos = document.getElementById('quatidadeTotal');

    const valores = produtos.map((produto) => {
        return produto.preco;
    });
    
    const somaValores = valores.reduce((a,b) => a + b , 0);
    const comprimentoTotal = valores.length;
    
    precoTotal.innerText = `${somaValores.toLocaleString("pt-BR", {style: 'currency', currency: 'BRL' })}`;
    numeroDeProdutos.innerText = `${comprimentoTotal}`;
};


const ulLista = document.getElementById("carrinho__lista");

ulLista.addEventListener("click", (event) => {
    const itemClicado = event.target;
    const produtoRemoverID = event.target.id;
    if(itemClicado.tagName === "svg" || itemClicado.closest("svg").tagName === "svg") {
        const produtoRemoverID = itemClicado.closest("svg").id;
        deletarDoCarrinho(produtoRemoverID, produtosNoArray);
    };
});

async function deletarDoCarrinho(produtoRemoverID, array) {
    for(let i = 0; i < array.length; i++) {
        if(array[i].id === produtoRemoverID) {
            array.splice(i, 1);
            break;
        }
    }
    renderizarCarrinho(array);
    calculaPrecoCarrinho(produtosNoArray);
};




Dom.criarItemCarrinho();


filtroPesquisa.addEventListener("keyup", () => {
    cards_main.innerHTML = "";
    FiltrosHome.filtrarPorPesquisa(pegarProdutos, inputPesquisa.value);
});

filtroTodos.addEventListener("click", () => {
    cards_main.innerHTML = "";
    FiltrosHome.filtrarPorTodos(pegarProdutos);
});


filtroPanificadora.addEventListener("click", () => {
    cards_main.innerHTML = "";
    FiltrosHome.filtrarPorPanificadora(pegarProdutos);
});

filtroFrutas.addEventListener("click", () => {
    cards_main.innerHTML = "";
    FiltrosHome.filtrarPorFrutas(pegarProdutos);
});


filtroBebidas.addEventListener("click", () => {
    cards_main.innerHTML = "";
    FiltrosHome.filtrarPorBebidas(pegarProdutos);
});


const botaoMoblie = document.getElementById('mostra_carrinho_mobile');

botaoMoblie.addEventListener("click", () => {

    const displayCarrinhoMobile = document.getElementById('carrinho__compras');
    displayCarrinhoMobile.classList.add("mostrar");
});

const fecharCarrinhoMobile = document.getElementById('fechar__carrinho');

fecharCarrinhoMobile.addEventListener("click", () => {
    const displayCarrinhoMobile = document.getElementById('carrinho__compras');
    displayCarrinhoMobile.classList.remove("mostrar");

});

const botaoLogin = document.getElementById("botaoLogin");

botaoLogin.addEventListener("click", (e) => {
    e.preventDefault();

    window.location = "../../paginas/login_cadastro/login_cadastro.html"
});