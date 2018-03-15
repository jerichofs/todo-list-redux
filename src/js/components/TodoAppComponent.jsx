import React from 'react';

import TodoForm from './TodoForm';
import TodoList from './TodoList';

export default class TodoApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            itemID: 0,
            title: '',
            message: '',
            backupTitle: '',
            backupMessage: '',
            editTitle: '',
            editMessage: '',
            dataItems: []
        };
    }

    HandleTitle = (e) => {
        this.setState({title: e.target.value});
        e.preventDefault();
    }

    HandleMessage = (e) => {
        this.setState({message: e.target.value});
        e.preventDefault();
    }

    HandleInputs = (e) => {

        // if we didn't type anything then say about it
        if (!this.state.title) {
            alert('You haven\'t typed a title!');
        }

        else if (!this.state.message) {
            alert('You haven\'t typed a message!');
        }
        else {
            /**
             * this block only executes after filling up
             * both title and message inputs
             */
            let datePushedItem = new Date();
            let dateStringItem =  datePushedItem.getDate()  + "-" + (datePushedItem.getMonth()+1) + "-" + datePushedItem.getFullYear() + " " +
            datePushedItem.getHours() + ":" + datePushedItem.getMinutes();

            const item = {
                title: this.state.title,
                message: this.state.message,
                date: dateStringItem,
                id: this.state.itemID++,
                isTriggeredEdit: false
            };

            // add the item to dataItems
            this.state.dataItems.push(item);

            // update pushed dataItems
            this.setState({
                title: '',
                message: '',
                dataItems: this.state.dataItems,
                itemID: this.state.itemID
            });
            
            // reset the entire form

            e.target.reset();
        }

        e.preventDefault();
    }

    HandleRemoveItem = (id) => {

        const newDataItems = this.state.dataItems.filter(item => item.id !== id);

        this.setState({dataItems: newDataItems});
    }

    HandleEditClick = (id) => {

        // mark that we triggered the edit button

        for(var i = 0; i < this.state.dataItems.length; ++i) {
            if (this.state.dataItems[i].id === id) {
                console.log('the id has been found at ' + i);

                this.state.dataItems[i].isTriggeredEdit = true;

                /**
                * 1.(editTitle), (editMessage)
                * make sure we set title and message of the item
                * for editTitle and editMessage states by default
                * 
                * 2.(backupTitle), (backupMessage)
                * also make a backup for title and message of the item
                */
                this.setState({
                    editTitle: this.state.dataItems[i].title,
                    editMessage: this.state.dataItems[i].message,
                    backupTitle: this.state.dataItems[i].title,
                    backupMessage: this.state.dataItems[i].message,
                    dataItems: this.state.dataItems
                });

                break;
            }
        }
    }

    /**
     * during editing when the button cancel pressed
     * undo all changes to the item
     */
    HandleEditCancel = (id) => {
        
        for(var i = 0; i < this.state.dataItems.length; ++i) {
            if (this.state.dataItems[i].id === id) {
                // get back our view for the item
                this.state.dataItems[i].isTriggeredEdit = false;
            
            
                // fetch our initial title for the item
                this.state.dataItems[i].title = this.state.backupTitle;
                // fetch our initial message for the item
                this.state.dataItems[i].message = this.state.backupMessage;


                this.setState({
                    dataItems: this.state.dataItems
                });

                break;
            }
        }

    }

    HandleEditTitle = (e) => {
        this.setState({
            editTitle: e.target.value
        });
        e.preventDefault();
    }

    HandleEditMessage = (e) => {
        this.setState({
            editMessage: e.target.value
        });
        e.preventDefault();
    }

    HandleEditSave = (id) => {

        for(var i = 0; i < this.state.dataItems.length; ++i) {
            if (this.state.dataItems[i].id === id) {
                 // get back our view for the item
                this.state.dataItems[i].isTriggeredEdit = false;

                this.state.dataItems[i].title = this.state.editTitle;
                this.state.dataItems[i].message = this.state.editMessage;

                this.setState({
                    dataItems: this.state.dataItems
                });

                break;
            }
        }
    }

    render() {
        return (
            <div className="Todo-App">
                <TodoForm
                    checkTitle={this.HandleTitle}
                    checkMessage={this.HandleMessage}
                    checkInputs= {this.HandleInputs}
                />

                <div className="Todo-List">
                    <TodoList
                        Items={this.state.dataItems}
                        removeItemList={this.HandleRemoveItem}
                        editItemClick={this.HandleEditClick}
                        editTitleItem={this.HandleEditTitle}
                        editMessageItem={this.HandleEditMessage}
                        saveEditItem={this.HandleEditSave}
                        cancelEditItem={this.HandleEditCancel}
                        editButtonTrigeredItem={this.state.isEditTriggeredOnce}
                    />
                </div>
            </div>
        );
    }
}