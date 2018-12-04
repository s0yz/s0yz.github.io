// Game's dimensions (snake and froot )
const GAME_W = 32;
const GAME_H = 32;

// Defines the canvas dimensions.
// If the scale is 1, the dimensions of the canvas
// will be identical to those of the game.
const SCALE = 20;

const FRAMERATE = 15;

const IS_WEBGL = false;

let SCORE_FONT = 'Roboto';
const SCORE_SIZE = 32;

const SCORE_X = (IS_WEBGL) ? 30 : 30 - GAME_W * 0.5;
const SCORE_Y = (IS_WEBGL) ? 56 : 56 - GAME_H * 0.5;

const X_START = (IS_WEBGL) ? 0 : GAME_W * 0.5;
const Y_START = (IS_WEBGL) ? GAME_H * 0.5 - 1 : GAME_H - 1;

const CAN_W = GAME_W * SCALE;
const CAN_H = GAME_H * SCALE;

const X_MIN = (IS_WEBGL) ? GAME_W * -0.5 : 0;
const X_MAX = (IS_WEBGL) ? GAME_W * 0.5 : GAME_W;
const Y_MIN = (IS_WEBGL) ? GAME_H * -0.5 : 0;
const Y_MAX = (IS_WEBGL) ? GAME_H * 0.5 : GAME_H;

const LEFT = 37;
const UP = 38;
const RIGHT = 39;
const DOWN = 40;

const VECTOR00 = new p5.Vector(0, 0);