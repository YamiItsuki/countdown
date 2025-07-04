const countdown = () => {
    const christmas = new Date('December 25, 2025 00:00:00').getTime();
    const now = new Date().getTime();
    const diff = christmas - now;

    if (diff <= 0) {
        document.getElementById("countdown").innerHTML = "🎅 Chúc Mừng Giáng Sinh 2025!";
        document.getElementById("bellSound").play();
        clearInterval(interval);
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
};

const interval = setInterval(countdown, 1000);
countdown(); // chạy lần đầu

// ❄️ Tạo tuyết
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');

    const size = Math.random() * 8 + 4;
    const startX = Math.random() * window.innerWidth;
    const duration = Math.random() * 3 + 2;

    snowflake.style.width = `${size}px`;
    snowflake.style.height = `${size}px`;
    snowflake.style.left = `${startX}px`;
    snowflake.style.animationDuration = `${duration}s`;
    snowflake.style.opacity = Math.random();

    document.body.appendChild(snowflake);

    setTimeout(() => {
        snowflake.remove();
    }, duration * 1000);
}

setInterval(createSnowflake, 200);
