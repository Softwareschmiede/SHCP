import { combineReducers } from 'redux';
import error from './error.reducer';
import authentication from './authentication.reducer';
import floors from './floors.reducer';
import rooms from './rooms.reducer';

const reducers = combineReducers({
    error,
    token: authentication,
    floors,
    rooms,
});

export default reducers;
