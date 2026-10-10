export function getDifficultySettings(game) {
    const settings = {
        EASY: {
            orbitMin: 0.45,
            orbitMax: 0.80,
            directionChangeMin: 3.0,
            directionChangeMax: 5.0,
            minPunchSpeed: 0.85,
            perfectSpeed: 1.50
        },
        NORMAL: {
            orbitMin: 0.90,
            orbitMax: 1.50,
            directionChangeMin: 1.5,
            directionChangeMax: 3.0,
            minPunchSpeed: 1.20,
            perfectSpeed: 2.00
        },
        HARD: {
            orbitMin: 1.70,
            orbitMax: 2.40,
            directionChangeMin: 0.7,
            directionChangeMax: 1.4,
            minPunchSpeed: 1.60,
            perfectSpeed: 2.50
        }
    };

    return settings[game.difficulty] ?? settings.NORMAL;
}

export function moveTarget(delta, game) {
    // TODO (versi siswa): gerakkan target mengelilingi pemain dengan delta time.
    // Petunjuk: ubah sudut berdasarkan speed dan arah; gunakan sin/cos untuk X/Z.
}

function damp(current, target, smoothing, delta) {
    return target + (current - target) * Math.exp(-smoothing * delta);
}

function randomBetween(min, max) {
    return min + Math.random() * (max - min);
}
