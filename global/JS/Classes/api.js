class Api {
    static baseURL = "https://api-kenzie-food.herokuapp.com"
    static token = ""

    static criarModalStatus(msg) {
        const section = document.createElement("section");
        section.style.width = "100vw";
        section.style.heigth = "100vh";
        section.style.position = "fixed";
        section.style.top = 0;
        section.style.display = "flex";
        section.style.justifyContent = "center";
        section.style.alignItems = "flex-start";

        const div = document.createElement("div");
        div.style.backgroundColor = "rgb(229, 227, 227)";
        div.style.width = "300px";
        div.style.heigth = "100px";
        div.style.borderRadius = "0 0 35px 35px";
        div.style.textAlign = "center";
        div.style.lineHeight = "100px";

        const p = document.createElement("p");
        p.innerText = msg;

        div.append(p);
        section.append(div);
        document.body.append(section);

        /* setTimeout(() => {
            window.location.reload();
        }, 3000); */
    };

    static async pegarTodosProdutos() {
        const produtos = await fetch(this.baseURL + "/products")
            .then(res => {
                return res.json();
            })
            .then(res => {
                return res;
            });
        return produtos;
    };

    static async cadastrarUsuario(obj) {
        const request = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        };

        return await fetch(this.baseURL + "/auth/register", request)
            .then(res => {
                if(res.status.toString()[0] === "4") {
                    this.criarModalStatus("Algo deu errado!");
                } else {
                    return res.json();
                };
            });
    };

    static async logarUsuario(obj) {
        const request = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        };

        return await fetch(this.baseURL + "/auth/login", request)
            .then(res => {
                return res.json();
            })
            .then(res => {
                localStorage.setItem("Authorization", res)

                if(localStorage.Authorization != "[object Object]") {
                    window.location = "../../paginas/usuario/usuario.html"
                };
            });
    };

    static async pegarMeusProdutos() {
        const request = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.Authorization}`
            }
        };

        return await fetch(this.baseURL + "/my/products", request)
            .then(res => {
                if(!res.ok) {
                    this.criarModalStatus(res.status);
                } else {
                    return res.json();
                }
            })
            .then(res => {
                return res;
            });
    };

    static async cadastrarProduto(obj) {
        const request = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.Authorization}`
            },
            body: JSON.stringify(obj)
        };

        return await fetch(this.baseURL + "/my/products", request)
            .then(res => {
                if(res.status.toString()[0] === "4") {
                    this.criarModalStatus();
                } else {
                    return res.json();
                };
            });
    };

    static async editarProduto(obj, idProduto) {
        const request = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.Authorization}`
            },
            body: JSON.stringify(obj)
        };

        return await fetch(this.baseURL + `/my/products/${idProduto}`, request)
            .then(res => {
                if(!res.ok) {
                    this.criarModalStatus(res.status);
                };
            });
    };

    static async deletarProduto(idProduto) {
        const request = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.Authorization}`
            }
        };

        return await fetch(this.baseURL + `/my/products/${idProduto}`, request)
            .then(res => {
                if(!res.ok) {
                    this.criarModalStatus(res.status);
                } else {
                    this.criarModalStatus("produto Deletado");
                };
            });
    };
};

export { Api };