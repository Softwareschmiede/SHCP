import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Message, Accordion, Button, Input, Icon } from 'semantic-ui-react';

// Actions
import { activateTeachmode } from '../../../actions/teach.action';

class DeviceTeachIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = { floors: [{ key: 'floor1', value: 'floor1', text: 'Floor 1' }], rooms: [] };
    }

    componentWillMount() {
        console.log('Started');
        this.props.activateTeachmode(this.props.token);
    }

    render() {
        return (
            <div id="teachIn">
                <Message icon>
                    <Icon name="circle notched" loading />
                    <Message.Content>
                        <Message.Header>Press Teach-In Button</Message.Header>
                        Press the Teach-In button of your new device.
                        <Button color='orange'>Manually</Button>
                        <Button color='red'>Stop</Button>
                    </Message.Content>
                </Message>

                <Accordion defaultActiveIndex={0} styled fluid>
                    <Accordion.Title index={0} active={true} onClick={this.handleClick}>
                        <Icon name="dropdown" />
                        12345678
                    </Accordion.Title>
                    <Accordion.Content active={true}>
                        <Input label="Name" placeholder="" />
                        <Input label="Name" placeholder="" />
                        <Input label="Name" placeholder="" />
                        <Input label="Name" placeholder="" />
                    </Accordion.Content>
                </Accordion>
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
    return bindActionCreators({ activateTeachmode }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(DeviceTeachIn);
