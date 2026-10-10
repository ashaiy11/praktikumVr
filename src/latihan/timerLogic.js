import { gameOver } from './gameLogic.js';
import { getDifficultySettings } from './targetLogic.js';

export function updateTimer(delta, game) {
    if (game.state !== 'PLAYING') return;

    game.gameElapsed += delta;
    game.timeLeft = Math.max(0, Math.ceil(game.selectedTime - game.gameElapsed));

    if (game.comboTimer > 0) {
        game.comboTimer = Math.max(0, game.comboTimer - delta);
        if (game.comboTimer === 0) game.updateCombo(false);
    }

    if (game.timeLeft === 0) gameOver(game);
}
