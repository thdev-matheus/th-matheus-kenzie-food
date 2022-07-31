import { Dom } from "../../global/JS/Classes/dom.js";

class FiltrosHome {

    static filtrarPorPanificadora(array) {
        const filtro = array.filter((produto) => {
            return produto.categoria === "Panificadora";
        });

        Dom.criarCards(filtro);
    };

    static filtrarPorFrutas(array) {
        const filtro = array.filter((produto) => {
            return produto.categoria === "Frutas";
        });

        Dom.criarCards(filtro);
    };
    
    static filtrarPorBebidas(array) {
        const filtro = array.filter((produto) => {
            return produto.categoria === "Bebidas";
        });

        Dom.criarCards(filtro);
    };
    
    static filtrarPorTodos(array){
        const filtro = array.filter((produto) => {
            return produto.categoria;
        });

        Dom.criarCards(filtro);
    };

    static filtrarPorPesquisa(array, valor) {
        const filtro = array.filter((produto) => {
            if(produto.nome.toLowerCase().includes(valor) || produto.categoria.toLowerCase().includes(valor)){
                return produto;
            };
        });

        Dom.criarCards(filtro);
    };
};

export { FiltrosHome };