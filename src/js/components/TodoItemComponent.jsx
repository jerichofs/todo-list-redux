import React from 'react';
import PropTypes from 'prop-types';

class TodoItemComponent extends React.Component {

    render() {

        // just name variables
        let id = this.props.item.id;
        let title = this.props.item.title;
        let message = this.props.item.message;
        let date = this.props.item.date;
        let isTriggeredEdit = this.props.item.isTriggeredEdit;

        // this condition will carry out only if we pressed the edit button once
        if (this.props.item.isTriggeredEdit) {
            return (
                <li className="Item">

                    <input
                        className="Edit-Title-Message"
                        type="text"
                        defaultValue={this.props.item.title}
                        ref={this.props.getTitleItemField}
                    />
                    <input
                        className="Edit-Title-Message"
                        type="text"
                        defaultValue={this.props.item.message}
                        ref={this.props.getMessageItemField}
                    />

                    <button className="Save-Button" onClick={this.props.onSaveField}>save</button>
                    <button className="Cancel-Button" onClick={this.props.onCancelField}>cancel</button>
                </li>
            );
        }
        else {
            return (
                <li className="Item">
                    <div className="Item-Title-Message">
                        <p className="Item-Title">{this.props.item.title}</p>
                        <p className="Item-Message">{this.props.item.message}</p>
                        <p className="Item-Date">{this.props.item.date}</p>
                    </div>
                    
                    <button className="Remove-Button"  onClick={this.props.onRemoveField}>remove</button>
                    <button className="Edit-Button" onClick={this.props.onEditField}>edit</button>
                    
                </li>
            );
        }
    }
}

TodoItemComponent.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        message: PropTypes.string,
        date: PropTypes.string,
        isTriggeredEdit: PropTypes.bool
    }),
    getTitleItemField: PropTypes.func.isRequired,
    getMessageItemField: PropTypes.func.isRequired,
    onSaveField: PropTypes.func.isRequired,
    onCancelField: PropTypes.func.isRequired,
    onRemoveField: PropTypes.func.isRequired,
    onEditField: PropTypes.func.isRequired
}

export default TodoItemComponent;