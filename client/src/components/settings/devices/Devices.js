import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';

import DeviceTeachIn from './DeviceTeachIn';

class DevicesSettings extends React.Component {
    render() {
        return (
            <div id="devicesSettings">
                <Menu>
                    <Menu.Item name="test1"><Icon name="find" />Start Teach In</Menu.Item>
                    <Menu.Item name="test2"><Icon name="cube" />Create Virtual Device</Menu.Item>
                    <Menu.Item name="test3">Test3</Menu.Item>
                </Menu>

                <DeviceTeachIn />
            </div>
        );
    }
}

export default DevicesSettings;
