document.addEventListener("DOMContentLoaded", async function() {
    const apiUrl = 'http://localhost:8080/api/filmes';
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`Erro: ${response.status}`);
        }
        const filmes = await response.json();

        const conteudoDiv = document.querySelector('.conteudo');
        conteudoDiv.innerHTML = '';

        filmes.forEach(filme => {
            const card = document.createElement('main');
            card.classList.add('card');
            card.innerHTML = `
                <header class="title">
                    <h2>${filme.titulo}</h2>
                </header>
                <section class="infos">
                    <article class="genero">
                        <p>Gênero</p>
                        <h4>${filme.genero}</h4>
                    </article>
                    <article class="ano">
                        <p>Ano</p>
                        <h4>${filme.ano}</h4>
                    </article>
                </section>
            `;
            conteudoDiv.appendChild(card);
        });

    } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
    }
});
