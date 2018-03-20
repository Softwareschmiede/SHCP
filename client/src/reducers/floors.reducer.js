import update from 'react-addons-update';
import { LOAD_FLOORS, CREATE_FLOOR, UPDATE_FLOOR } from '../actions/floors.action';

export default function (state = [], action) {
    switch (action.type) {
        case LOAD_FLOORS:
            return action.payload;
        case CREATE_FLOOR:
            return state.concat(action.payload);
        case UPDATE_FLOOR:
            return update(state, {
                [state.findIndex(element => element._id === action.payload._id)]: { $set: action.payload },
            });
        default:
            return state;
    }
}
