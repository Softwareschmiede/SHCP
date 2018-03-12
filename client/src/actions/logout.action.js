import { UNAUTHENTICATED } from '../actions/authentication.action';

export default function () {
    localStorage.clear();

    return {
        type: UNAUTHENTICATED,
        payload: null,
    };
}
