import React, { Component } from 'react';

export default function(ComposedComponent) {
    class Authentication extends Component {
        render() {
            // console.log(this.props.resources) // => resourcesList
            return <ComposedComponent {...this.props} /> 
        }
    }
    return Authentication;
}


// // In some location... Not in this file...
// // we want to use this HOC

// import Authentication //this is my HOC
// import Resources //this is the component i want to wrap

// const ComposedComponent = Authentication(Resources);

// // in some render method....
// <ComposedComponent resources={resourcesList} />