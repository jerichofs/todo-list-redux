import React from 'react';
import PropTypes from 'prop-types';

class TodoTitle extends React.Component {

    render() {
        return (
            <input
                type="text"
                placeholder="Title"
                ref={this.props.getTitleField}
            />
        );
    }
}

TodoTitle.propTypes = {
    getTitleField: PropTypes.func.isRequired
}

export default TodoTitle;