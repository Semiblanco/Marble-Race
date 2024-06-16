document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("race-canvas");
    const ctx = canvas.getContext("2d");
    const startButton = document.getElementById("start-race");

    const width = canvas.width = canvas.clientWidth;
    const height = canvas.height = canvas.clientHeight;

    let marbles = [
        {x: 50, y: 50, color: "red", vy: 0},
        {x: 50, y: 100, color: "blue", vy: 0},
        {x: 50, y: 150, color: "green", vy: 0},
    ];

    const gravity = 0.1;
    const friction = 0.99;

    function drawMarble(marble) {
        ctx.beginPath();
        ctx.arc(marble.x, marble.y, 10, 0, Math.PI * 2);
        ctx.fillStyle = marble.color;
        ctx.fill();
        ctx.closePath();
    }

    function updateMarbles() {
        ctx.clearRect(0, 0, width, height);
        marbles.forEach(marble => {
            marble.vy += gravity;
            marble.vy *= friction;
            marble.y += marble.vy;

            if (marble.y + 10 > height) {
                marble.y = height - 10;
                marble.vy *= -1;
            }

            drawMarble(marble);
        });
    }

    function startRace() {
        marbles.forEach(marble => {
            marble.vy = Math.random() * 2 + 2;
        });

        function raceLoop() {
            updateMarbles();
            requestAnimationFrame(raceLoop);
        }

        raceLoop();
    }

    startButton.addEventListener("click", startRace);
});
