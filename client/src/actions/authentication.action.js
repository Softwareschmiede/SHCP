import axios from 'axios';
import { ERROR } from './error.action';

export const AUTHENTICATED = 'AUTHENTICATED';
export const UNAUTHENTICATED = 'UNAUTHENTICATED';
export const AUTHENTICATION_ERROR = 'AUTHENTICATED';

export function authenticate(username, password, history) {
    return (dispatch) => {
        axios.post(`${process.env.REACT_APP_SERVER_URL}/authenticate`, { username, password }).then((res) => {
            if (res.data.error) {
                dispatch({
                    type: ERROR,
                    payload: res.data.error,
                });
            } else {
                localStorage.setItem('token', res.data.token);

                dispatch({
                    type: AUTHENTICATED,
                    payload: res.data.token,
                });

                history.push('/dashboard');
            }
        }).catch((error) => {
            dispatch({
                type: ERROR,
                payload: error,
            });
        });
    };
}

export function validate(token) {
    return (dispatch) => {
        const headers = { Authorization: `Bearer ${token}` };

        axios.get(`${process.env.REACT_APP_SERVER_URL}/validate`, { headers }).then((res) => {
            if (res.status !== 200) {
                dispatch({
                    type: AUTHENTICATION_ERROR,
                    payload: null,
                });
            } else {
                dispatch({
                    type: AUTHENTICATED,
                    payload: token,
                });

                // history.push('/dashboard');
            }
        }).catch((error) => {
            console.log(error);
        });
    };
}
