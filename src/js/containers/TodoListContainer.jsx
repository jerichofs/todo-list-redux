import React from 'react';

import { connect } from 'react-redux';
// component
import TodoListComponent from '../components/TodoListComponent';
// actions
import { removeItem, toggleItem, editItemSave } from '../actions/index';

// get the list from store
const mapStateToProps = state => {
    return {
        Items: state.items
    }
}

// dispatch actions to the store
const mapDispatchToProps = dispatch => {
    // define local refs for title and message inputs in an item
    let titleField;
    let messageField;
    return {
        getTitleFieldByRef: node => {
            titleField = node;
        },

        getMessageFieldByRef: node => {
            messageField = node;
        },

        onEditClick: id => {
            // dispatch the toggleItem action
            // this will turn the mode of an item to editing it's fields
            dispatch(toggleItem(id));
        },

        onRemoveClick: id => {
            // dispatch the removeItem action
            dispatch(removeItem(id));
        },

        onCancelClick: id => {
            // dispatch the toggleItem action
            // this will turn back the mode of the item to it's origin state
            dispatch(toggleItem(id));
        },

        onSaveClick: id => {
            // check if title and message inputs are empty
            if (!titleField.value.trim() || !messageField.value.trim()) {
                // just make an inaction
                return;
            }

            dispatch(editItemSave(id, titleField.value, messageField.value));
        }
    }
}

const TodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoListComponent)

export default TodoList;