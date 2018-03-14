import React from 'react';
import PropTypes from 'prop-types';

class TodoMessageComponent extends React.Component {

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

TodoMessageComponent.propTypes = {
    getMessageField: PropTypes.func.isRequired
}

export default TodoMessageComponent;