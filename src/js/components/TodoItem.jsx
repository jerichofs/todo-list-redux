import React from 'react';
import TodoTitle from './TodoTitle';

export default class TodoItem extends React.Component {

    HandleRemove = () => {
        const{item, removeItem} = this.props;
        removeItem(item.id);
    }

    HandleEdit = () => {
        const{item, editItem} = this.props;
        editItem(item.id);
    }

    HandleSave = () => {
        const{item, saveEdit} = this.props;
        saveEdit(item.id);
    }

    HandleCancel = () => {
        const{item, cancelEdit} = this.props;
        cancelEdit(item.id);
    }

// this.props.item.isTriggeredEdit

    render() {

        // this condition will carry out only if we pressed the edit button once
        if (this.props.item.isTriggeredEdit) {
            return (
                <li className="Item">

                    <input
                        className="Edit-Title-Message"
                        type="text"
                        defaultValue={this.props.item.title}
                        onChange={this.props.editTitle}
                    />
                    <input
                        className="Edit-Title-Message"
                        type="text"
                        defaultValue={this.props.item.message}
                        onChange={this.props.editMessage}
                    />

                    <button className="Save-Button" onClick={this.HandleSave}>save</button>
                    <button className="Cancel-Button" onClick={this.HandleCancel}>cancel</button>
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
                    
                    <button className="Remove-Button" onClick={this.HandleRemove}>remove</button>
                    <button className="Edit-Button" onClick={this.HandleEdit}>edit</button>
                    
                </li>
            );
        }
    }
}

/**
 *  <p>{this.props.itemTitle}</p>
                <p>{this.props.itemMessage}</p>
                <p>{this.props.dateItem}</p>
                <button onClick={this.HandleRemove}>remove</button>
                <button onClick={this.props.clickEdit}>Edit</button>
 */