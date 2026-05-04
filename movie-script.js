// ============================================================
//  Movie Page Script
// ============================================================

initTheme();
updateCartBadge();

const params  = new URLSearchParams(window.location.search);
const movieId = parseInt(params.get('id'));
const movie   = MOVIES.find(m => m.id === movieId);

if (!movie) {
  document.getElementById('movie-title').textContent = 'Фильм не найден';
} else {
  document.title = `Absolute Cinema — ${movie.title}`;

  // Poster
  const placeholder = document.getElementById('poster-placeholder');
  placeholder.innerHTML = `
    <img src="${movie.poster}" alt="${movie.title}"
         style="width:100%;height:100%;object-fit:cover;border-radius:var(--radius-md);display:block;"
         onerror="this.parentElement.innerHTML='🎬'">`;
  placeholder.style.background = 'transparent';
  placeholder.style.fontSize = 'unset';

  // Genres
  document.getElementById('genres-row').innerHTML =
    movie.genres.map(g => `<span class="genre-tag">${g}</span>`).join('');

  // Title
  document.getElementById('movie-title').textContent = movie.title;

  // Stats
  document.getElementById('movie-stats').innerHTML = `
    <div class="stat-item stat-rating">⭐ ${movie.rating}</div>
    <div class="stat-item"><span class="icon">📅</span>${movie.year}</div>
    <div class="stat-item"><span class="icon">🌍</span>${movie.country}</div>
    <div class="stat-item"><span class="icon">⏱️</span>${movie.duration}</div>
    <div class="stat-item">
      <span style="background:var(--accent-soft);color:var(--accent);padding:4px 12px;border-radius:20px;border:1px solid var(--border-hot);font-weight:700;">${movie.age}</span>
    </div>
  `;

  // Description
  document.getElementById('movie-desc').textContent = movie.description;
}

// ── Date Tabs ─────────────────────────────────────────────────
const dates = [];
for (let i = 0; i < 7; i++) {
  const d = new Date();
  d.setDate(d.getDate() + i);
  const label = i === 0 ? 'Сегодня' : i === 1 ? 'Завтра' :
    d.toLocaleDateString('ru-RU', { weekday: 'short', day: 'numeric', month: 'short' });
  dates.push({ label, date: d.toDateString() });
}

let activeDate = 0;
const tabsEl = document.getElementById('date-tabs');
tabsEl.innerHTML = dates.map((d, i) =>
  `<button class="session-tab ${i === 0 ? 'active' : ''}" data-i="${i}">${d.label}</button>`
).join('');

tabsEl.querySelectorAll('.session-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    tabsEl.querySelectorAll('.session-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    activeDate = +tab.dataset.i;
    renderSessions();
  });
});

// ── Sessions Grid ─────────────────────────────────────────────
function renderSessions() {
  const grid = document.getElementById('sessions-grid');

  const hallTypes = {
    'Стандарт': { icon: '🎞️', color: 'var(--text-muted)' },
    'IMAX':     { icon: '🔷', color: '#3b82f6' },
    'VIP':      { icon: '👑', color: 'var(--gold)' },
  };

  // Simulate some sold-out sessions based on date
  const soldOutIdx = activeDate === 0 ? [1] : [];

  grid.innerHTML = SESSIONS.map((s, i) => {
    const isSoldOut = soldOutIdx.includes(i);
    const ht = hallTypes[s.type] || hallTypes['Стандарт'];
    return `
      <div class="session-card" ${isSoldOut ? 'style="opacity:0.5;pointer-events:none;"' : ''}>
        <div class="session-time">${s.time}</div>
        <div class="session-meta">
          ${ht.icon} <span style="color:${ht.color};font-weight:600;">${s.hall}</span>
        </div>
        <div class="session-price-row">
          <div>
            <div class="session-price">${s.price.toLocaleString()} ₸</div>
            <div style="font-size:0.75rem;color:var(--text-dim);margin-top:2px;">за место</div>
          </div>
          ${isSoldOut
            ? `<button class="book-btn" disabled style="background:var(--bg3);color:var(--text-muted);cursor:not-allowed;">Мест нет</button>`
            : `<button class="book-btn" onclick="selectSession(${s.price}, '${s.hall}', '${s.time}')">Выбрать →</button>`
          }
        </div>
      </div>
    `;
  }).join('');
}

function selectSession(price, hall, time) {
  localStorage.setItem('session-price', price);
  localStorage.setItem('session-hall', hall);
  localStorage.setItem('session-time', time);
  localStorage.setItem('session-movie', movie ? movie.title : '');
  localStorage.setItem('session-movie-id', movieId);
  window.location.href = `seats.html?price=${price}&hall=${encodeURIComponent(hall)}&time=${encodeURIComponent(time)}`;
}

renderSessions();
