document.getElementById("celebrateButton").addEventListener("click", startCelebration);

// Confetti generation and animation
function startCelebration() {
    const canvas = document.getElementById("confettiCanvas");
    const context = canvas.getContext("2d");
    const confettiElements = [];
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Confetti element properties
    const colors = ["#FF5733", "#FFC300", "#DAF7A6", "#FFC0CB", "#D2691E"];
    for (let i = 0; i < 100; i++) {
        confettiElements.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            size: Math.random() * 7 + 3,
            color: colors[Math.floor(Math.random() * colors.length)],
            speed: Math.random() * 3 + 1,
        });
    }

    function animateConfetti() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        confettiElements.forEach(confetti => {
            confetti.y += confetti.speed;
            if (confetti.y > canvas.height) {
                confetti.y = -confetti.size;
            }
            context.beginPath();
            context.arc(confetti.x, confetti.y, confetti.size, 0, 2 * Math.PI);
            context.fillStyle = confetti.color;
            context.fill();
        });
        requestAnimationFrame(animateConfetti);
    }

    animateConfetti();
}
