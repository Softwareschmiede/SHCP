import axios from 'axios';

export const LOAD_FLOORS = 'LOAD_FLOORS';
export const CREATE_FLOOR = 'CREATE_FLOOR';
export const UPDATE_FLOOR = 'UPDATE_FLOOR';

export function loadFloors(token) {
    return (dispatch) => {
        const headers = { Authorization: `Bearer ${token}` };

        axios.get(`${process.env.REACT_APP_SERVER_URL}/floors`, { headers }).then((res) => {
            if (res.data.error) {
                dispatch({
                    type: 'HTTP_ERROR',
                    payload: null,
                });
            } else {
                dispatch({
                    type: LOAD_FLOORS,
                    payload: res.data,
                });
            }

            return null;
        }).catch((err) => {
            console.log(err);
        });
    };
}

export function createFloor(name, token) {
    return (dispatch) => {
        const headers = { Authorization: `Bearer ${token}` };

        axios.post(`${process.env.REACT_APP_SERVER_URL}/floors`, { name }, { headers }).then((res) => {
            if (res.data.error) {
                dispatch({
                    type: 'HTTP_ERROR',
                    payload: res.data.error,
                });
            } else {
                dispatch({
                    type: CREATE_FLOOR,
                    payload: res.data,
                });
            }

            return null;
        }).catch((err) => {
            console.log(err);
        });
    };
}

export function updateFloor(floor, token) {
    return (dispatch) => {
        const headers = { Authorization: `Bearer ${token}` };

        axios.put(`${process.env.REACT_APP_SERVER_URL}/floors/${floor._id}`, { name: floor.name }, { headers }).then((res) => {
            if (res.data.error) {
                dispatch({
                    type: 'HTTP_ERROR',
                    payload: res.data.error,
                });
            } else {
                dispatch({
                    type: UPDATE_FLOOR,
                    payload: res.data,
                });
            }

            return null;
        }).catch((err) => {
            console.log(err);
        });
    };
}
