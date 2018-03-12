import React from 'react';
import { Grid, Table } from 'semantic-ui-react';

// import './rooms.css';

class DeviceSettings extends React.Component {
    render() {
        return (
            <div id="deviceSettings">
                <Grid columns="2">
                    <Grid.Column>
                        <Table celled striped>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell colSpan="3">Attributes</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>

                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell>CO²</Table.Cell>
                                    <Table.Cell>471.58</Table.Cell>
                                    <Table.Cell>05.03.2018 13:40:11</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>powerFailureDetection</Table.Cell>
                                    <Table.Cell>not_detected</Table.Cell>
                                    <Table.Cell>05.03.2018 13:40:11</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>RSSI</Table.Cell>
                                    <Table.Cell>-41 (Excellent)</Table.Cell>
                                    <Table.Cell>05.03.2018 13:40:11</Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                    </Grid.Column>
                    <Grid.Column>
                        <Table celled striped>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell colSpan="2">Internals</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>

                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell>ID:</Table.Cell>
                                    <Table.Cell>{this.props.match.params.deviceId}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Protocol:</Table.Cell>
                                    <Table.Cell>EnOcean</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>I/O Dev</Table.Cell>
                                    <Table.Cell>TCM_310</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>EEP</Table.Cell>
                                    <Table.Cell>A5-09-09</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Manufacturer</Table.Cell>
                                    <Table.Cell>Unknown</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Type</Table.Cell>
                                    <Table.Cell>CO² Sensor</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Logfile</Table.Cell>
                                    <Table.Cell>Log_019C4D38</Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

export default DeviceSettings;
