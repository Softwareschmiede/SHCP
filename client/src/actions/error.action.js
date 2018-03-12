export const ERROR = 'ERROR';
export const CLEAR = 'CLEAR';

export function error(err) {
    return {
        type: ERROR,
        payload: err,
    };
}

export function clear() {
    return {
        type: CLEAR,
        payload: null,
    };
}
