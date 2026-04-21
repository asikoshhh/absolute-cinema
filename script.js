// Данные фильмов
const movies = [
    {
        id: 1,
        title: "Аватар: Путь воды",
        genre: "Фантастика",
        poster: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg"
    },
    {
        id: 2,
        title: "Оппенгеймер",
        genre: "Драма",
        poster: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg"
    },
    {
        id: 3,
        title: "Барби",
        genre: "Комедия",
        poster: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg"
    },
    {
        id: 4,
        title: "Джон Уик 4",
        genre: "Боевик",
        poster: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg"
    }
];

// Показать фильмы на странице
function displayMovies() {
    const grid = document.getElementById('movies-grid');
    grid.innerHTML = '';
    
    movies.forEach(movie => {
        const card = document.createElement('div');
        card.className = 'movie-card';
        card.innerHTML = `
            <img class="movie-poster" src="${movie.poster}" alt="${movie.title}">
            <div class="movie-info">
                <div class="movie-title">${movie.title}</div>
                <div class="movie-genre">${movie.genre}</div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Запуск
displayMovies();
