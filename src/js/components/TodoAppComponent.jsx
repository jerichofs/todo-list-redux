import React from 'react';

import TodoForm from '../containers/TodoFormContainer';
import TodoList from '../containers/TodoListContainer';

class TodoApp extends React.Component {

    render() {
        return (
            <div className="Todo-App">
                <TodoForm />

                <div className="Todo-List">
                    <TodoList />
                </div>
            </div>
        );
    }
}

export default TodoApp;