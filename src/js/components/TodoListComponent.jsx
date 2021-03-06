import React from 'react';

import PropTypes from 'prop-types';
import TodoItemComponent from './TodoItemComponent';

class TodoListComponent extends React.Component {

    render() {

        const listItems = this.props.Items.map(
            (item) => {
                return (
                    <TodoItemComponent
                        item={item}
                        key={item.id}
                        getTitleFieldByRef={this.props.getTitleFieldByRef}
                        getMessageFieldByRef={this.props.getMessageFieldByRef}
                        onSaveClick={() => this.props.onSaveClick(item.id)}
                        onCancelClick={() => this.props.onCancelClick(item.id)}
                        onRemoveClick={() => this.props.onRemoveClick(item.id)}
                        onEditClick={() => this.props.onEditClick(item.id)}
                    />
                );
            });

        return (
            <ul className="Todo-List">
                {listItems}
            </ul>
        );
    }
}

TodoListComponent.propTypes = {
    Items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string,
            message: PropTypes.string,
            date: PropTypes.string,
            isTriggeredEdit: PropTypes.bool
        })
    ),
    getTitleFieldByRef: PropTypes.func.isRequired,
    getMessageFieldByRef: PropTypes.func.isRequired,
    onSaveClick: PropTypes.func.isRequired,
    onCancelClick: PropTypes.func.isRequired,
    onRemoveClick: PropTypes.func.isRequired,
    onEditClick: PropTypes.func.isRequired
}

export default TodoListComponent;