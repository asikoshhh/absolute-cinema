// ============================================================
//  Absolute Cinema — Shared Data
// ============================================================

const MOVIES = [
  {
    id: 1,
    title: "Аватар: Путь воды",
    genre: "Фантастика",
    genres: ["Фантастика", "Боевик", "Приключения"],
    year: 2022, country: "США",
    duration: "3 ч 12 мин", age: "12+",
    rating: 8.1, minPrice: 1800, country_tag: null,
    description: "Джейк Салли уже много лет живёт среди синих существ на Пандоре. У него и Нейтири растут дети. Семья Салли ведёт мирную жизнь, но вскоре идиллия заканчивается: на Пандору возвращаются люди. Джейк понимает, что его семья в опасности, и решает увести близких подальше от племени. Герои находят приют у народа рифы, который существует в гармонии с океаном.",
    poster: "https://www.themoviedb.org/t/p/w780/yFNn7uWudLLWDJqfj3fwh5CcUdR.jpg",
    featured: true
  },
  {
    id: 2,
    title: "Оппенгеймер",
    genre: "Драма",
    genres: ["Драма", "Биография", "История"],
    year: 2023, country: "США",
    duration: "3 ч 0 мин", age: "18+",
    rating: 8.5, minPrice: 2200,
    description: "История американского физика Роберта Оппенгеймера, который руководил Манхэттенским проектом — секретной программой по созданию атомной бомбы. Фильм исследует его жизнь, работу и моральные дилеммы, с которыми он столкнулся.",
    poster: "https://image.tmdb.org/t/p/w780/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    featured: true
  },
  {
    id: 3,
    title: "Барби",
    genre: "Комедия",
    genres: ["Комедия", "Фэнтези", "Приключения"],
    year: 2023, country: "США",
    duration: "1 ч 54 мин", age: "12+",
    rating: 7.5, minPrice: 1800,
    description: "Барби живёт в идеальном мире Барбиленда. Но однажды у неё начинают появляться «неидеальные» мысли. Она отправляется в реальный мир, чтобы найти девочку, которая с ней играет.",
    poster: "https://media.themoviedb.org/t/p/w780/kau707eF6UBvrHX3v5BSYckqSXm.jpg"
  },
  {
    id: 4,
    title: "Джон Уик 4",
    genre: "Боевик",
    genres: ["Боевик", "Триллер", "Криминал"],
    year: 2023, country: "США",
    duration: "2 ч 49 мин", age: "18+",
    rating: 8.2, minPrice: 2200,
    description: "Джон Уик находит способ обрести свободу. Но ему предстоит сразиться с новым врагом — могущественным маркизом де Грамоном, у которого есть связи по всему миру.",
    poster: "https://media.themoviedb.org/t/p/w780/o29otcx30U3EkqNVGC2feJVz5yr.jpg",
    featured: true
  },
  {
    id: 5,
    title: "Дюна: Часть вторая",
    genre: "Фантастика",
    genres: ["Фантастика", "Драма", "Приключения"],
    year: 2024, country: "США",
    duration: "2 ч 46 мин", age: "12+",
    rating: 8.4, minPrice: 2200,
    description: "Пол Атрейдес объединяется с Чани и фременами, чтобы отомстить заговорщикам, уничтожившим его семью. Он сталкивается с выбором между любовью своей жизни и судьбой вселенной.",
    poster: "https://media.themoviedb.org/t/p/w780/3aLghRkuJc9cs770fxo4a6YWht3.jpg",
    featured: true
  },
  {
    id: 6,
    title: "Гладиатор 2",
    genre: "Исторический",
    genres: ["Исторический", "Боевик", "Драма"],
    year: 2024, country: "США",
    duration: "2 ч 30 мин", age: "16+",
    rating: 7.8, minPrice: 1800,
    description: "Продолжение эпической истории о мести и чести в Древнем Риме. Новый герой встаёт на путь гладиатора, чтобы бросить вызов коррумпированной империи.",
    poster: "https://media.themoviedb.org/t/p/w780/6N7F1Ga9m0CTHziA2Fs7BQczaKZ.jpg"
  },
  {
    id: 7,
    title: "Веном 3",
    genre: "Боевик",
    genres: ["Боевик", "Фантастика", "Триллер"],
    year: 2024, country: "США",
    duration: "1 ч 50 мин", age: "16+",
    rating: 7.2, minPrice: 1800,
    description: "Эдди Брок и Веном сталкиваются с новым врагом, который угрожает не только их жизни, но и всему человечеству.",
    poster: "https://media.themoviedb.org/t/p/w780/YFcQ65dRrLpUpMiMFrrRV6rkEs.jpg"
  },
  {
    id: 8,
    title: "Головоломка 2",
    genre: "Мультфильм",
    genres: ["Мультфильм", "Комедия", "Семейный"],
    year: 2024, country: "США",
    duration: "1 ч 40 мин", age: "6+",
    rating: 8.0, minPrice: 1500,
    description: "Новые эмоции появляются в голове Райли, когда она вступает в подростковый возраст. Тревога, зависть и скука пытаются взять контроль над пультом управления.",
    poster: "https://media.themoviedb.org/t/p/w780/5fXrqBIvatwSuph7nTuSETBQYxm.jpg"
  },
  {
    id: 9,
    title: "Ғашықпын саған",
    genre: "Мелодрама",
    genres: ["Мелодрама", "Романтика"],
    year: 2024, country: "Казахстан",
    duration: "1 ч 45 мин", age: "18+",
    rating: 7.8, minPrice: 1500, country_tag: "Казахстан",
    description: "Романтическая история о любви, которая преодолевает все преграды. Красивая казахская мелодрама о чувствах, семье и выборе.",
    poster: "https://i.ibb.co.com/1JzqZ3qr/70-100.webp"
  },
  {
    id: 10,
    title: "Ауру",
    genre: "Драма",
    genres: ["Драма", "Психологический"],
    year: 2024, country: "Казахстан",
    duration: "1 ч 55 мин", age: "16+",
    rating: 8.0, minPrice: 1500, country_tag: "Казахстан",
    description: "Глубокая драма о человеке, столкнувшемся с неизлечимой болезнью. Сильная актёрская игра и пронзительный сюжет.",
    poster: "https://media.themoviedb.org/t/p/w780/rmzTWoQAebplUNC4fjnemNDGQXW.jpg"
  },
  {
    id: 11,
    title: "Қайтадан",
    genre: "Драма",
    genres: ["Драма", "Семейный"],
    year: 2024, country: "Казахстан",
    duration: "1 ч 50 мин", age: "16+",
    rating: 7.6, minPrice: 1500, country_tag: "Казахстан",
    description: "История о возможности начать всё заново. Главный герой получает второй шанс исправить ошибки прошлого. Фильм о прощении, надежде и силе духа.",
    poster: "https://media.themoviedb.org/t/p/w780/n2v2Oon3MtgxYBDUeUcF4xdAAaW.jpg"
  },
  {
    id: 12,
    title: "Аватар Аанг",
    genre: "Фэнтези",
    genres: ["Фэнтези", "Приключения", "Боевик"],
    year: 2024, country: "США",
    duration: "2 ч 20 мин", age: "12+",
    rating: 7.2, minPrice: 1800,
    description: "Аанг, последний маг воздуха, просыпается после столетия в ледяной глыбе. Вместе с новыми друзьями он должен победить Огненную Нацию и восстановить баланс в мире.",
    poster: "https://media.themoviedb.org/t/p/w780/cypsdXImFEVN3NOlckf9ZVrBY6M.jpg"
  },
  {
    id: 13,
    title: "Мой сосед Тоторо",
    genre: "Мультфильм",
    genres: ["Мультфильм", "Семейный", "Фэнтези"],
    year: 1988, country: "Япония",
    duration: "1 ч 26 мин", age: "6+",
    rating: 8.2, minPrice: 1500,
    description: "Классический шедевр студии Ghibli. Две сестры переезжают в деревенский дом и встречают загадочных лесных духов. Добрый и волшебный фильм для всей семьи.",
    poster: "https://media.themoviedb.org/t/p/w780/rtGDOeG9LzoerkDGZF9dnVeLppL.jpg"
  },
  {
    id: 14,
    title: "Интерстеллар",
    genre: "Фантастика",
    genres: ["Фантастика", "Драма", "Приключения"],
    year: 2014, country: "США",
    duration: "2 ч 49 мин", age: "12+",
    rating: 8.7, minPrice: 2200,
    description: "Группа исследователей проходит через червоточину в космосе, чтобы обеспечить выживание человечества. Эпическое путешествие через пространство и время.",
    poster: "https://media.themoviedb.org/t/p/w780/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
  },
  {
    id: 15,
    title: "Бэтмен",
    genre: "Боевик",
    genres: ["Боевик", "Фантастика", "Триллер"],
    year: 2022, country: "США",
    duration: "2 ч 56 мин", age: "16+",
    rating: 7.9, minPrice: 2200,
    description: "Молодой Брюс Уэйн ещё только второй год носит маску Бэтмена. Когда серийный убийца приступает к охоте на коррумпированных чиновников Готэма, Тёмный Рыцарь расследует улики.",
    poster: "https://media.themoviedb.org/t/p/w780/b0PlSFdDwbyK0cf5RxwDpaOJQvQ.jpg"
  },
  {
    id: 16,
    title: "Мстители: Финал",
    genre: "Боевик",
    genres: ["Боевик", "Фантастика", "Приключения"],
    year: 2019, country: "США",
    duration: "3 ч 1 мин", age: "12+",
    rating: 8.4, minPrice: 2500,
    description: "После катастрофических событий оставшиеся Мстители собираются ещё раз, чтобы изменить ход истории и восстановить разрушенную вселенную.",
    poster: "https://media.themoviedb.org/t/p/w780/or06FN3Dka5tukK1e9sl16pB3iy.jpg"
  },
];

// Coming soon movies
const COMING_SOON = [
  {
    id: 101,
    title: "Капитан Америка: Новый мир",
    genre: "Боевик",
    year: 2025, age: "12+",
    releaseDate: "Май 2025",
    poster: "https://media.themoviedb.org/t/p/w780/pzIddUEMWhWzfvLI3TwxUG2wGoi.jpg"
  },
  {
    id: 102,
    title: "Minecraft: Фильм",
    genre: "Приключения",
    year: 2025, age: "6+",
    releaseDate: "Апрель 2025",
    poster: "https://media.themoviedb.org/t/p/w780/lWKGjEYKQs3dO97L4qOJmXTMSBY.jpg"
  },
  {
    id: 103,
    title: "Thunderbolts",
    genre: "Боевик",
    year: 2025, age: "16+",
    releaseDate: "Май 2025",
    poster: "https://media.themoviedb.org/t/p/w780/m9EtP01PEFkCfQtM70yCEQZVFbp.jpg"
  },
  {
    id: 104,
    title: "Mission: Impossible — Dead Reckoning",
    genre: "Боевик",
    year: 2025, age: "16+",
    releaseDate: "Июнь 2025",
    poster: "https://media.themoviedb.org/t/p/w780/NNxYkU70HPurnNCSiCjYAmacwm.jpg"
  },
];

// Sessions per hall
const SESSIONS = [
  { time: "10:00", hall: "Зал 1", type: "Стандарт", price: 1800 },
  { time: "12:30", hall: "Зал 2 • IMAX", type: "IMAX", price: 3200 },
  { time: "15:00", hall: "Зал 1", type: "Стандарт", price: 2200 },
  { time: "17:30", hall: "Зал 3 • VIP", type: "VIP", price: 4500 },
  { time: "20:00", hall: "Зал 2 • IMAX", type: "IMAX", price: 3500 },
  { time: "22:30", hall: "Зал 1", type: "Стандарт", price: 2800 },
];

// Theme helpers
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('cinema-theme', theme);
  const btn = document.getElementById('theme-toggle');
  if (btn) btn.textContent = theme === 'dark' ? '🌙' : '☀️';
}

function initTheme() {
  const saved = localStorage.getItem('cinema-theme') || 'dark';
  applyTheme(saved);
  const btn = document.getElementById('theme-toggle');
  if (btn) {
    btn.addEventListener('click', () => {
      const cur = document.documentElement.getAttribute('data-theme');
      applyTheme(cur === 'dark' ? 'light' : 'dark');
    });
  }
}

// Cart count badge
function updateCartBadge() {
  const seats = JSON.parse(localStorage.getItem('cartSeats')) || [];
  const el = document.getElementById('cart-count');
  if (!el) return;
  if (seats.length > 0) {
    el.textContent = seats.length;
    el.style.display = 'inline-flex';
  } else {
    el.style.display = 'none';
  }
}

// Toast notification
function showToast(title, msg, type = 'success') {
  let toast = document.getElementById('global-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'global-toast';
    toast.className = 'toast ' + type;
    toast.innerHTML = `<div class="toast-icon">${type === 'success' ? '✅' : '❌'}</div><div class="toast-text"><strong></strong><span></span></div>`;
    document.body.appendChild(toast);
  }
  toast.querySelector('strong').textContent = title;
  toast.querySelector('span').textContent = msg;
  toast.className = 'toast ' + type;
  toast.classList.add('show');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove('show'), 3500);
}

function getAgeClass(age) {
  if (age === '18+') return 'age-18';
  if (age === '16+') return 'age-16';
  return 'age-6';
}
