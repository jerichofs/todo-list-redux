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
                        ref={this.props.getTitleFieldByRef}
                    />
                    <br/>
                    <input
                        className="Edit-Title-Message"
                        type="text"
                        defaultValue={this.props.item.message}
                        ref={this.props.getMessageFieldByRef}
                    />
                    <br/>
                    <button className="Save-Button" onClick={this.props.onSaveClick}>save</button>
                    <button className="Cancel-Button" onClick={this.props.onCancelClick}>cancel</button>
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
                    
                    <button className="Remove-Button"  onClick={this.props.onRemoveClick}>remove</button>
                    <button className="Edit-Button" onClick={this.props.onEditClick}>edit</button>
                    
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
    getTitleFieldByRef: PropTypes.func.isRequired,
    getMessageFieldByRef: PropTypes.func.isRequired,
    onSaveClick: PropTypes.func.isRequired,
    onCancelClick: PropTypes.func.isRequired,
    onRemoveClick: PropTypes.func.isRequired,
    onEditClick: PropTypes.func.isRequired
}

export default TodoItemComponent;