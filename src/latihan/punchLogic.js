import * as THREE from 'three';
import { getDifficultySettings } from './targetLogic.js';

const SPEED_WINDOW = 0.12;
const HAND_IGNORE_SPEED = 0.55;
const PUNCH_COOLDOWN = 0.20;
const SCORE_INTERVAL_MS = 200;
const HIT_RADIUS = 0.50 * 0.48 + 0.12;

export function detectPunch(controller, hand, delta, game) {
    // TODO (versi siswa): deteksi pukulan dari kecepatan tangan controller.
    // Petunjuk: bandingkan posisi saat ini dengan sampel sebelumnya, lalu panggil checkHit.
}


export function checkHit(controller, game, motion = game.latestMotion, speed = game.latestPunchSpeed, hand = game.latestPunchHand) {
    // TODO (versi siswa): bandingkan lintasan controller dengan target/hitbox.
    // Petunjuk: ukur jarak titik ke segmen, lalu perbarui hit/miss, score, combo, dan audio.
}

function sampleHandMotion(controller, previousPosition, samples, delta) {
    // TODO (versi siswa): simpan posisi controller dan hitung kecepatan.
    // Petunjuk: jarak dibagi delta menghasilkan kecepatan; jendela waktu mengurangi noise.
}

function isTargetedSwing(motion, game) {
    const swingDirection = motion.to.clone().sub(motion.from).normalize();
    const targetDirection = game.target.position.clone().sub(motion.from).normalize();

    return swingDirection.dot(targetDirection) > 0;
}

function distancePointToSegment(point, start, end) {
    const segment = end.clone().sub(start);
    const segmentLengthSquared = segment.lengthSq();

    if (segmentLengthSquared === 0) return point.distanceTo(start);

    const projection = point.clone().sub(start).dot(segment) / segmentLengthSquared;
    const boundedProjection = Math.max(0, Math.min(1, projection));
    const closestPoint = start.clone().addScaledVector(segment, boundedProjection);

    return point.distanceTo(closestPoint);
}

