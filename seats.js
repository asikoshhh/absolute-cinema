// ============================================================
//  Seats Page Script
// ============================================================

initTheme();

const urlParams = new URLSearchParams(window.location.search);
const PRICE     = parseInt(urlParams.get('price')) || 2500;
const HALL      = urlParams.get('hall') || 'Зал 1';
const TIME      = urlParams.get('time') || '';
const MOVIE     = localStorage.getItem('session-movie') || '';
const MOVIE_ID  = localStorage.getItem('session-movie-id') || '1';

const ROWS = 8;
const COLS = 10;

// Seat key includes hall+time so bookings are per-session
const storageKey = `bookedSeats_${HALL}_${TIME}`;
let bookedSeats  = JSON.parse(localStorage.getItem(storageKey)) || generateRandomBooked();
let selectedSeats = [];

// Pre-populate some random booked seats for realism
function generateRandomBooked() {
  const taken = [];
  const count = Math.floor(Math.random() * 18) + 5; // 5-22 taken
  while (taken.length < count) {
    const r = Math.ceil(Math.random() * ROWS);
    const c = Math.ceil(Math.random() * COLS);
    const id = `${r}-${c}`;
    if (!taken.includes(id)) taken.push(id);
  }
  localStorage.setItem(storageKey, JSON.stringify(taken));
  return taken;
}

// Session info bar
document.getElementById('session-info-bar').innerHTML = `
  <div class="session-info-item">🎬 <strong>${MOVIE || 'Фильм'}</strong></div>
  <div class="session-info-item">🏛️ <span>${HALL}</span></div>
  ${TIME ? `<div class="session-info-item">⏰ <span>${TIME}</span></div>` : ''}
  <div class="session-info-item">💳 <span>от <strong>${PRICE.toLocaleString()} ₸</strong> / место</span></div>
`;

// Render hall
function renderHall() {
  const hall = document.getElementById('hall');
  hall.innerHTML = '';

  for (let row = 1; row <= ROWS; row++) {
    const rowDiv = document.createElement('div');
    rowDiv.className = 'row';
    rowDiv.innerHTML = `<div class="row-label">Ряд ${row}</div>`;

    for (let col = 1; col <= COLS; col++) {
      const seatId = `${row}-${col}`;
      const seat = document.createElement('div');
      seat.className = 'seat';
      seat.textContent = col;

      if (bookedSeats.includes(seatId)) {
        seat.classList.add('booked');
        seat.title = 'Место занято';
      } else if (selectedSeats.includes(seatId)) {
        seat.classList.add('selected');
        seat.title = `Ряд ${row}, место ${col} — выбрано`;
      } else {
        seat.classList.add('free');
        seat.title = `Ряд ${row}, место ${col}`;
        seat.addEventListener('click', () => toggleSeat(row, col));
      }

      rowDiv.appendChild(seat);
    }

    hall.appendChild(rowDiv);
  }

  updatePanel();
}

function toggleSeat(row, col) {
  const id = `${row}-${col}`;
  if (selectedSeats.includes(id)) {
    selectedSeats = selectedSeats.filter(s => s !== id);
  } else {
    selectedSeats.push(id);
  }
  renderHall();
}

function updatePanel() {
  document.getElementById('selected-count').textContent = selectedSeats.length;
  document.getElementById('total-price').textContent =
    (selectedSeats.length * PRICE).toLocaleString() + ' ₸';
}

document.getElementById('continue-btn').addEventListener('click', () => {
  if (selectedSeats.length === 0) {
    showToast('Ни одного места', 'Выберите хотя бы одно место', 'error');
    return;
  }
  localStorage.setItem('cartSeats', JSON.stringify(selectedSeats));
  localStorage.setItem('cartPrice', PRICE);
  localStorage.setItem('cartHall', HALL);
  localStorage.setItem('cartTime', TIME);
  localStorage.setItem('cartMovie', MOVIE);
  localStorage.setItem('cartMovieId', MOVIE_ID);
  window.location.href = 'cart.html';
});

renderHall();
