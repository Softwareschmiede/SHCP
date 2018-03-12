import { LOAD_FLOORS, CREATE_FLOOR } from '../actions/floors.action';

export default function (state = [], action) {
    switch (action.type) {
        case LOAD_FLOORS:
            return action.payload;
        case CREATE_FLOOR:
            return state.concat(action.payload);
        default:
            return state;
    }
}
