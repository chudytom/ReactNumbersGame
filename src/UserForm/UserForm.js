import React, { Component } from 'react';
import axios from 'axios';

class UserForm extends Component {
    state = { userName: '' }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Form submitted by ${this.state.userName}`);
        axios.get(`https://api.github.com/users/${this.state.userName}`)
            .then(response => {
                this.props.onSubmit(response.data);
                this.setState({
                    userName: ''
                })
            });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type='text' placeholder='Github username' value={this.state.userName}
                    onChange={(event) => this.setState({ userName: event.target.value })} />
                <button type='submit'>Add card</button>
            </form>
        )
    }
}

export default UserForm