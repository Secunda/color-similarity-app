import _ from 'lodash';
import {
    START_GAME,
    GENERATE_GAME,
    GENERATED_GAME,
    GAME_STEP,
    GAME_SCORE,
} from '../actions/game/types';

const inititalState = {
    started: false,
    generated: false,
    gameSettings: {},
    matrix: [],
    score: 0,
    affectedCells: 0,
    currentColor: null,
};

export default function reducer(state = inititalState, action) {
    switch (action.type) {
        case START_GAME: {
            const newState = _.cloneDeep(inititalState);
            newState.started = true;
            return newState;
        }
        case GENERATE_GAME: {
            const newState = _.cloneDeep(state);
            newState.gameSettings = action.settings;
            return newState;
        }
        case GENERATED_GAME: {
            const newState = _.cloneDeep(state);
            newState.matrix = action.matrix;
            newState.generated = true;
            newState.currentColor = action.matrix[0][0];
            return newState;
        }
        case GAME_STEP: {
            const newState = _.cloneDeep(state);
            newState.matrix = action.matrix;
            newState.currentColor = action.matrix[0][0];
            return newState;
        }
        case GAME_SCORE: {
            const newState = _.cloneDeep(state);
            newState.score = action.score;
            newState.affectedCells = action.affectedCells;
            return newState;
        }
        default:
            return state;
    }
}
