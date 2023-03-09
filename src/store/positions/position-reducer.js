import {ADD__POSITIONS} from './position-actions';

export const positionReducer = (state = [], action) => {
    switch (action.type) {
        case ADD__POSITIONS: {
            return action.position;
        }
        default: {
            return state;
        }
    }
}