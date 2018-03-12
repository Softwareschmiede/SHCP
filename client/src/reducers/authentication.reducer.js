import { AUTHENTICATED, UNAUTHENTICATED, AUTHENTICATION_ERROR } from '../actions/authentication.action';

export default function (state = null, action) {
    switch (action.type) {
        case AUTHENTICATED:
            return action.payload;
        case UNAUTHENTICATED:
            return null;
        case AUTHENTICATION_ERROR:
            return null;
        default:
            return state;
    }
}
