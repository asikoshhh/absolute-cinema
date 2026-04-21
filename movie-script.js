// Данные фильмов (полные, с постерами)
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
        genres: ["Фантастика", "Боевик", "Приключения"],
        poster: "https://www.themoviedb.org/t/p/w1280/yFNn7uWudLLWDJqfj3fwh5CcUdR.jpg"
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
        genres: ["Драма", "Биография", "История"],
        poster: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg"
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
        genres: ["Комедия", "Фэнтези", "Приключения"],
        poster: "https://media.themoviedb.org/t/p/w600_and_h900_face/kau707eF6UBvrHX3v5BSYckqSXm.jpg"
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
        genres: ["Боевик", "Триллер", "Криминал"],
        poster: "https://media.themoviedb.org/t/p/w600_and_h900_face/o29otcx30U3EkqNVGC2feJVz5yr.jpg"
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
        genres: ["Фантастика", "Драма", "Приключения"],
        poster: "https://media.themoviedb.org/t/p/w600_and_h900_face/3aLghRkuJc9cs770fxo4a6YWht3.jpg"
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
        genres: ["Исторический", "Боевик", "Драма"],
        poster: "https://media.themoviedb.org/t/p/w600_and_h900_face/6N7F1Ga9m0CTHziA2Fs7BQczaKZ.jpg"
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
        genres: ["Боевик", "Фантастика", "Триллер"],
        poster: "https://media.themoviedb.org/t/p/w600_and_h900_face/YFcQ65dRrLpUpMiMFrrRV6rkEs.jpg"
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
        genres: ["Мультфильм", "Комедия", "Семейный"],
        poster: "https://media.themoviedb.org/t/p/w600_and_h900_face/5fXrqBIvatwSuph7nTuSETBQYxm.jpg"
    },
    {
        id: 9,
        title: "Ғашықпын саған",
        genre: "Мелодрама",
        year: 2024,
        country: "Казахстан",
        duration: "1 ч 45 мин",
        age: "18+",
        rating: 7.8,
        description: "Романтическая история о любви, которая преодолевает все преграды. Главные герои встречаются в самый неожиданный момент и понимают, что их судьбы переплетены навсегда. Красивая казахская мелодрама о чувствах, семье и выборе.",
        genres: ["Мелодрама", "Романтика"],
        poster: "https://i.ibb.co.com/1JzqZ3qr/70-100.webp"
    },
    {
        id: 10,
        title: "Ауру",
        genre: "Драма",
        year: 2024,
        country: "Казахстан",
        duration: "1 ч 55 мин",
        age: "16+",
        rating: 8.0,
        description: "Глубокая драма о человеке, столкнувшемся с неизлечимой болезнью. Фильм исследует тему жизни, смерти и того, что действительно важно в последние моменты. Сильная актерская игра и пронзительный сюжет.",
        genres: ["Драма", "Психологический"],
        poster: "https://media.themoviedb.org/t/p/w600_and_h900_face/rmzTWoQAebplUNC4fjnemNDGQXW.jpg"
    },
    {
        id: 11,
        title: "Қайтадан",
        genre: "Драма",
        year: 2024,
        country: "Казахстан",
        duration: "1 ч 50 мин",
        age: "16+",
        rating: 7.6,
        description: "История о возможности начать всё заново. Главный герой получает второй шанс исправить ошибки прошлого. Фильм о прощении, надежде и силе духа.",
        genres: ["Драма", "Семейный"],
        poster: "https://media.themoviedb.org/t/p/w600_and_h900_face/n2v2Oon3MtgxYBDUeUcF4xdAAaW.jpg"
    },
    {
        id: 12,
        title: "Легенда об Аанге: Последний маг воздуха",
        genre: "Фэнтези",
        year: 2024,
        country: "США",
        duration: "2 ч 20 мин",
        age: "12+",
        rating: 7.2,
        description: "Экранизация культового мультсериала. Аанг, последний маг воздуха, просыпается после столетия в ледяной глыбе. Вместе с новыми друзьями он должен победить Огненную Нацию и восстановить баланс в мире.",
        genres: ["Фэнтези", "Приключения", "Боевик"],
        poster: "https://media.themoviedb.org/t/p/w600_and_h900_face/cypsdXImFEVN3NOlckf9ZVrBY6M.jpg"
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
    
    // Постер
    const posterContainer = document.querySelector('.poster-placeholder');
    if (posterContainer && movie.poster) {
        posterContainer.innerHTML = `<img src="${movie.poster}" alt="${movie.title}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 15px;" onerror="this.style.display='none'; this.parentElement.innerHTML='🎬'">`;
    }
    
    // Мета-информация с возрастным рейтингом
    let ageClass = '';
    if (movie.age === '18+') ageClass = 'age-restricted';
    else if (movie.age === '16+') ageClass = 'age-teen';
    else ageClass = 'age-allowed';
    
    const metaHtml = `
        <span class="rating">⭐ ${movie.rating}</span>
        <span>${movie.year}</span>
        <span>${movie.country}</span>
        <span>${movie.duration}</span>
        <span class="age-badge ${ageClass}">${movie.age}</span>
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
            <div class="session-price">${session.price} ₸</div>
            <button class="book-btn" onclick="window.location.href='seats.html?price=${session.price}'">Выбрать</button>
        </div>
    `).join('');
    
    document.getElementById('sessions-list').innerHTML = sessionsHtml;
}

// Запуск
displayMovieInfo();
displaySessions();
