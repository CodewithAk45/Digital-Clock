function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    document.querySelector('.hour').textContent = hours;
    document.querySelector('.min').textContent = minutes;
    document.querySelector('.sec').textContent = seconds;

    // Update the active day of the week
    const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const dayIndex = now.getDay();
    const weekDivs = document.querySelectorAll('.week div');

    weekDivs.forEach((div, index) => {
        div.classList.remove('active');
        if (index === dayIndex) {
            div.classList.add('active');
        }
    });
}

// Update the clock every second
setInterval(updateClock, 1000);
updateClock(); // Initial call to display the clock immediately