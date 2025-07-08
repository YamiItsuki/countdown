let timer;
let targetTime;

function startCountdown() {
  const input = document.getElementById("datetime").value;
  if (!input) return alert("Hãy chọn thời gian!");

  targetTime = new Date(input).getTime();
  document.getElementById("input-state").classList.add("hidden");
  document.getElementById("countdown-state").classList.remove("hidden");

  timer = setInterval(updateCountdown, 1000);
  updateCountdown();
}

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetTime - now;

  if (distance <= 0) {
    clearInterval(timer);
    triggerEnergyBurst();
    showDoneState();
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
}

function showDoneState() {
  document.getElementById("countdown-state").classList.add("hidden");
  document.getElementById("done-state").classList.remove("hidden");
  document.getElementById("done-time").innerText = new Date().toLocaleString();
}

function triggerEnergyBurst() {
  const burst = document.createElement("div");
  burst.classList.add("energy-burst");
  document.body.appendChild(burst);

  const sound = document.getElementById("burst-sound");
  if (sound) sound.play();

  setTimeout(() => burst.remove(), 1000);
}

// Tạo particles liên tục
function createParticle() {
  const particle = document.createElement("div");
  particle.classList.add("particle");

  const size = Math.random() * 6 + 4;
  const startX = Math.random() * window.innerWidth;
  const duration = Math.random() * 3 + 2;

  const colors = ["#ff4d4d", "#00ccff", "#ffff66", "#66ff66", "#ff99ff"];
  particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;
  particle.style.left = `${startX}px`;
  particle.style.animationDuration = `${duration}s`;
  particle.style.opacity = Math.random() * 0.6 + 0.3;

  document.body.appendChild(particle);
  setTimeout(() => particle.remove(), duration * 1000);
}

setInterval(createParticle, 200);

    }, duration * 1000);
}

setInterval(createSnowflake, 200);
