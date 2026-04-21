const movies = [
    {
        id: 1,
        title: "Аватар: Путь воды",
        genre: "Фантастика",
        poster: "https://avatars.mds.yandex.net/i?id=2a2c3a8e5b5a4c5e8a5e5e5a5c5e5a5e"
    },
    {
        id: 2,
        title: "Оппенгеймер",
        genre: "Драма",
        poster: "https://avatars.mds.yandex.net/i?id=8f5e5a5e5a5e5a5e8a5e5e5a5c5e5a5e"
    },
    {
        id: 3,
        title: "Барби",
        genre: "Комедия",
        poster: "https://avatars.mds.yandex.net/i?id=5a5e5a5e5a5e5a5e8a5e5e5a5c5e5a5e"
    },
    {
        id: 4,
        title: "Джон Уик 4",
        genre: "Боевик",
        poster: "https://avatars.mds.yandex.net/i?id=2a2c3a8e5b5a4c5e8a5e5e5a5c5e5a5e"
    }
];

function displayMovies() {
    const grid = document.getElementById('movies-grid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    movies.forEach(movie => {
        const card = document.createElement('div');
        card.className = 'movie-card';
        card.onclick = () => {
            window.location.href = `movie.html?id=${movie.id}`;
        };
        card.innerHTML = `
            <div class="movie-poster">
                <div style="font-size: 3rem;">🎬</div>
            </div>
            <div class="movie-info">
                <div class="movie-title">${movie.title}</div>
                <div class="movie-genre">${movie.genre}</div>
            </div>
        `;
        grid.appendChild(card);
    });
}
displayMovies();
