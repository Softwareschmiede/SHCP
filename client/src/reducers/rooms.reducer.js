import { LOAD_ROOMS, CREATE_ROOM } from '../actions/rooms.action';

export default function (state = [], action) {
    switch (action.type) {
        case LOAD_ROOMS:
            return action.payload;
        case CREATE_ROOM:
            return state.concat(action.payload);
        default:
            return state;
    }
}
