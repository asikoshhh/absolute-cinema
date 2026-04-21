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
        card.innerHTML = `
            <img class="movie-poster" src="${movie.poster}" alt="${movie.title}" onerror="this.src='https://placehold.co/300x450/0f3460/e94560?text=${encodeURIComponent(movie.title)}'">
            <div class="movie-info">
                <div class="movie-title">${movie.title}</div>
                <div class="movie-genre">${movie.genre}</div>
            </div>
        `;
        grid.appendChild(card);
    });
}

displayMovies();