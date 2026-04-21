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
    },
    {
        id: 5,
        title: "Дюна: Часть вторая",
        genre: "Фантастика",
        year: 2024,
        country: "США",
        duration: "2 ч 46 мин",
        age: "12+",
        rating: 8.4,
        description: "Пол Атрейдес объединяется с Чани и фременами, чтобы отомстить заговорщикам, уничтожившим его семью. Он сталкивается с выбором между любовью своей жизни и судьбой известной вселенной, пытаясь предотвратить страшное будущее, которое предвидит.",
        genres: ["Фантастика", "Драма", "Приключения"]
    },
    {
        id: 6,
        title: "Гладиатор 2",
        genre: "Исторический",
        year: 2024,
        country: "США",
        duration: "2 ч 30 мин",
        age: "16+",
        rating: 7.8,
        description: "Продолжение эпической истории о мести и чести в Древнем Риме. Новый герой встаёт на путь гладиатора, чтобы бросить вызов коррумпированной империи.",
        genres: ["Исторический", "Боевик", "Драма"]
    },
    {
        id: 7,
        title: "Веном 3",
        genre: "Боевик",
        year: 2024,
        country: "США",
        duration: "1 ч 50 мин",
        age: "16+",
        rating: 7.2,
        description: "Эдди Брок и Веном сталкиваются с новым врагом, который угрожает не только их жизни, но и всему человечеству. Им предстоит самое опасное приключение.",
        genres: ["Боевик", "Фантастика", "Триллер"]
    },
    {
        id: 8,
        title: "Головоломка 2",
        genre: "Мультфильм",
        year: 2024,
        country: "США",
        duration: "1 ч 40 мин",
        age: "6+",
        rating: 8.0,
        description: "Новые эмоции появляются в голове Райли, когда она вступает в подростковый возраст. Тревога, зависть и скука пытаются взять контроль над пультом управления.",
        genres: ["Мультфильм", "Комедия", "Семейный"]
    },
    {
        id: 9,
        title: "Мастер и Маргарита",
        genre: "Фэнтези",
        year: 2024,
        country: "Россия",
        duration: "2 ч 37 мин",
        age: "18+",
        rating: 8.3,
        description: "Современная экранизация культового романа Булгакова. Воланд со своей свитой прибывает в Москву 1930-х годов, чтобы устроить грандиозный бал и наказать бездуховное общество.",
        genres: ["Фэнтези", "Драма", "Мистика"]
    },
    {
        id: 10,
        title: "Холоп 2",
        genre: "Комедия",
        year: 2024,
        country: "Россия",
        duration: "1 ч 50 мин",
        age: "12+",
        rating: 7.0,
        description: "Продолжение популярной комедии о том, как эгоистичный мажор попадает в деревню XIX века, чтобы перевоспитаться. На этот раз всё будет ещё смешнее.",
        genres: ["Комедия", "Семейный"]
    },
    {
        id: 11,
        title: "Бременские музыканты",
        genre: "Семейный",
        year: 2024,
        country: "Россия",
        duration: "1 ч 48 мин",
        age: "6+",
        rating: 7.6,
        description: "Новая музыкальная экранизация знаменитой сказки. Трубадур, Осёл, Пёс, Кот и Петух отправляются в захватывающее приключение, чтобы найти своё место в жизни.",
        genres: ["Семейный", "Музыкальный", "Приключения"]
    },
    {
        id: 12,
        title: "Лед 3",
        genre: "Мелодрама",
        year: 2024,
        country: "Россия",
        duration: "1 ч 55 мин",
        age: "12+",
        rating: 7.4,
        description: "Третья часть популярной музыкальной драмы о фигурном катании. Герои сталкиваются с новыми вызовами на льду и в личной жизни.",
        genres: ["Мелодрама", "Музыкальный", "Спорт"]
    }
];

// Расписание сеансов (общее для всех фильмов)
const sessions = [
    { time: "10:00", hall: "Зал 1", price: 1800 },
    { time: "13:30", hall: "Зал 2", price: 2200 },
    { time: "17:00", hall: "Зал 1", price: 2800 },
    { time: "20:30", hall: "Зал 3", price: 3200 }
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
    <span class="age-badge">${movie.age}</span>
`;
    document.getElementById('movie-meta').innerHTML = metaHtml;
    
    // Жанры
    const genresHtml = movie.genres.map(g => `<span class="genre-tag">${g}</span>`).join('');
    document.getElementById('movie-genres').innerHTML = genresHtml;

    // Постер
const posterUrl = movie.poster || '';
const posterContainer = document.querySelector('.poster-placeholder');
if (posterContainer && posterUrl) {
    posterContainer.innerHTML = `<img src="${posterUrl}" alt="${movie.title}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 15px;" onerror="this.style.display='none'; this.parentElement.innerHTML='🎬'">`;
}

}

// Показать расписание сеансов
function displaySessions() {
    const sessionsHtml = sessions.map(session => `
        <div class="session-card">
            <div class="session-time">${session.time}</div>
            <div class="session-hall">${session.hall}</div>
            <div class="session-price">${session.price} ₸</div>
            <button class="book-btn" onclick="window.location.href='seats.html?price=${session.price}'">Выбрать</button>
        </div>
    `).join('');
    
    document.getElementById('sessions-list').innerHTML = sessionsHtml;
}

// Запуск
displayMovieInfo();
displaySessions();
