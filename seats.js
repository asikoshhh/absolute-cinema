// Размер зала 8 рядов, 10 мест в ряду
const ROWS = 8;
const COLS = 10;

// Получаем цену из URL
const urlParams = new URLSearchParams(window.location.search);
let PRICE = parseInt(urlParams.get('price')) || 2500;

// Загружаем занятые места из localStorage
let bookedSeats = JSON.parse(localStorage.getItem('bookedSeats')) || [];
let selectedSeats = [];

// Функция сохранения занятых мест
function saveBookedSeats() {
    localStorage.setItem('bookedSeats', JSON.stringify(bookedSeats));
}

// Функция отображения зала
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
            
            if (bookedSeats.includes(seatId)) {
                seat.classList.add('booked');
            } else if (selectedSeats.includes(seatId)) {
                seat.classList.add('selected');
            } else {
                seat.classList.add('free');
            }
            
            seat.textContent = col;
            seat.onclick = () => toggleSeat(row, col);
            rowDiv.appendChild(seat);
        }
        
        hall.appendChild(rowDiv);
    }
    
    updateUI();
}

// Переключение выбора места
function toggleSeat(row, col) {
    const seatId = `${row}-${col}`;
    
    if (bookedSeats.includes(seatId)) {
        return;
    }
    
    if (selectedSeats.includes(seatId)) {
        selectedSeats = selectedSeats.filter(s => s !== seatId);
    } else {
        selectedSeats.push(seatId);
    }
    
    renderHall();
}

// Обновление UI (счётчик, сумма)
function updateUI() {
    document.getElementById('selected-count').textContent = selectedSeats.length;
    document.getElementById('total-price').textContent = (selectedSeats.length * PRICE).toLocaleString() + ' ₸';
}

// Подтверждение выбора
document.getElementById('continue-btn').onclick = () => {
    if (selectedSeats.length === 0) {
        alert('Выберите хотя бы одно место');
        return;
    }
    
    // Сохраняем выбранные места и цену в localStorage для корзины
    localStorage.setItem('cartSeats', JSON.stringify(selectedSeats));
    localStorage.setItem('cartPrice', PRICE);
    window.location.href = 'cart.html';
};

// Отображение цены в информации
document.getElementById('total-price').textContent = '0 ₸';

// Инициализация
renderHall();