import React, {Component} from 'react';

const e = React.createElement

class CustomButton extends Component {
    handleClick = () => this.props.onClickFunction(this.props.incrementValue)
    render() {
        return e('button', {onClick: this.handleClick}, `+${this.props.incrementValue}`);
    }
}

export default CustomButton;