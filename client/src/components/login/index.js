import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Container, Form, Message, Image, FormInput, Button } from 'semantic-ui-react';

// Actions
import { authenticate } from '../../actions/authentication.action';

import './login.css';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = { username: null, password: null };

        this.updateUsername = this.updateUsername.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
        this.showErrorMessage = this.showErrorMessage.bind(this);
    }

    updateUsername(event) {
        this.setState({ username: event.target.value });
    }

    updatePassword(event) {
        this.setState({ password: event.target.value });
    }

    showErrorMessage() {
        if (this.props.error) {
            return (
                <Message content={this.props.error.msg} negative />
            );
        }

        return null;
    }

    render() {
        return (
            <Container>
                <Form className="login-form">
                    <Image className="login-image" src="http://via.placeholder.com/450x150" />
                    {this.showErrorMessage()}
                    <FormInput label="Username" type="text" onChange={this.updateUsername} />
                    <FormInput label="Password" type="password" onChange={this.updatePassword} />
                    <Button content="Login" floated="right" primary onClick={() => this.props.authenticate(this.state.username, this.state.password, this.props.history)} />
                </Form>
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {
        error: state.error,
        token: state.token,
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ authenticate }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Login);
