import React from 'react';
// import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Card, Input, Button } from 'semantic-ui-react';

// Actions
import { createFloor } from '../../../actions/floors.action';

// import './rooms.css';

class FloorSettings extends React.Component {
    constructor(props) {
        super(props);

        // State
        this.state = { floorName: '' };

        // Functions
        this.updateFloorName = this.updateFloorName.bind(this);
        this.createNewFloor = this.createNewFloor.bind(this);
        this.resetInput = this.resetInput.bind(this);
    }

    updateFloorName(event) {
        this.setState({ floorName: event.target.value });
    }

    createNewFloor() {
        this.props.createFloor(this.state.floorName, this.props.token);
        this.setState({ floorName: '' });
    }

    resetInput() {
        this.setState({ floorName: '' });
    }

    render() {
        return (
            <div id="floorSettings">
                <Card.Group>
                    <Card>
                        <Card.Content extra>
                            <Card.Header>
                                <Input placeholder="Neues Stockwerk" size="mini" fluid value={this.state.floorName} onChange={this.updateFloorName} />
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
                                <Input defaultValue="Stockwerk 1" size="mini" transparent fluid />
                            </Card.Header>
                            <Card.Description>Räume: 1</Card.Description>
                            <Card.Description>Geräte: 5</Card.Description>
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
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ createFloor }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(FloorSettings);
