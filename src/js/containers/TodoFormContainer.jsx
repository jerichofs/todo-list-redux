import React from 'react';

import { connect } from 'react-redux';

// actions
import { addTodo } from '../actions/index';

import TodoFormComponent from '../components/TodoFormComponent';

// bind form props with the redux store
const mapDispatchToProps = dispatch => {
    // let's bind our title and message input fields
    let boundTitle;
    let boundMessage;

    return {
        getTitleByRef: node => { boundTitle = node; },
        getMessageByRef: node => { boundMessage = node; },

        // on submiting form
        onAddClick: e => {
            e.preventDefault();

            // if both inputs empty, then return
            if (!boundTitle.value.trim() || !boundMessage.value.trim()) {
                return;
            }

            // change the state of store by dispatching an action
            dispatch(addTodo(boundTitle.value, boundMessage.value));

            // clear the input fields
            boundTitle.value = '';
            boundMessage.value = '';
        }
    }
}

const TodoForm = connect(null, mapDispatchToProps)(TodoFormComponent);

export default TodoForm;