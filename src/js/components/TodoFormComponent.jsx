import React from 'react';
import PropTypes from 'prop-types';

import TodoTitle from './TodoTitle';
import TodoMessage from './TodoMessage';
import TodoAdd from './TodoAdd';


class TodoFormComponent extends React.Component {

    render() {
        return (
            <div className="Todo-Form">
                <form onSubmit={this.props.onAddClick}>
                    <div className="Todo-Title">
                        <TodoTitle getTitleField={this.props.getTitleByRef} />
                    </div>

                    <div className="Todo-Message">
                        <TodoMessage getMessageField={this.props.getMessageByRef} />
                    </div>

                    <div className="Todo-Add">
                        <TodoAdd />
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