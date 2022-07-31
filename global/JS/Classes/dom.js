class Dom {

    static criarCards(produtos) {
        for(let i = 0; i < produtos.length; i++){
            const container_cards = document.getElementById('container__cards');

            const card = document.createElement('div');
            const card_header = document.createElement('div');
            const card_body = document.createElement('div');
            const card_descricao = document.createElement('div');
            const card_categoria = document.createElement('div');
            const card_adicionar_carrinho = document.createElement('div');

            card.classList.add('card');
            card.id = produtos[i].id;
            card_header.classList.add('card_header');
            card_body.classList.add('card_body');
            card_descricao.classList.add('card_descricao');
            card_categoria.classList.add('card_categoria');
            card_adicionar_carrinho.classList.add('card_adicionar_carrinho');

            const card_header_imagem = document.createElement('img');

            card_header_imagem.classList.add('card_imagem');

            card_header_imagem.src = produtos[i].imagem;

            card_header.appendChild(card_header_imagem);

            const nome_produto = document.createElement('h1');

            nome_produto.innerText = produtos[i].nome;

            card_body.append(nome_produto);

            const p_descricao = document.createElement('p');

            p_descricao.innerText = produtos[i].descricao;

            card_descricao.append(p_descricao);

            const span_categoria1 = document.createElement('span');

            span_categoria1.innerText = produtos[i].categoria;

            card_categoria.append(span_categoria1);

            const h3_valor = document.createElement('h3') ;
            const botao_card = document.createElement("button");
            const icon_cart = document.createElement('i');

            h3_valor.classList.add('card_valor');
            botao_card.classList.add('card_botao_carrinho');
            icon_cart.classList.add('fa-solid');
            icon_cart.classList.add('fa-cart-plus');
            icon_cart.id = "add_cart";
            icon_cart.name = "add_carrinho";

        
            h3_valor.innerText = produtos[i].preco;
            botao_card.id = "add_cart";
            botao_card.name = "add_carrinho";
            botao_card.append(icon_cart);
            card_adicionar_carrinho.append(h3_valor, botao_card);

            card_descricao.append(card_categoria);
            card_body.append(card_descricao, card_adicionar_carrinho);
            card.append(card_header, card_body);
            container_cards.append(card);
        };
    };


    static criarBotaoMobile() {
        const section_botao_mobile =  document.getElementById('section__botao__mobile');

        const botao_mobile = document.createElement('button');
        const icon_cart_botao_mobile = document.createElement('i');

        botao_mobile.classList.add('botao__carrinho');
        icon_cart_botao_mobile.classList.add('fa-solid');
        icon_cart_botao_mobile.classList.add('fa-cart-arrow-down');
        icon_cart_botao_mobile.classList.add('btn__carrinho__icone--tamanho');

        botao_mobile.appendChild(icon_cart_botao_mobile);
        botao_mobile.innerText = 'carrinho';

        section_botao_mobile.append(botao_mobile);

    };

    static criarItemCarrinho(id, img, nome, preco, categoria) {

        const li_carrinho_lista = document.createElement('li');
        li_carrinho_lista.classList.add('item__lista');


        const div_lista_container_box = document.createElement('div');

        div_lista_container_box.classList.add('lista__container__box');

        const div_lista_box_img = document.createElement('div');
        const img_lista_img = document.createElement('img');

        img_lista_img.src = img;

        div_lista_box_img.classList.add('lista__box__img');
        img_lista_img.classList.add('lista__img');

        div_lista_box_img.append(img_lista_img);

        const div_lista_box_info = document.createElement('div');
        const p_info_titulo = document.createElement('p');
        const p_info_categoria = document.createElement('p');
        const p_info_preco =  document.createElement('p');

        div_lista_box_info.classList.add('lista__box__info');
        p_info_titulo.classList.add('info__titulo') ;
        p_info_categoria.classList.add('info__categoria') ;
        p_info_preco.classList.add('info__preco');

        div_lista_box_info.append(p_info_titulo );
        div_lista_box_info.append(p_info_categoria);
        div_lista_box_info.append(p_info_preco);

        const div_lista_box_deletar = document.createElement('div');
        div_lista_box_deletar.classList.add('lista__box__deletar');
        const div_icone = document.createElement('div');
        div_icone.id = "del_cart";
        const i_icone_deletar = document.createElement('i');
        i_icone_deletar.id = id;

        i_icone_deletar.classList.add('fa-solid');
        i_icone_deletar.classList.add('fa-trash');
        i_icone_deletar.classList.add('lista__produtos__icone--deletar');
        i_icone_deletar.classList.add('lista__botao__deletar');

        p_info_titulo.innerText = nome;
        p_info_categoria.innerText = categoria;
        p_info_preco.innerText = preco;

        div_icone.append(i_icone_deletar);


        div_lista_box_deletar.append(div_icone);

        div_lista_container_box.appendChild(div_lista_box_img);
        div_lista_container_box.appendChild(div_lista_box_info);
        
        li_carrinho_lista.appendChild(div_lista_container_box);
        li_carrinho_lista.appendChild(div_lista_box_deletar);
        
        return li_carrinho_lista;
    };
};

export { Dom };