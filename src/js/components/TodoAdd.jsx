import React from 'react';

export default class TodoAdd extends React.Component {

    render() {
        return (
            <button onSubmit={this.props.checkInputsForm}>Add</button>
        );
    }
}
