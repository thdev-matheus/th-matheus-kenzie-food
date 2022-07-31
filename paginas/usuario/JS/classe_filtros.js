import { TemplateProdutos } from "./dom/dom_usuario.js";

class Filtros {

    static filtrarPorPanificadora(array){
        const filtro = array.filter((produto) => {
            return produto.categoria === "Panificadora";
        });

        TemplateProdutos.listarProdutos(filtro);
    };

    static filtrarPorFrutas(array){
        const filtro = array.filter((produto) => {
            return produto.categoria === "Frutas";
        });

        TemplateProdutos.listarProdutos(filtro);
    };
    
    static filtrarPorBebidas(array){
        const filtro = array.filter((produto) => {
            return produto.categoria === "Bebidas";
        });

        TemplateProdutos.listarProdutos(filtro);
    };
    
    static filtrarPorTodos(array){
        const filtro = array.filter((produto) => {
            return produto.categoria;
        });

        TemplateProdutos.listarProdutos(filtro);
    };

    static filtrarPorPesquisa(array, valor){
        const filtro = array.filter((produto) => {
            if(produto.nome.toLowerCase().includes(valor) || produto.categoria.toLowerCase().includes(valor)){
                return produto;
            };
        });

        TemplateProdutos.listarProdutos(filtro);
    };
};


export { Filtros };
