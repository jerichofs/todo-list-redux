import React from 'react';
import TodoItemComponent from './TodoItemComponent';

class TodoListComponent extends React.Component {


    render() {

        const listItems = this.props.Items.map(
            (item) => {
                return (
                    <TodoItemComponent
                        item={item}
                        key={item.id}
                        removeItem={this.props.removeItemList}
                        editItem={this.props.editItemClick}
                        editTitle={this.props.editTitleItem}
                        editMessage={this.props.editMessageItem}
                        saveEdit={this.props.saveEditItem}
                        cancelEdit={this.props.cancelEditItem}
                        editButtonTrigered={this.props.editButtonTrigeredItem}
                    />
                );
            });

        return (
            <ul>{listItems}</ul>
        );
    }
}

export default TodoListComponent;