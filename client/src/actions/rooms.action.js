import axios from 'axios';

export const LOAD_ROOMS = 'LOAD_ROOMS';
export const CREATE_ROOM = 'CREATE_ROOM';

export function loadRooms(token) {
    return (dispatch) => {
        const headers = { Authorization: `Bearer ${token}` };

        axios.get(`${process.env.REACT_APP_SERVER_URL}/rooms`, { headers }).then((res) => {
            if (res.data.error) {
                dispatch({
                    type: 'HTTP_ERROR',
                    payload: null,
                });
            } else {
                dispatch({
                    type: LOAD_ROOMS,
                    payload: res.data,
                });
            }

            return null;
        }).catch((err) => {
            console.log(err);
        });
    };
}

export function createRoom(room, token) {
    return (dispatch) => {
        const headers = { Authorization: `Bearer ${token}` };

        axios.post(`${process.env.REACT_APP_SERVER_URL}/rooms`, { room }, { headers }).then((res) => {
            if (res.data.error) {
                dispatch({
                    type: 'HTTP_ERROR',
                    payload: null,
                });
            } else {
                dispatch({
                    type: CREATE_ROOM,
                    payload: res.data,
                });
            }

            return null;
        }).catch((err) => {
            console.log(err);
        });
    };
}
