// ============================================================
//  Index Page Script
// ============================================================

initTheme();
updateCartBadge();

// ── Hero Slider ──────────────────────────────────────────────
const featuredMovies = MOVIES.filter(m => m.featured);
let heroIndex = 0;
let heroTimer;

function buildHero() {
  const slidesEl = document.getElementById('hero-slides');
  const dotsEl   = document.getElementById('hero-dots');
  if (!slidesEl) return;

  slidesEl.innerHTML = featuredMovies.map((m, i) => `
    <div class="hero-slide ${i === 0 ? 'active' : ''}" data-i="${i}">
      <img class="hero-bg" src="${m.poster}" alt="${m.title}"
           onerror="this.style.display='none'">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <div class="hero-badge">🎬 Сейчас в кино</div>
        <h1 class="hero-title">${m.title}</h1>
        <div class="hero-meta">
          <span class="hero-rating">⭐ ${m.rating}</span>
          <span>${m.year}</span>
          <span>${m.duration}</span>
          <span>${m.genres.slice(0,2).join(' • ')}</span>
          <span style="background:var(--accent-soft);color:var(--accent);padding:2px 10px;border-radius:20px;border:1px solid var(--border-hot);">${m.age}</span>
        </div>
        <p class="hero-desc">${m.description}</p>
        <div class="hero-actions">
          <a href="movie.html?id=${m.id}" class="btn-primary">🎟️ Купить билет</a>
          <a href="movie.html?id=${m.id}" class="btn-outline">ℹ️ О фильме</a>
        </div>
      </div>
    </div>
  `).join('');

  dotsEl.innerHTML = featuredMovies.map((_, i) =>
    `<button class="hero-dot ${i === 0 ? 'active' : ''}" data-i="${i}"></button>`
  ).join('');

  dotsEl.querySelectorAll('.hero-dot').forEach(dot => {
    dot.addEventListener('click', () => goToSlide(+dot.dataset.i));
  });

  startHeroAuto();
}

function goToSlide(idx) {
  const slides = document.querySelectorAll('.hero-slide');
  const dots   = document.querySelectorAll('.hero-dot');
  slides.forEach(s => s.classList.remove('active'));
  dots.forEach(d => d.classList.remove('active'));
  heroIndex = (idx + featuredMovies.length) % featuredMovies.length;
  slides[heroIndex]?.classList.add('active');
  dots[heroIndex]?.classList.add('active');
}

function startHeroAuto() {
  clearInterval(heroTimer);
  heroTimer = setInterval(() => goToSlide(heroIndex + 1), 5000);
}

buildHero();

// ── Movie Grid ───────────────────────────────────────────────
let activeGenre = 'all';
let searchQuery = '';
let sortMode    = 'default';

function getAgeClass(age) {
  if (age === '18+') return 'age-18';
  if (age === '16+') return 'age-16';
  return 'age-6';
}

function renderMovies() {
  const grid = document.getElementById('movies-grid');
  if (!grid) return;

  let list = [...MOVIES];

  // Filter by genre / country
  if (activeGenre !== 'all') {
    if (activeGenre === 'Казахстан') {
      list = list.filter(m => m.country === 'Казахстан' || m.country_tag === 'Казахстан');
    } else {
      list = list.filter(m => m.genres.includes(activeGenre) || m.genre === activeGenre);
    }
  }

  // Search
  if (searchQuery.trim()) {
    const q = searchQuery.toLowerCase();
    list = list.filter(m =>
      m.title.toLowerCase().includes(q) ||
      m.genre.toLowerCase().includes(q) ||
      (m.genres || []).some(g => g.toLowerCase().includes(q))
    );
  }

  // Sort
  if (sortMode === 'rating')    list.sort((a, b) => b.rating - a.rating);
  if (sortMode === 'name')      list.sort((a, b) => a.title.localeCompare(b.title, 'ru'));
  if (sortMode === 'year')      list.sort((a, b) => b.year - a.year);
  if (sortMode === 'price-asc') list.sort((a, b) => a.minPrice - b.minPrice);

  document.getElementById('results-count').textContent =
    `Найдено: ${list.length} фильм${list.length === 1 ? '' : list.length < 5 ? 'а' : 'ов'}`;

  if (list.length === 0) {
    grid.innerHTML = `
      <div class="no-results">
        <div class="no-icon">🎬</div>
        <h3>Фильмы не найдены</h3>
        <p>Попробуйте изменить фильтр или поисковый запрос</p>
      </div>`;
    return;
  }

  grid.innerHTML = list.map((m, idx) => `
    <div class="movie-card fade-in" style="animation-delay:${idx * 0.05}s"
         onclick="location.href='movie.html?id=${m.id}'">
      <div class="movie-card-poster">
        <img src="${m.poster}" alt="${m.title}" loading="lazy"
             onerror="this.style.display='none'">
        <span class="rating-badge">⭐ ${m.rating}</span>
        <span class="age-badge ${getAgeClass(m.age)}">${m.age}</span>
        <div class="movie-card-overlay">
          <button class="overlay-btn" onclick="event.stopPropagation();location.href='movie.html?id=${m.id}'">
            🎟️ Купить билет
          </button>
        </div>
      </div>
      <div class="movie-card-info">
        <div class="movie-card-title">${m.title}</div>
        <div class="movie-card-meta">
          <span class="movie-card-genre">${m.genre} • ${m.year}</span>
          <span class="movie-card-price">от ${m.minPrice.toLocaleString()} ₸</span>
        </div>
      </div>
    </div>
  `).join('');
}

// Coming soon
function renderComingSoon() {
  const grid = document.getElementById('coming-grid');
  if (!grid) return;
  grid.innerHTML = COMING_SOON.map((m, idx) => `
    <div class="movie-card fade-in" style="animation-delay:${idx * 0.07}s; cursor:default;">
      <div class="movie-card-poster" style="position:relative;">
        <img src="${m.poster}" alt="${m.title}" loading="lazy"
             onerror="this.style.display='none'">
        <span class="age-badge ${getAgeClass(m.age)}">${m.age}</span>
        <div class="movie-card-overlay">
          <button class="overlay-btn" style="background:var(--bg3);color:var(--text);cursor:default;">
            📅 ${m.releaseDate}
          </button>
        </div>
      </div>
      <div class="movie-card-info">
        <div class="movie-card-title">${m.title}</div>
        <div class="movie-card-meta">
          <span class="movie-card-genre">${m.genre} • ${m.year}</span>
          <span class="movie-card-price" style="color:var(--text-muted);">Скоро</span>
        </div>
      </div>
    </div>
  `).join('');
}

// ── Event Listeners ───────────────────────────────────────────
document.querySelectorAll('.filter-chip').forEach(chip => {
  chip.addEventListener('click', () => {
    document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    activeGenre = chip.dataset.genre;
    renderMovies();
  });
});

const searchInput = document.getElementById('search-input');
if (searchInput) {
  searchInput.addEventListener('input', e => {
    searchQuery = e.target.value;
    renderMovies();
  });
}

const sortSelect = document.getElementById('sort-select');
if (sortSelect) {
  sortSelect.addEventListener('change', e => {
    sortMode = e.target.value;
    renderMovies();
  });
}

renderMovies();
renderComingSoon();
