// Данные фильмов (те же, что на главной)
const movies = [
    {
        id: 1,
        title: "Аватар: Путь воды",
        genre: "Фантастика",
        year: 2022,
        country: "США",
        duration: "3 ч 12 мин",
        age: "12+",
        rating: 8.1,
        description: "Джейк Салли уже много лет живёт среди синих существ на Пандоре. У него и Нейтири растут дети. Семья Салли ведёт мирную жизнь, но вскоре идиллия заканчивается: на Пандору возвращаются люди. Они полны решимости колонизировать планету любой ценой. Джейк понимает, что его семья в опасности, и решает увести близких подальше от племени. Герои находят приют у народа рифы, который существует в гармонии с океаном. Но и там им не суждено обрести покой — война настигает беглецов везде.",
        genres: ["Фантастика", "Боевик", "Приключения"]
    },
    {
        id: 2,
        title: "Оппенгеймер",
        genre: "Драма",
        year: 2023,
        country: "США",
        duration: "3 ч 0 мин",
        age: "18+",
        rating: 8.5,
        description: "История американского физика Роберта Оппенгеймера, который руководил Манхэттенским проектом — секретной программой по созданию атомной бомбы во время Второй мировой войны. Фильм исследует его жизнь, работу и моральные дилеммы, с которыми он столкнулся после создания оружия массового поражения.",
        genres: ["Драма", "Биография", "История"]
    },
    {
        id: 3,
        title: "Барби",
        genre: "Комедия",
        year: 2023,
        country: "США",
        duration: "1 ч 54 мин",
        age: "12+",
        rating: 7.5,
        description: "Барби живёт в идеальном мире Барбиленда. Но однажды у неё начинают появляться «неидеальные» мысли — например, о смерти. Она отправляется в реальный мир, чтобы найти девочку, которая с ней играет, и выяснить, что пошло не так. Вместе с Кеном она переживает невероятные приключения.",
        genres: ["Комедия", "Фэнтези", "Приключения"]
    },
    {
        id: 4,
        title: "Джон Уик 4",
        genre: "Боевик",
        year: 2023,
        country: "США",
        duration: "2 ч 49 мин",
        age: "18+",
        rating: 8.2,
        description: "Джон Уик находит способ обрести свободу. Но ему предстоит сразиться с новым врагом — могущественным маркизом де Грамоном, у которого есть связи по всему миру. На кону не только жизнь Джона, но и будущее всей организации Правления.",
        genres: ["Боевик", "Триллер", "Криминал"]
    }
];

// Расписание сеансов (общее для всех фильмов)
const sessions = [
    { time: "10:00", hall: "Зал 1", price: 250 },
    { time: "13:30", hall: "Зал 2", price: 350 },
    { time: "17:00", hall: "Зал 1", price: 400 },
    { time: "20:30", hall: "Зал 3", price: 450 }
];

// Получаем ID фильма из URL
function getMovieId() {
    const params = new URLSearchParams(window.location.search);
    return parseInt(params.get('id'));
}

// Показать информацию о фильме
function displayMovieInfo() {
    const movieId = getMovieId();
    const movie = movies.find(m => m.id === movieId);
    
    if (!movie) {
        document.getElementById('movie-title').textContent = "Фильм не найден";
        return;
    }
    
    // Заполняем данные
    document.title = `Absolute Cinema - ${movie.title}`;
    document.getElementById('movie-title').textContent = movie.title;
    document.getElementById('movie-description').textContent = movie.description;
    
    // Мета-информация
    const metaHtml = `
        <span class="rating">⭐ ${movie.rating}</span>
        <span>${movie.year}</span>
        <span>${movie.country}</span>
        <span>${movie.duration}</span>
        <span>${movie.age}</span>
    `;
    document.getElementById('movie-meta').innerHTML = metaHtml;
    
    // Жанры
    const genresHtml = movie.genres.map(g => `<span class="genre-tag">${g}</span>`).join('');
    document.getElementById('movie-genres').innerHTML = genresHtml;
}

// Показать расписание сеансов
function displaySessions() {
    const sessionsHtml = sessions.map(session => `
        <div class="session-card">
            <div class="session-time">${session.time}</div>
            <div class="session-hall">${session.hall}</div>
            <div class="session-price">${session.price} ₽</div>
            <button class="book-btn" onclick="alert('Вы выбрали сеанс в ${session.time}')">Выбрать</button>
        </div>
    `).join('');
    
    document.getElementById('sessions-list').innerHTML = sessionsHtml;
}

// Запуск
displayMovieInfo();
displaySessions();
