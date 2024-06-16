document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("race-canvas");
    const ctx = canvas.getContext("2d");

    const trackY = 300; // Y-Position der Bahn

    let marbles = [
        { x: 50, y: 50, color: "red", vy: 0 },
        { x: 50, y: 100, color: "blue", vy: 0 },
        { x: 50, y: 150, color: "green", vy: 0 },
    ];

    // Funktion zum Zeichnen der Bahn
    function drawTrack() {
        ctx.beginPath();
        ctx.moveTo(100, trackY); // Startpunkt der Bahn
        ctx.lineTo(700, trackY); // Endpunkt der Bahn
        ctx.lineWidth = 10;
        ctx.strokeStyle = 'black';
        ctx.stroke();
        ctx.closePath();
    }

    // Funktion zum Zeichnen einer Murmel
    function drawMarble(marble) {
        ctx.beginPath();
        ctx.arc(marble.x, marble.y, 10, 0, Math.PI * 2);
        ctx.fillStyle = marble.color;
        ctx.fill();
        ctx.closePath();
    }

    // Funktion zum Aktualisieren der Murmeln
    function updateMarbles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Zeichnen der Bahn
        drawTrack();

        // Aktualisieren und Zeichnen der Murmeln
        marbles.forEach(marble => {
            marble.y += marble.vy;

            // Beispiel: Kollisionserkennung mit der Bahn
            if (marble.y + 10 > trackY) {
                marble.y = trackY - 10;
                marble.vy *= -0.5; // Beispiel: Abprall von der Bahn
            }

            drawMarble(marble);
        });
    }

    // Startfunktion für das Rennen
    function startRace() {
        // Logik zum Starten des Rennens hier einfügen
        console.log("Rennen gestartet"); // Zum Testen

        // Beispiel: Setzen der Anfangsgeschwindigkeit der Murmeln
        marbles.forEach(marble => {
            marble.vy = Math.random() * 3 + 1; // Beispiel: Zufällige Geschwindigkeit
        });

        function raceLoop() {
            updateMarbles();
            requestAnimationFrame(raceLoop);
        }

        raceLoop();
    }

    // Event Listener für den Start-Button
    const startButton = document.getElementById("start-race");
    startButton.addEventListener("click", startRace);
});


