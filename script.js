const movies = [
    {
        id: 1,
        title: "Аватар: Путь воды",
        genre: "Фантастика",
        age: "12+"
    },
    {
        id: 2,
        title: "Оппенгеймер",
        genre: "Драма",
        age: "18+"
    },
    {
        id: 3,
        title: "Барби",
        genre: "Комедия",
        age: "12+"
    },
    {
        id: 4,
        title: "Джон Уик 4",
        genre: "Боевик",
        age: "18+"
    },
    {
        id: 5,
        title: "Дюна: Часть вторая",
        genre: "Фантастика",
        age: "12+"
    },
    {
        id: 6,
        title: "Гладиатор 2",
        genre: "Исторический",
        age: "16+"
    },
    {
        id: 7,
        title: "Веном 3",
        genre: "Боевик",
        age: "16+"
    },
    {
        id: 8,
        title: "Головоломка 2",
        genre: "Мультфильм",
        age: "6+"
    },
    {
        id: 9,
        title: "Мастер и Маргарита",
        genre: "Фэнтези",
        age: "18+"
    },
    {
        id: 10,
        title: "Холоп 2",
        genre: "Комедия",
        age: "12+"
    },
    {
        id: 11,
        title: "Бременские музыканты",
        genre: "Семейный",
        age: "6+"
    },
    {
        id: 12,
        title: "Лед 3",
        genre: "Мелодрама",
        age: "12+"
    }
];

function displayMovies() {
    const grid = document.getElementById('movies-grid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    movies.forEach(movie => {
        // Определяем класс возрастного рейтинга
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
            <div class="movie-poster">
                <div style="font-size: 3rem;">🎬</div>
            </div>
            <div class="movie-info">
                <div class="movie-title">${movie.title}</div>
                <div class="movie-genre">${movie.genre}</div>
                <div class="movie-age ${ageClass}">${movie.age}</div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// ВОТ ЭТА СТРОКА БЫЛА ПРОПУЩЕНА — ЗАПУСКАЕМ ФУНКЦИЮ
displayMovies();
