import { Api } from "../../../global/JS/Classes/api.js";
import { Filtros } from "./classe_filtros.js";

const listaProdutos = document.getElementById("listaProdutos");
const modalEdicao = document.getElementById("modalEdicao");
const modalExclusao = document.getElementById("modalExclusao");
const botaoSimDel = document.getElementById("btn_sim");
const filtroTodos = document.getElementById("todos");
const filtroPanificadora = document.getElementById("panificadora");
const filtroFrutas = document.getElementById("frutas");
const filtroBebidas = document.getElementById("bebidas");
const filtroPesquisa = document.getElementById("barra-pesquisa");
const inputPesquisa = document.querySelector("input");

let meusProdutos = [];

await Api.pegarMeusProdutos()
    .then(res => {
        meusProdutos = res;
    });

function adicionarEventoBtnAdicionar() {
    const btnAdicionar = document.querySelector('.botao__adicionar__produto');
    const modalCadastro = document.getElementById("modal_cadastro");
    btnAdicionar.addEventListener("click", () => {
        renderizarElemento(modalCadastro);
        adicionarSubmitFormCadastro();
        adicionarEventoBtnCategoria();
    });
};

function adicionarEventoBtnFechar(){
    const btnFechar = document.getElementById('btn_fechar');
    const modalCadastro = document.getElementById("modal_cadastro");
    btnFechar.addEventListener("click", () => {
        fecharElemento(modalCadastro);
    });
};

let categoriaa;
function adicionarEventoBtnCategoria() {
    const btns_categorias = document.querySelectorAll(".btn_categoria");
    btns_categorias.forEach(botao => {
        botao.addEventListener("click", (event) => {
            categoriaa = event.target.textContent;
        });
    });
    return categoriaa;
};


function renderizarElemento(elemento) {
    elemento.classList.add("mostrar");
};

function fecharElemento(elemento) {
    elemento.classList.remove("mostrar");
};

function adicionarSubmitFormCadastro() {
    const formCadastro = document.getElementById("form_cadastro");
    formCadastro.addEventListener("submit", (event) => {
        event.preventDefault();
        let categoria = adicionarEventoBtnCategoria();
        
        receberDadosCadastroProduto(event, categoria);
    });
};

async function receberDadosCadastroProduto(event, categoria) {
    const modalCadastro = document.getElementById("modal_cadastro");
    const formItens =[...event.target];
    const values = {
        categoria: categoria,
    };


    formItens.forEach(item => {
        if(item.name != "") {
            values[item.name] = item.value;
        };
    });
    
    await Api.cadastrarProduto(values);
    fecharElemento(modalCadastro);

    setTimeout(() => {
        window.location.reload();
    }, 1000);
};

adicionarEventoBtnAdicionar();
adicionarEventoBtnFechar();


listaProdutos.addEventListener("click", (e) => {
    const element = e.target;
    const id = element.id;
    
    if(id === "botaoEditar" || id === "btnEditar") {
        renderizarElemento(modalEdicao);
        const idProduto = element.closest(".itemListaProdutos").id;
        botaoSimDel.name = idProduto;

    } else if(id === "botaoDeletar" || id === "btnDeletar") {
        renderizarElemento(modalExclusao);
        const idProduto = element.closest(".itemListaProdutos").id;
        botaoSimDel.name = idProduto;
    };
});

modalEdicao.addEventListener("click", (e) => {
    let id = e.target.id;

    if(id === "botaoFecharEd") {
        fecharElemento(modalEdicao);
    } else if (id === "btn_excluir") {
        fecharElemento(modalEdicao);
        renderizarElemento(modalExclusao);
    } else if (id === "btn_salvar") {
        fecharElemento(modalEdicao);
    };
});

modalExclusao.addEventListener("click", async (e) => {
    let id = e.target.id;

    if(id === "botaoFecharDel" || id === "btn_nao") {
        fecharElemento(modalExclusao);
    } else if (id === "btn_sim") {
        let idProduto = botaoSimDel.name;
        await Api.deletarProduto(idProduto);
        fecharElemento(modalExclusao);
        setTimeout(() => {
            window.location.reload();
        }, 1000);
    };
});



filtroPesquisa.addEventListener("keyup", () => {
    listaProdutos.innerHTML = "";
    Filtros.filtrarPorPesquisa(meusProdutos, inputPesquisa.value);
});

filtroTodos.addEventListener("click", () => {
    listaProdutos.innerHTML = "";
    Filtros.filtrarPorTodos(meusProdutos);
});

filtroPanificadora.addEventListener("click", () => {
    listaProdutos.innerHTML = "";
    Filtros.filtrarPorPanificadora(meusProdutos);
});

filtroFrutas.addEventListener("click", () => {
    listaProdutos.innerHTML = "";
    Filtros.filtrarPorFrutas(meusProdutos);
});

filtroBebidas.addEventListener("click", () => {
    listaProdutos.innerHTML = "";
    Filtros.filtrarPorBebidas(meusProdutos);
});
