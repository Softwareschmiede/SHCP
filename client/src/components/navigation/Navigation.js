import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import { Menu, Dropdown } from 'semantic-ui-react';

// Actions
import logoutAction from '../../actions/logout.action';

class Navigation extends React.Component {
    constructor(props) {
        super(props);

        this.showMenuItems = this.showMenuItems.bind(this);
    }

    showMenuItems() {
        if (this.props.token) {
            return (
                <Menu.Menu position="right">
                    <Menu.Item link name="dashboard" as={NavLink} to="/dashboard" />
                    <Dropdown item text="Floors">
                        <Dropdown.Menu>
                            {this.props.floors.map(floor => <Dropdown.Item key={floor._id} as={NavLink} to={`/floors/${floor._id}`}>{floor.name}</Dropdown.Item>)}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown item text="Rooms">
                        <Dropdown.Menu>
                            {this.props.rooms.map(room => <Dropdown.Item key={room._id} as={NavLink} to={`/rooms/${room._id}`}>{room.name}</Dropdown.Item>)}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown item text="Settings">
                        <Dropdown.Menu>
                            <Dropdown.Item as={NavLink} to="/settings/user">User</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item as={NavLink} to="/settings/floors">Floors</Dropdown.Item>
                            <Dropdown.Item as={NavLink} to="/settings/rooms">Rooms</Dropdown.Item>
                            <Dropdown.Item as={NavLink} to="/settings/devices">Devices</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Menu.Item link name="logout" onClick={() => this.props.logoutAction()} />
                </Menu.Menu>
            );
        }

        return (
            <Menu.Menu position="right">
                <Menu.Item link name="login" as={NavLink} to="/login" />
            </Menu.Menu>
        );
    }

    render() {
        return (
            <Menu>
                <Menu.Item name="shcp" content="SHCP" as={Link} to="/dashboard" />
                <Menu.Menu position="right">
                    {this.showMenuItems()}
                </Menu.Menu>
            </Menu>
        );
    }
}

Navigation.propTypes = {
    token: PropTypes.string,
    logoutAction: PropTypes.func.isRequired,
};

Navigation.defaultProps = {
    token: null,
};

function mapStateToProps(state) {
    return {
        token: state.token,
        floors: state.floors,
        rooms: state.rooms,
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ logoutAction }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Navigation);
