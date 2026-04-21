const movies = [
    {
        id: 1,
        title: "Аватар: Путь воды",
        genre: "Фантастика",
        age: "12+",
        poster: "https://www.themoviedb.org/t/p/w1280/yFNn7uWudLLWDJqfj3fwh5CcUdR.jpg"
    },
    {
        id: 2,
        title: "Оппенгеймер",
        genre: "Драма",
        age: "18+",
        poster: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg"
    },
    {
        id: 3,
        title: "Барби",
        genre: "Комедия",
        age: "12+",
        poster: "https://media.themoviedb.org/t/p/w600_and_h900_face/kau707eF6UBvrHX3v5BSYckqSXm.jpg"
    },
    {
        id: 4,
        title: "Джон Уик 4",
        genre: "Боевик",
        age: "18+",
        poster: "https://media.themoviedb.org/t/p/w600_and_h900_face/o29otcx30U3EkqNVGC2feJVz5yr.jpg"
    },
    {
        id: 5,
        title: "Дюна: Часть вторая",
        genre: "Фантастика",
        age: "12+",
        poster: "https://media.themoviedb.org/t/p/w600_and_h900_face/3aLghRkuJc9cs770fxo4a6YWht3.jpg"
    },
    {
        id: 6,
        title: "Гладиатор 2",
        genre: "Исторический",
        age: "16+",
        poster: "https://media.themoviedb.org/t/p/w600_and_h900_face/6N7F1Ga9m0CTHziA2Fs7BQczaKZ.jpg"
    },
    {
        id: 7,
        title: "Веном 3",
        genre: "Боевик",
        age: "16+",
        poster: "https://media.themoviedb.org/t/p/w600_and_h900_face/YFcQ65dRrLpUpMiMFrrRV6rkEs.jpg"
    },
    {
        id: 8,
        title: "Головоломка 2",
        genre: "Мультфильм",
        age: "6+",
        poster: "https://media.themoviedb.org/t/p/w600_and_h900_face/5fXrqBIvatwSuph7nTuSETBQYxm.jpg"
    },
    {
        id: 9,
        title: "Ғашықпын саған",
        genre: "Мелодрама",
        age: "18+",
        poster: "https://i.ibb.co.com/1JzqZ3qr/70-100.webp"
    },
    {
        id: 10,
        title: "Ауру",
        genre: "Драма",
        age: "16+",
        poster: "https://media.themoviedb.org/t/p/w600_and_h900_face/rmzTWoQAebplUNC4fjnemNDGQXW.jpg"
    },
    {
        id: 11,
        title: "Қайтадан",
        genre: "Драма",
        age: "16+",
        poster: "https://media.themoviedb.org/t/p/w600_and_h900_face/n2v2Oon3MtgxYBDUeUcF4xdAAaW.jpg"
    },
    {
        id: 12,
        title: "Легенда об Аанге: Последний маг воздуха",
        genre: "Фэнтези",
        age: "12+",
        poster: "https://media.themoviedb.org/t/p/w600_and_h900_face/cypsdXImFEVN3NOlckf9ZVrBY6M.jpg"
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
            <img class="movie-poster" src="${movie.poster}" alt="${movie.title}">
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
