// ============================================================
//  Cart Page Script
// ============================================================

initTheme();

const selectedSeats = JSON.parse(localStorage.getItem('cartSeats')) || [];
const PRICE   = parseInt(localStorage.getItem('cartPrice'))  || 2500;
const HALL    = localStorage.getItem('cartHall')  || '—';
const TIME    = localStorage.getItem('cartTime')  || '—';
const MOVIE   = localStorage.getItem('cartMovie') || '—';
const MOVIE_ID = localStorage.getItem('cartMovieId') || '1';

const HALL_KEY = `bookedSeats_${HALL}_${TIME}`;

let discount   = 0;
const PROMOS   = { 'CINEMA30': 30, 'FILM10': 10, 'АБСОЛЮТ': 15 };

// Populate summary info
document.getElementById('sum-movie').textContent = MOVIE;
document.getElementById('sum-hall').textContent  = HALL;
document.getElementById('sum-time').textContent  = TIME || '—';
document.getElementById('sum-seats').textContent = selectedSeats.length;
document.getElementById('sum-price-each').textContent = PRICE.toLocaleString() + ' ₸';

function calcTotal() {
  const sub = selectedSeats.length * PRICE;
  return Math.round(sub * (1 - discount / 100));
}

function updateTotal() {
  document.getElementById('sum-total').textContent = calcTotal().toLocaleString() + ' ₸';
}

// Render items
function renderItems() {
  const list = document.getElementById('cart-items-list');

  if (selectedSeats.length === 0) {
    list.innerHTML = `
      <div class="cart-empty">
        <div class="empty-icon">🎟️</div>
        <h3>Корзина пуста</h3>
        <p style="margin-bottom:20px;">Выберите фильм и места для бронирования</p>
        <a href="index.html" class="btn-primary" style="display:inline-flex;">🎬 К афише</a>
      </div>`;
    return;
  }

  list.innerHTML = selectedSeats.map(seat => {
    const [row, col] = seat.split('-');
    return `
      <div class="cart-item">
        <div class="cart-item-left">
          <div class="cart-seat-icon">🪑</div>
          <div class="cart-seat-info">
            <strong>Ряд ${row}, Место ${col}</strong>
            <span>${MOVIE} · ${TIME}</span>
          </div>
        </div>
        <div class="cart-item-price">${PRICE.toLocaleString()} ₸</div>
      </div>`;
  }).join('');
}

// Promo
window.applyPromo = function() {
  const code = document.getElementById('promo-input').value.trim().toUpperCase();
  const msgEl = document.getElementById('promo-msg');

  if (PROMOS[code]) {
    discount = PROMOS[code];
    msgEl.style.color = 'var(--green)';
    msgEl.textContent = `✅ Скидка ${discount}% применена!`;
    updateTotal();
  } else {
    discount = 0;
    msgEl.style.color = 'var(--accent)';
    msgEl.textContent = '❌ Промокод не найден. Попробуйте: CINEMA30';
    updateTotal();
  }
};

// Payment method selection
window.selectPay = function(el) {
  document.querySelectorAll('.pay-method').forEach(m => m.classList.remove('active'));
  el.classList.add('active');
};

// Confirm booking
document.getElementById('confirm-btn').addEventListener('click', () => {
  if (selectedSeats.length === 0) {
    showToast('Корзина пуста', 'Добавьте места для бронирования', 'error');
    return;
  }

  // Save booked seats per session
  const existing = JSON.parse(localStorage.getItem(HALL_KEY)) || [];
  const merged   = [...new Set([...existing, ...selectedSeats])];
  localStorage.setItem(HALL_KEY, JSON.stringify(merged));

  // Clear cart
  localStorage.removeItem('cartSeats');
  localStorage.removeItem('cartPrice');

  // Show success
  document.getElementById('cart-content').style.display = 'none';
  const successEl = document.getElementById('success-screen');
  successEl.classList.add('show');

  // Fill ticket card
  const bookingId = 'AC-' + Math.random().toString(36).slice(2,8).toUpperCase();
  const seatsText = selectedSeats.map(s => {
    const [r, c] = s.split('-');
    return `Р${r}М${c}`;
  }).join(', ');

  document.getElementById('ticket-card').innerHTML = `
    <h3>🎟️ Ваш билет</h3>
    <div class="ticket-row"><span>Фильм</span><span>${MOVIE}</span></div>
    <div class="ticket-row"><span>Зал</span><span>${HALL}</span></div>
    <div class="ticket-row"><span>Время</span><span>${TIME}</span></div>
    <div class="ticket-row"><span>Места</span><span>${seatsText}</span></div>
    <hr class="ticket-divider">
    <div class="ticket-row"><span>Итого</span><span style="color:var(--accent);font-size:1.1rem;">${calcTotal().toLocaleString()} ₸</span></div>
    <div class="ticket-row"><span>Номер заказа</span><span style="color:var(--gold);">${bookingId}</span></div>
    <div style="text-align:center;margin-top:20px;font-size:2.5rem;">QR: 🔳</div>
    <div style="text-align:center;font-size:0.75rem;color:var(--text-dim);margin-top:6px;">${bookingId}</div>
  `;

  showToast('Бронирование подтверждено!', `Заказ ${bookingId}. Спасибо!`, 'success');
});

renderItems();
updateTotal();
