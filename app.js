// Contador regresivo
function updateCountdown() {
    const eventDate = new Date('2025-10-15T08:30:00').getTime();
    const now = new Date().getTime();
    const timeLeft = eventDate - now;

    if (timeLeft > 0) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = String(days).padStart(2, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    } else {
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
    }
}

// Inicializar
updateCountdown();
setInterval(updateCountdown, 1000);

// Loader de telón
window.addEventListener('load', () => {
    const loader = document.getElementById('theaterLoader');

    setTimeout(() => {
        loader.classList.add('opening');

        setTimeout(() => {
            loader.classList.add('hidden');

            setTimeout(() => {
                loader.style.display = 'none';
            }, 2000);
        }, 2000);
    }, 1000);

});
