import React from 'react';
// import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Card, Input, Button, Dropdown } from 'semantic-ui-react';

// Actions
import { createRoom } from '../../../actions/rooms.action';

// import './rooms.css';

class RoomSettings extends React.Component {
    constructor(props) {
        super(props);

        // State
        this.state = { name: '', floorId: null };

        // Functions
        // this.updateHandler = this.updateHandler.bind(this);
        this.createNewRoom = this.createNewRoom.bind(this);
        this.resetInput = this.resetInput.bind(this);
        this.renderOptions = this.renderOptions.bind(this);
    }

    // updateHandler(event) {
    //     console.log(event);
    //     // this.setState({ floorName: event.target.value });
    // }

    createNewRoom() {
        this.props.createRoom(this.state.floorName, this.props.token);
        this.setState({ floorName: '' });
    }

    resetInput() {
        this.setState({ name: '' });
    }

    renderOptions() {
        const options = [];
        for (let i = 0; i < this.props.floors.length; i += 1) {
            const floor = this.props.floors[i];

            const option = { key: floor._id, text: floor.name, value: floor._id };
            options.push(option);
        }

        return options;
    }

    render() {
        return (
            <div id="roomSettings">
                <Card.Group>
                    <Card>
                        <Card.Content extra>
                            <Card.Header>
                                <Input placeholder="Neuer Raum" size="mini" fluid value={this.state.name} />
                                <Dropdown placeholder='Select Friend' size="mini" fluid selection options={this.renderOptions()} />
                                <Button.Group fluid>
                                    <Button onClick={this.resetInput}>Reset</Button>
                                    <Button.Or />
                                    <Button positive onClick={this.createNewFloor}>Save</Button>
                                </Button.Group>
                            </Card.Header>
                        </Card.Content>
                    </Card>
                    <Card>
                        <Card.Content>
                            <Card.Header>
                                <Input defaultValue="Raum 1" size="mini" transparent fluid />
                            </Card.Header>
                            <Card.Description>Stockwerk: Stockwerk 1</Card.Description>
                            <Card.Description>Geräte: 4</Card.Description>
                        </Card.Content>
                    </Card>
                </Card.Group>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        token: state.token,
        floors: state.floors,
        room: state.rooms,
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ createRoom }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(RoomSettings);
