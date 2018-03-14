import React from 'react';
import PropTypes from 'prop-types';

import TodoTitleComponent from './TodoTitleComponent';
import TodoMessageComponent from './TodoMessageComponent';
import TodoAddComponent from './TodoAddComponent';


class TodoFormComponent extends React.Component {

    render() {
        return (
            <div className="Todo-Form">
                <form onSubmit={this.props.onAddClick}>
                    <div className="Todo-Title">
                        <TodoTitleComponent getTitleField={this.props.getTitleByRef} />
                    </div>

                    <div className="Todo-Message">
                        <TodoMessageComponent getMessageField={this.props.getMessageByRef} />
                    </div>

                    <div className="Todo-Add">
                        <TodoAddComponent />
                    </div>
                </form>
                
            </div>
        );
    }
}

TodoFormComponent.propTypes = {
    onAddClick: PropTypes.func.isRequired,
    getTitleByRef: PropTypes.func.isRequired,
    getMessageByRef: PropTypes.func.isRequired
}

export default TodoFormComponent;