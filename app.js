function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // Inicializa uma string vazia para armazenar os resultados formatados em HTML
    let resultados = "";

    // Itera sobre cada item de dados e constrói o HTML correspondente
    for (let dado of dados) {
        // Cria um novo elemento de resultado com as informações do dado atual
        resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descrição-meta">${dado.descricao}
                    Ariel é um dos livros de poesia mais aclamados de Sylvia Plath...
                </p>
                <a href="${dado.link}" target="_blank">Saiba Mais</a>
            </div>
        `;
    }

    // Atualiza o conteúdo da seção com os resultados gerados
    section.innerHTML = resultados;
}
