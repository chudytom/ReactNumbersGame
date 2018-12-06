import React, { Component } from 'react';

const e = React.createElement

class Result extends Component {
    render() {
        return e('div', null, this.props.value);
    }
}

export default Result;