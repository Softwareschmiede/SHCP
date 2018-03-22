import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Login from '../login';

export default function (ComposedComponent) {
    class HOC extends React.Component {
        // constructor(props) {
        //     super(props);

        //     this.state = { component: <Login /> };
        // }

        // componentWillMount() {
        //     console.log('HOC will mount');
        //     console.log(this.props.token);
        //     if (!this.props.token) {
        //         this.props.history.push('/login');
        //     }
        // }

        // componentWillReceiveProps(props) {
        //     console.log('HOC received props');
        //     this.setState({ component: <ComposedComponent /> });
        // }

        // componentWillUpdate(nextProps) {
        //     if (!nextProps.token) {
        //         this.setState({ component: <ComposedComponent /> });
        //     }
        // }

        // render() {
        //     console.log(this.props);
        //     // return <ComposedComponent {...this.props} />;
        //     return this.state.component;
        // }

        render() {
            if (this.props.token) {
                return <ComposedComponent {...this.props} />;
            }

            return <Login />;
        }
    }

    // HOC.propTypes = {
    //     token: PropTypes.string,
    //     history: PropTypes.shape({
    //         push: PropTypes.func,
    //     }).isRequired,
    // };

    // HOC.defaultProps = {
    //     token: null,
    // };


    function mapStateToProps(state) {
        return { token: state.token };
    }

    return connect(mapStateToProps)(HOC);
}
