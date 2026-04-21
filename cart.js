// Загружаем выбранные места и цену
let selectedSeats = JSON.parse(localStorage.getItem('cartSeats')) || [];
let PRICE = parseInt(localStorage.getItem('cartPrice')) || 2500;
let bookedSeats = JSON.parse(localStorage.getItem('bookedSeats')) || [];

// Отображение корзины
function displayCart() {
    const container = document.getElementById('cart-items');
    
    if (selectedSeats.length === 0) {
        container.innerHTML = '<p>Корзина пуста</p>';
        document.getElementById('cart-total').textContent = '0 ₸';
        return;
    }
    
    const itemsHtml = selectedSeats.map(seat => {
        const [row, col] = seat.split('-');
        return `
            <div class="cart-item">
                <span>Ряд ${row}, Место ${col}</span>
                <span>${PRICE.toLocaleString()} ₸</span>
            </div>
        `;
    }).join('');
    
    container.innerHTML = itemsHtml;
    document.getElementById('cart-total').textContent = (selectedSeats.length * PRICE).toLocaleString() + ' ₸';
}

// Подтверждение бронирования
document.getElementById('confirm-btn').onclick = () => {
    if (selectedSeats.length === 0) {
        alert('Корзина пуста');
        return;
    }
    
    // Добавляем выбранные места в занятые
    bookedSeats.push(...selectedSeats);
    localStorage.setItem('bookedSeats', JSON.stringify(bookedSeats));
    
    // Очищаем корзину
    localStorage.removeItem('cartSeats');
    localStorage.removeItem('cartPrice');
    
    alert('Бронирование подтверждено! Спасибо за покупку.');
    window.location.href = 'index.html';
};

displayCart();