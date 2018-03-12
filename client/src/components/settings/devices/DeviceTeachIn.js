import React from 'react';
import { Message, Icon, Form, Button } from 'semantic-ui-react';

class DeviceTeachIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = { floors: [{ key: 'floor1', value: 'floor1', text: 'Floor 1' }], rooms: [] };
    }
    render() {
        return (
            <div id="devicesTeachIn">
                <Message icon>
                    <Icon name="circle notched" loading />
                    <Message.Content>
                        <Message.Header>Press Teach-In Button</Message.Header>
                        Press the Teach-In button of your new device.
                    </Message.Content>
                </Message>

                <Form>
                    <Form.Input label="Device ID" placeholder="Device ID" readOnly disabled />
                    <Form.Input label="Device name" placeholder="Device name" disabled />
                    <Form.Select fluid label="Floor" options={this.state.floors} placeholder="Floor" disabled />
                    <Form.Select fluid label="Room" options={this.state.rooms} placeholder="Room" disabled />
                    <Button disabled>Submit</Button>
                </Form>
            </div>
        );
    }
}

export default DeviceTeachIn;
