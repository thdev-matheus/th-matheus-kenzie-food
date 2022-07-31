import { Api } from "../../../../global/JS/classes/api.js";

let meusProdutos = [];

await Api.pegarMeusProdutos()
    .then(res => {
        meusProdutos = res;
    });

const ul_ListaProdutos = document.querySelector("ul");

class TemplateProdutos {
    static listarProdutos(array){
        array.forEach((produto) => {

            const li_itemListaProdutos = document.createElement("li");
            const div_boxImgNome = document.createElement("div");
            const div_boxImg = document.createElement("div");
            const img_imagemProduto = document.createElement("img");
            const h2_nomeProduto = document.createElement("h2");
            const div_boxCategoria = document.createElement("div");
            const div_categoria = document.createElement("div");
            const div_descricao = document.createElement("div");
            const div_boxAcoes = document.createElement("div");
            const button_botaoEditarProduto = document.createElement("button");
            const button_botaoDeletarProduto = document.createElement("button");
            const i_iconeEditar = document.createElement("i");
            const i_iconeDeletar = document.createElement("i");

            li_itemListaProdutos.classList.add("itemListaProdutos");
            li_itemListaProdutos.setAttribute("id", `${produto.id}`);
            div_boxImgNome.classList.add("boxImgNome");
            div_boxImg.classList.add("boxImg");
            img_imagemProduto.classList.add("imagemProduto");
            h2_nomeProduto.classList.add("nomeProduto");
            div_boxCategoria.classList.add("boxCategoria");
            div_categoria.classList.add("categoria");
            div_descricao.classList.add("descricao");
            div_boxAcoes.classList.add("boxAcoes");
            button_botaoEditarProduto.setAttribute("id", `botaoEditar`);
            button_botaoEditarProduto.classList.add("conteudo");
            button_botaoEditarProduto.classList.add("botaoEditarProduto");
            button_botaoDeletarProduto.classList.add("conteudo");
            button_botaoDeletarProduto.classList.add("botaoDeletarProduto");
            button_botaoDeletarProduto.setAttribute("id", "botaoDeletar");
            i_iconeEditar.classList.add("fa-solid");
            i_iconeEditar.classList.add("fa-pen-to-square");
            i_iconeEditar.setAttribute("id", "btnEditar");
            i_iconeDeletar.classList.add("fa-solid");
            i_iconeDeletar.classList.add("fa-trash");
            i_iconeDeletar.setAttribute("id", "btnDeletar");

            img_imagemProduto.src = `${produto.imagem}`;
            h2_nomeProduto.innerText = `${produto.nome}`;
            div_categoria.innerText = `${produto.categoria}`;
            div_descricao.innerText = `${produto.descricao}`;
            
            ul_ListaProdutos.append(li_itemListaProdutos);
            li_itemListaProdutos.append(div_boxImgNome, div_boxCategoria,div_descricao,div_boxAcoes);
            div_boxImgNome.append(div_boxImg, h2_nomeProduto);
            div_boxImg.append(img_imagemProduto);
            div_boxCategoria.append(div_categoria);
            div_boxAcoes.append(button_botaoEditarProduto, button_botaoDeletarProduto);
            button_botaoDeletarProduto.append(i_iconeDeletar);
            button_botaoEditarProduto.append(i_iconeEditar);
        });
    };
};

class Logout {
    static modalUsuario() {      
            const body = document.querySelector("body");
            const div_logout = document.createElement("div");
            const div_logout_header = document.createElement("div");
            const div_botao = document.createElement("div");
            const btn_logout = document.createElement("button");
            const div_container_header = document.createElement("div");

            div_logout.classList.add("logout");
            div_logout.setAttribute("id", "logoutID");
            div_logout_header.classList.add("logout_header");
            div_botao.classList.add("container_botao");
            div_container_header.classList.add("container_header");
            btn_logout.classList.add("btn_logout");
            btn_logout.setAttribute("id", "btnLogout");

            div_logout_header.innerText = "Usuario 1";
            btn_logout.innerText = "Logout";
            

            body.append(div_logout);
            div_botao.append(btn_logout);
            div_container_header.append(div_logout_header);
            div_logout.append( div_container_header, div_botao);
    };
};

TemplateProdutos.listarProdutos(meusProdutos);


Logout.modalUsuario();

const modal = document.getElementById("logoutID");
const divImg = document.querySelector(".boxImagem");


divImg.addEventListener("click", (event) => {
    event.preventDefault();

    if(modal.style.display === "none") {
        modal.style.display = "inline-flex";
    }else {
        modal.style.display = "none";
    };
});

const btnlogout = document.getElementById("btnLogout");

btnlogout.addEventListener("click", (event) => {
            event.preventDefault();
            localStorage.clear();
            window.location = "../../index.html";
});

export { TemplateProdutos };
