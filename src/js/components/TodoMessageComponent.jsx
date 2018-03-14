import React from 'react';
import PropTypes from 'prop-types';

class TodoMessage extends React.Component {

    render() {
        return (
            <input
                type="text"
                placeholder="Your message"
                ref={this.props.getMessageField}
            />
        );
    }
}

TodoMessage.propTypes = {
    getMessageField: PropTypes.func.isRequired
}

export default TodoMessage;