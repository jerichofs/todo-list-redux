import React from 'react';

export default class TodoTitle extends React.Component {

    render() {
        return (
            <input
                type="text"
                placeholder="Title"
                onChange={this.props.checkTitleForm}
            />
        );
    }
}