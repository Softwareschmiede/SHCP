import React from 'react';
import { Tab } from 'semantic-ui-react';

import TeachIn from './TeachIn';
import Designer from './designer';

class DevicesSettings extends React.Component {
    constructor(props) {
        super(props);

        this.panes = [
            { menuItem: 'Designer', render: () => <Tab.Pane><Designer /></Tab.Pane> },
            { menuItem: 'Teach-In device', render: () => <Tab.Pane><TeachIn /></Tab.Pane> },
            { menuItem: 'Tab 3', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
        ];
    }
    render() {
        return (
            <div id="devicesSettings">
                <Tab menu={{ pointing: true }} panes={this.panes} />
            </div>
        );
    }
}

export default DevicesSettings;
