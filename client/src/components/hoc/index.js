import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export default function (ComposedComponent) {
    class HOC extends React.Component {
        componentWillMount() {
            if (!this.props.token) {
                this.props.history.push('/login');
            }
        }

        componentWillUpdate(nextProps) {
            if (!nextProps.token) {
                this.props.history.push('/login');
            }
        }

        render() {
            return <ComposedComponent {...this.props} />;
        }
    }

    HOC.propTypes = {
        token: PropTypes.string,
        history: PropTypes.shape({
            push: PropTypes.func,
        }).isRequired,
    };

    HOC.defaultProps = {
        token: null,
    };


    function mapStateToProps(state) {
        return { token: state.token };
    }

    return connect(mapStateToProps)(HOC);
}
