import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import axios from 'axios';
import { Message, Header, Statistic, Card, Popup, Icon } from 'semantic-ui-react';

import './rooms.css';

class Room extends React.Component {
    constructor(props) {
        super(props);

        this.showError = this.showError.bind(this);

        this.state = { err: null, room: null };
    }

    componentWillMount() {
        const headers = { Authorization: `Bearer ${this.props.token}` };

        console.log(this.props.token);

        axios.get(`${process.env.REACT_APP_SERVER_URL}/rooms/${this.props.match.params.id}`, { headers }).then((res) => {
            if (!res.data.success) {
                // TODO: Show error
                this.setState({ err: res.data.error });
                return;
            }

            this.setState({ room: res.data.room });
        }).catch((err) => {
            // TODO: Show error
            console.log(err);
            this.props.history.push('/login');
        });
    }

    showError() {
        if (this.state.err) {
            return (
                <Message negative>
                    <Message.Header>Error - {this.state.err.id}</Message.Header>
                    <p>{this.state.err.msg}</p>
                </Message>
            );
        }

        return null;
    }

    render() {
        return (
            <div id="room" >
                {this.showError()}
                <Header as="h1">Raum 1</Header>
                <Card.Group>
                    <Card color="red">
                        <Card.Content className="relative">
                            <Link className="absolute top-right" to="/settings/devices"><Icon name="setting" color="grey" /></Link>
                            <Card.Header>
                                <Popup trigger={<Icon name="warning sign" color="red" link />} content="The device has a problem" />
                                Gerät 1
                            </Card.Header>
                            <Card.Meta>Aktor</Card.Meta>
                            <Card.Description>Beschreibung</Card.Description>
                        </Card.Content>
                        <Card.Content textAlign="center">
                            <Statistic size="mini">
                                <Statistic.Value>Eingeschaltet</Statistic.Value>
                                <Statistic.Label />
                            </Statistic>
                        </Card.Content>
                    </Card>
                    <Card>
                        <Card.Content>
                            <Card.Header>Gerät 2</Card.Header>
                            <Card.Meta>Kontakt</Card.Meta>
                            <Card.Description>Beschreibung</Card.Description>
                        </Card.Content>
                        <Card.Content textAlign="center">
                            <Statistic size="mini">
                                <Statistic.Value>Geöffnet</Statistic.Value>
                                <Statistic.Label />
                            </Statistic>
                        </Card.Content>
                    </Card>
                    <Card>
                        <Card.Content>
                            <Card.Header>Gerät 3</Card.Header>
                            <Card.Meta>Temperatursensor</Card.Meta>
                            <Card.Description>Beschreibung, Beschreibung</Card.Description>
                        </Card.Content>
                        <Card.Content textAlign="center">
                            <Statistic size="mini">
                                <Statistic.Value>19.0 °C</Statistic.Value>
                                <Statistic.Label />
                            </Statistic>
                        </Card.Content>
                    </Card>
                    <Card>
                        <Card.Content>
                            <Card.Header>Gerät 4</Card.Header>
                            <Card.Meta>CO² Sensor</Card.Meta>
                            <Card.Description>Beschreibung, Beschreibung</Card.Description>
                        </Card.Content>
                        <Card.Content textAlign="center">
                            <Statistic size="mini">
                                <Statistic.Value>510 ppm</Statistic.Value>
                                <Statistic.Label>Good</Statistic.Label>
                            </Statistic>
                        </Card.Content>
                    </Card>
                    <Card>
                        <Card.Content>
                            <Card.Header>Gerät 5</Card.Header>
                            <Card.Meta>Heizkörperstellantrieb</Card.Meta>
                            <Card.Description>Beschreibung</Card.Description>
                        </Card.Content>
                        <Card.Content textAlign="center">
                            <Statistic.Group size="mini" widths="2">
                                <Statistic>
                                    <Statistic.Value>19.0 °C</Statistic.Value>
                                    <Statistic.Label>Soll</Statistic.Label>
                                </Statistic>
                                <Statistic color="grey">
                                    <Statistic.Value>17.3 °C</Statistic.Value>
                                    <Statistic.Label>Ist</Statistic.Label>
                                </Statistic>
                            </Statistic.Group>
                        </Card.Content>
                    </Card>
                </Card.Group>
            </div>
        );
    }
}

Room.propTypes = {
    token: PropTypes.string,
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.string,
        }).isRequired,
    }).isRequired,
    history: PropTypes.shape({
        push: PropTypes.func,
    }).isRequired,
};

Room.defaultProps = {
    token: null,
};

function mapStateToProps(state) {
    return {
        token: state.token,
    };
}

// function matchDispatchToProps(dispatch) {
//     return bindActionCreators(null, dispatch);
// }

// export default connect(mapStateToProps, matchDispatchToProps)(Room);
export default connect(mapStateToProps)(Room);
