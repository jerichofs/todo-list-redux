import React from 'react';
import PropTypes from 'prop-types';

class TodoTitleComponent extends React.Component {

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

TodoTitleComponent.propTypes = {
    getTitleField: PropTypes.func.isRequired
}

export default TodoTitleComponent;