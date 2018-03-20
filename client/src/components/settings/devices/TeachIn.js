import React from 'react';
import { Message, Accordion, Icon } from 'semantic-ui-react';

class DeviceTeachIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = { floors: [{ key: 'floor1', value: 'floor1', text: 'Floor 1' }], rooms: [] };
    }
    render() {
        return (
            <div id="teachIn">
                <Message icon>
                    <Icon name="circle notched" loading />
                    <Message.Content>
                        <Message.Header>Press Teach-In Button</Message.Header>
                        Press the Teach-In button of your new device.
                    </Message.Content>
                </Message>

                <Accordion defaultActiveIndex={0} styled fluid>
                    <Accordion.Title index={0} onClick={this.handleClick}>
                        <Icon name="dropdown" />
                        What is a dog?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p>
                            A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a
                            {' '}welcome guest in many households across the world.
                        </p>
                    </Accordion.Content>
                </Accordion>
            </div>
        );
    }
}

export default DeviceTeachIn;
