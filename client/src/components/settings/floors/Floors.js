import React from 'react';
// import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import update from 'react-addons-update';
import { Card, Input, Button } from 'semantic-ui-react';

// Actions
import { createFloor, updateFloor } from '../../../actions/floors.action';

// import './rooms.css';

class FloorSettings extends React.Component {
    constructor(props) {
        super(props);

        // State
        this.state = { floors: this.props.floors };

        console.log('Constructor');

        // Functions
        this.updateHandler = this.updateHandler.bind(this);
        this.updateFloor = this.updateFloor.bind(this);
        this.createNewFloor = this.createNewFloor.bind(this);
        this.resetInput = this.resetInput.bind(this);
        this.showFloors = this.showFloors.bind(this);
    }

    // componentWillReceiveProps(props) {
    //     console.log('New Props');
    //     this.setState({ floors: props.floors });
    // }

    updateHandler(e) {
        const index = this.state.floors.findIndex(element => element._id === e.target.id);

        const floors = update(this.state.floors, {
            [index]: {
                [e.target.name]: { $set: e.target.value },
            },
        });

        this.setState({ floors });
    }

    updateFloor(e) {
        this.props.updateFloor({ _id: e.target.id, [e.target.name]: e.target.value }, this.props.token);
    }

    createNewFloor() {
        this.props.createFloor(this.state.floorName, this.props.token);
        this.setState({ floorName: '' });
    }

    resetInput() {
        this.setState({ floorName: '' });
    }

    showFloors() {
        return this.state.floors.map(floor => (
            <Card key={floor._id}>
                <Card.Content>
                    <Card.Header>
                        <Input id={floor._id} name="name" value={floor.name} size="mini" transparent fluid onChange={e => this.updateHandler(e)} onBlur={e => this.updateFloor(e)} />
                    </Card.Header>
                    <Card.Description>Räume: 1</Card.Description>
                    <Card.Description>Geräte: 5</Card.Description>
                </Card.Content>
            </Card>
        ));
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
                    {this.showFloors()}
                </Card.Group>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        token: state.token,
        floors: state.floors,
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ createFloor, updateFloor }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(FloorSettings);
