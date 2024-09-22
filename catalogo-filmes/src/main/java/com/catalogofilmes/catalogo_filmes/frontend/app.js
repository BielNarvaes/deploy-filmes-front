document.addEventListener("DOMContentLoaded", function() {
    fetch("http://localhost:25000/api/filmes")
        .then(response => response.json())
        .then(filmes => {
            const container = document.getElementById('filmes-container');
            filmes.forEach(filme => {
                const div = document.createElement('div');
                div.innerHTML = `<h3>${filme.titulo}</h3><p>Gênero: ${filme.genero} | Ano: ${filme.ano}</p>`;
                container.appendChild(div);
            });
        })
        .catch(error => console.error("Erro ao carregar os filmes:", error));
});
