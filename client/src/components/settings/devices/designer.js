import React from 'react';
import update from 'immutability-helper';
import { Grid, Dropdown, Input, Button } from 'semantic-ui-react';

class DevicesSettings extends React.Component {
    constructor(props) {
        super(props);

        this.handleFloorName = this.handleFloorName.bind(this);
        this.generateFloors = this.generateFloors.bind(this);
        this.addFloor = this.addFloor.bind(this);
        this.handleAddition = this.handleAddition.bind(this);
        this.handleRoom = this.handleRoom.bind(this);
        // this.save = this.save.bind(this);

        this.state = {
            defaultRooms: [
                { key: 1, text: 'Badezimmer', value: 1 },
                { key: 2, text: 'Küche', value: 2 },
                { key: 3, text: 'Schlafzimmer', value: 3 },
                { key: 4, text: 'Wohnzimmer', value: 4 },
            ],
            floors: [],
            newFloorName: '',
        };
    }

    handleFloorName(e) {
        this.setState({ newFloorName: e.target.value });
    }

    addFloor() {
        const floor = { name: this.state.newFloorName, rooms: [] };
        this.setState(state => ({
            floors: [...state.floors, floor],
        }));

        this.setState({ newFloorName: '' });
    }

    handleRoom(e, value) {
        this.setState({
            floors: update(this.state.floors, { 0: { rooms: { $set: value } } }),
        });
    }

    handleAddition(e, value) {
        const room = { key: this.state.defaultRooms.length + 1, text: value, value: this.state.defaultRooms.length + 1 };

        this.setState(state => ({
            defaultRooms: [...state.defaultRooms, room],
        }));
    }

    // save() {

    // }

    generateFloors() {
        const floors = this.state.floors.map((floor, i) => (
            <Grid.Column key={i} id="room" mobile={16} tablet={8} computer={6} largeScreen={5} widescreen={5}>
                <label htmlFor={i}>{floor.name}</label>
                <Dropdown id={i} placeholder="Räume" options={this.state.defaultRooms} value={floor.rooms} onAddItem={(e, { value }) => this.handleAddition(e, value)} onChange={(e, { value }) => this.handleRoom(e, value)} fluid multiple search selection allowAdditions />
            </Grid.Column>
        ));

        return floors;
    }

    render() {
        return (
            <div id="designer">
                <Grid columns={1}>
                    <Grid.Column>
                        <h3>Stockwerke</h3>
                    </Grid.Column>
                    <Grid.Column textAlign="right" mobile={16} tablet={8} computer={6} largeScreen={5} widescreen={5}>
                        <Input action={<Button type="submit" icon="add" onClick={() => this.addFloor()} />} placeholder="Stockwerk 1" value={this.state.newFloorName} onChange={e => this.handleFloorName(e)} fluid />
                    </Grid.Column>

                    <Grid.Column>
                        <h3>Räume</h3>
                    </Grid.Column>
                    {this.generateFloors()}
                </Grid>
            </div>
        );
    }
}

export default DevicesSettings;
