import React from 'react';

export default class TodoMessage extends React.Component {

    render() {
        return (
            <input
                type="text"
                placeholder="Your message"
                onChange={this.props.checkMessageForm}
            />
        );
    }
}