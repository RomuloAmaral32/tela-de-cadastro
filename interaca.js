var campinput = document.getElementsByClassName("entrada");
let corpo = document.getElementById("areadetrabalho");
var cabecalhopresente = false;

function registro() {
    var todosPreenchidos = true;
    var campos = Array.from(campinput);

    // Verifica se todos os campos estão preenchidos
    campos.forEach(campo => {
        if (campo.value === "") {
            campo.style.border = "2px solid red";
            todosPreenchidos = false;
        } else {
            campo.style.border = "";
        }
    });

    if (todosPreenchidos) {
        // Verifica se o código do produto já existe na tabela
        let codigoProduto = campos[0].value;
        let existeProduto = false;

        let linhas = corpo.querySelectorAll("table tr");
        linhas.forEach(linha => {
            let celulas = linha.querySelectorAll("td");
            if (celulas.length > 0 && celulas[0].textContent === codigoProduto) {
                existeProduto = true;
            }
        });

        if (existeProduto) {
            alert("Já existe um produto com o mesmo código.");
        } else {
            let tabela = `
            <tr>
                <td>${campos[0].value}</td>
                <td>${campos[1].value}</td>
                <td>${campos[2].value}</td>
                <td>${campos[3].value}</td>
                <td>${campos[4].value}</td>
                <td>${campos[5].value}</td>
                <td>${campos[6].value}</td>
            </tr>`;

            if (!cabecalhopresente) {
                tabela = `
                <table>
                    <tr>
                        <th>Código do Produto</th>
                        <th>Marca do Produto</th>
                        <th>Tipo do Produto</th>
                        <th>Categoria do Produto</th>
                        <th>Preço Unitário do Produto</th>
                        <th>Custo do Produto</th>
                        <th>Observações</th>
                    </tr>
                    ${tabela}
                </table>`;
                cabecalhopresente = true;
                corpo.innerHTML = tabela;
            } else {
                let tabelaExistente = corpo.querySelector("table");
                tabelaExistente.innerHTML += tabela;
            }

            campos.forEach(campo => campo.value = "");
            campos[0].focus();
        }
    }
}
