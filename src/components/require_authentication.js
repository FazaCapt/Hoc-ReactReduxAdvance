import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function(ComposedComponent) {
    class Authentication extends Component {
        static contextType = {
            router: React.PropTypes.object
        }


        render() {
            console.log(this.context);
            return <ComposedComponent {...this.props} /> 
        }
    }
    function mapStateToProps(state){
        return {authenticated: state.authenticated}
    }

    return connect(mapStateToProps)(Authentication);
}

