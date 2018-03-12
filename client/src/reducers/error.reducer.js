import { ERROR, CLEAR } from '../actions/error.action';

export default function (state = null, action) {
    switch (action.type) {
        case ERROR:
            return action.payload;
        case CLEAR:
            return null;
        default:
            return state;
    }
}
