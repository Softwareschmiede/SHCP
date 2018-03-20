import React from 'react';
import ReactDOM from 'react-dom';
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers';
import RequireAuth from './components/hoc';

// Navigation
import Navigation from './components/navigation/Navigation';
import Dashboard from './components/dashboard/Dashboard';
import Floors from './components/floors/Floors';
import Rooms from './components/rooms/Rooms';
import Room from './components/room';
import Login from './components/login';

// Settings
import FloorSettings from './components/settings/floors/Floors';
import RoomSettings from './components/settings/room';
import DevicesSettings from './components/settings/devices';
import DeviceSettings from './components/settings/device/Device';

// Actions
import { validate } from './actions/authentication.action';
import { loadFloors } from './actions/floors.action';
import { loadRooms } from './actions/rooms.action';

import './index.css';

const store = createStore(reducers, applyMiddleware(reduxThunk));
const token = localStorage.getItem('token');

if (token) {
    // Init
    store.dispatch(validate(token));
    store.dispatch(loadFloors(token));
    store.dispatch(loadRooms(token));
}

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div id="shcp">
                <Navigation />
                <div id="content">
                    <Switch>
                        <Redirect exact from="/" to="/dashboard" />
                        <Route exact path="/dashboard" component={RequireAuth(Dashboard)} />
                        <Route exact path="/floors" component={RequireAuth(Floors)} />
                        {/*<Route exact path="/rooms" component={RequireAuth(Rooms)} />*/}
                        <Route exact path="/room/:id" component={RequireAuth(Room)} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/settings/floors" component={RequireAuth(FloorSettings)} />
                        <Route exact path="/settings/rooms" component={RequireAuth(RoomSettings)} />
                        <Route exact path="/settings/device/:deviceId" component={RequireAuth(DeviceSettings)} />
                        <Route exact path="/settings/devices" component={RequireAuth(DevicesSettings)} />
                    </Switch>
                </div>
            </div>
        </Router>
    </Provider>,
    document.getElementById('root'),
);

registerServiceWorker();
