const movies = [
    {
        id: 1,
        title: "Аватар: Путь воды",
        genre: "Фантастика",
        age: "12+",
        poster: "https://image.openmoviedb.com/kinopoisk-poster/251733/300x450"
    },
    {
        id: 2,
        title: "Оппенгеймер",
        genre: "Драма",
        age: "18+",
        poster: "https://image.openmoviedb.com/kinopoisk-poster/1154673/300x450"
    },
    {
        id: 3,
        title: "Барби",
        genre: "Комедия",
        age: "12+",
        poster: "https://image.openmoviedb.com/kinopoisk-poster/4944512/300x450"
    },
    {
        id: 4,
        title: "Джон Уик 4",
        genre: "Боевик",
        age: "18+",
        poster: "https://image.openmoviedb.com/kinopoisk-poster/3697881/300x450"
    },
    {
        id: 5,
        title: "Дюна: Часть вторая",
        genre: "Фантастика",
        age: "12+",
        poster: "https://image.openmoviedb.com/kinopoisk-poster/476655/300x450"
    },
    {
        id: 6,
        title: "Гладиатор 2",
        genre: "Исторический",
        age: "16+",
        poster: "https://image.openmoviedb.com/kinopoisk-poster/1143242/300x450"
    },
    {
        id: 7,
        title: "Веном 3",
        genre: "Боевик",
        age: "16+",
        poster: "https://image.openmoviedb.com/kinopoisk-poster/502778/300x450"
    },
    {
        id: 8,
        title: "Головоломка 2",
        genre: "Мультфильм",
        age: "6+",
        poster: "https://image.openmoviedb.com/kinopoisk-poster/519309/300x450"
    },
    {
        id: 9,
        title: "Мастер и Маргарита",
        genre: "Фэнтези",
        age: "18+",
        poster: "https://image.openmoviedb.com/kinopoisk-poster/475152/300x450"
    },
    {
        id: 10,
        title: "Холоп 2",
        genre: "Комедия",
        age: "12+",
        poster: "https://image.openmoviedb.com/kinopoisk-poster/530435/300x450"
    },
    {
        id: 11,
        title: "Бременские музыканты",
        genre: "Семейный",
        age: "6+",
        poster: "https://image.openmoviedb.com/kinopoisk-poster/529185/300x450"
    },
    {
        id: 12,
        title: "Лед 3",
        genre: "Мелодрама",
        age: "12+",
        poster: "https://image.openmoviedb.com/kinopoisk-poster/535341/300x450"
    }
];

function displayMovies() {
    const grid = document.getElementById('movies-grid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    movies.forEach(movie => {
        let ageClass = '';
        if (movie.age === '18+') ageClass = 'age-restricted';
        else if (movie.age === '16+') ageClass = 'age-teen';
        else ageClass = 'age-allowed';
        
        const card = document.createElement('div');
        card.className = 'movie-card';
        card.onclick = () => {
            window.location.href = `movie.html?id=${movie.id}`;
        };
        card.innerHTML = `
            <img class="movie-poster" src="${movie.poster}" alt="${movie.title}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">
            <div class="movie-poster-fallback" style="display: none; width: 100%; height: 300px; background: linear-gradient(135deg, #e50914 0%, #b20710 100%); align-items: center; justify-content: center; font-size: 3rem;">🎬</div>
            <div class="movie-info">
                <div class="movie-title">${movie.title}</div>
                <div class="movie-genre">${movie.genre}</div>
                <div class="movie-age ${ageClass}">${movie.age}</div>
            </div>
        `;
        
        // Если постер не загрузился, показываем заглушку
        const img = card.querySelector('.movie-poster');
        img.onerror = () => {
            img.style.display = 'none';
            img.nextElementSibling.style.display = 'flex';
        };
        
        grid.appendChild(card);
    });
}

// ВОТ ЭТА СТРОКА БЫЛА ПРОПУЩЕНА — ЗАПУСКАЕМ ФУНКЦИЮ
displayMovies();
