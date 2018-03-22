import axios from 'axios';

export const ACTIVATE_TEACHMODE = 'ACTIVATE_TEACHMODE';

export function activateTeachmode(token) {
    return (dispatch) => {
        const headers = { Authorization: `Bearer ${token}` };

        axios.get(`${process.env.REACT_APP_SERVER_URL}/teachmode/true`, { headers }).then((res) => {
            if (res.data.error) {
                dispatch({
                    type: 'HTTP_ERROR',
                    payload: null,
                });
            } else {
                dispatch({
                    type: ACTIVATE_TEACHMODE,
                    payload: res.data,
                });
            }

            return null;
        }).catch((err) => {
            console.log(err);
        });
    };
}
