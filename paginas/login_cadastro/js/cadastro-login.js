import { Api } from "../../../global/JS/Classes/api.js";

class Login{
    static criarModalLogin() {
        const section_cadastro_login = document.querySelector(".cadastro_login");
        const section_box_login = document.createElement("section");
        const div_box_login = document.createElement("div");
        const div_box_header = document.createElement("div");
        const h1_header = document.createElement("h1");
        const div_form_box = document.createElement("div");
        const form_box_form = document.createElement("form");
        const input_email = document.createElement("input");
        const input_password = document.createElement("input");
        const button_form = document.createElement("button");
        const p_redirecionamento = document.createElement("p");
        const span_redirecionamento = document.createElement("span");   
        section_box_login.classList.add("box_login");
        div_box_login.classList.add("box_login")
        div_box_login.classList.add("box_content");
        div_box_header.classList.add("box_content");
        div_box_header.classList.add("header");
        div_form_box.classList.add("box_form");
        form_box_form.classList.add("box_form");
        form_box_form.classList.add("formulario");
        form_box_form.classList.add("login");
        input_email.setAttribute("type", "email");
        input_email.setAttribute("name", "email");
        input_email.setAttribute("placeholder", "Seu E-mail");
        input_password.setAttribute("type", "password");
        input_password.setAttribute("name", "password");
        input_password.setAttribute("placeholder", "Sua Senha");

        button_form.classList.add("box_form");
        button_form.classList.add("form_btn");
        button_form.setAttribute("type", "submit")  
        button_form.setAttribute("id", "botao_login");

        h1_header.innerText = "Login";
        p_redirecionamento.innerText = "Não tem Login?";
        span_redirecionamento.innerText = "  Faça Cadastro"
        span_redirecionamento.id = "facaCadastro";
        button_form.innerText = "Login";

        section_cadastro_login.append(section_box_login);
        section_box_login.append(div_box_header, div_form_box, p_redirecionamento);
        div_box_header.append(h1_header);   
        div_form_box.append(form_box_form);
        form_box_form.append(input_email, input_password, button_form); 
        p_redirecionamento.append(span_redirecionamento);   
        Login.redirecionarCadastro();

    };

    static redirecionarCadastro(){
        const spanRedirecionamento = document.getElementsByTagName("span")[0];

        spanRedirecionamento.addEventListener("click", () => {
            const containerLogin = document.getElementsByTagName("section")[1];
            const containerCadastro = document.getElementsByTagName("section")[2];
            if(containerLogin.style.display === "flex"){
            containerLogin.style.display = "none";
            containerCadastro.style.display = "flex";
            } else {
                containerLogin.style.display = "none";
            };
        });
    };
};


class Cadastro{
    
    static criarModalCadastro(){
        const section_cadastro_login = document.querySelector(".cadastro_login");
        const section_box_cadastro = document.createElement("section");
        const div_box_cadastro = document.createElement("div");
        const div_box_header = document.createElement("div");
        const h1_header = document.createElement("h1");
        const div_form_box = document.createElement("div");
        const form_box_form = document.createElement("form");
        const input_username = document.createElement("input");
        const input_email = document.createElement("input");
        const input_password = document.createElement("input");
        const form_btn = document.createElement("button");
        const p_redirecionamento = document.createElement("p");
        const span_redirecionamento = document.createElement("span");   
        section_box_cadastro.classList.add("box_cadastro");
        div_box_cadastro.classList.add("box_cadastro");
        div_box_cadastro.classList.add("box_content");
        div_box_header.classList.add("box_content");
        div_box_header.classList.add("header");
        div_form_box.classList.add("box_form");
        form_box_form.classList.add("box_form");
        form_box_form.classList.add("formulario");
        form_box_form.classList.add("cadastro");
        input_username.setAttribute("type", "text");
        input_username.setAttribute("name", "name");
        input_username.setAttribute("placeholder", "Seu nome");
        input_email.setAttribute("type", "email");
        input_email.setAttribute("name", "email");
        input_email.setAttribute("placeholder", "Seu e-mail");
        input_password.setAttribute("type", "password");
        input_password.setAttribute("name", "password");
        input_password.setAttribute("placeholder", "Sua Senha");
        form_btn.classList.add("box_form");
        form_btn.classList.add("form_btn");
        form_btn.setAttribute("id", "botao_cadastro");
        form_btn.setAttribute("type", "submit");    
        h1_header.innerText = "Cadastro";
        p_redirecionamento.innerText = "Já tem cadastro?";
        span_redirecionamento.innerText = "  Faça Login";
        span_redirecionamento.id = "facaLogin";
        form_btn.innerText = "Cadastrar";

        section_cadastro_login.append(section_box_cadastro);
        section_box_cadastro.append(div_box_cadastro);
        div_box_cadastro.append(div_box_header, div_form_box, p_redirecionamento);
        div_box_header.append(h1_header);
        div_form_box.append(form_box_form);
        p_redirecionamento.append(span_redirecionamento);
        form_box_form.append(input_username, input_email, input_password, form_btn);

        Cadastro.redirecionarLogin();
    };

    static redirecionarLogin(){
        const spanRedirecionamento = document.getElementsByTagName("span")[1]
        
        spanRedirecionamento.addEventListener("click", () => {
        const containerLogin = document.getElementsByTagName("section")[1];
        const containerCadastro = document.getElementsByTagName("section")[2];

        if(containerCadastro.style.display == "" || containerCadastro.style.display == "flex") {
        containerCadastro.style.display = "none";
        containerLogin.style.display = "flex";
        } else {
        containerCadastro.style.display = "none";
        };
        });
    };
};




class InformacoesApi {
    static dadosUsuario = {};

    static pegarValores(array) {
        array.forEach((elem) => {
            if(elem.value != "") {
                this.dadosUsuario[elem.name] = elem.value
            }
        });
    };
};

Login.criarModalLogin();
Cadastro.criarModalCadastro();




const buttonCadastro = document.getElementById("botao_cadastro");

const valoresCadastro = document.querySelector(".cadastro");
const descValoresCadastro = [...valoresCadastro];


buttonCadastro.addEventListener("click", async (event) => {
    event.preventDefault();
    InformacoesApi.pegarValores(descValoresCadastro);
    await Api.cadastrarUsuario(InformacoesApi.dadosUsuario);

    const containerLogin = document.getElementsByTagName("section")[1];
    const containerCadastro = document.getElementsByTagName("section")[2];
    if(containerCadastro.style.display == "" || containerCadastro.style.display == "flex") {
        containerCadastro.style.display = "none";
        containerLogin.style.display = "flex";
    } else {
        containerCadastro.style.display = "none";
    };
});


const buttonLogin = document.getElementById("botao_login");

const valoresLogin = document.querySelector(".login");
const descValoresLogin = [...valoresLogin];

buttonLogin.addEventListener("click", async (event) => {
    event.preventDefault();  
        InformacoesApi.pegarValores(descValoresLogin);
        await Api.logarUsuario(InformacoesApi.dadosUsuario);
});


