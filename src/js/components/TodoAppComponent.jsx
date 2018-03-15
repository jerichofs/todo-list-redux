import React from 'react';

import TodoFormContainer from '../containers/TodoFormContainer';
import TodoListContainer from '../containers/TodoListContainer';

class TodoApp extends React.Component {

    render() {
        return (
            <div className="Todo-App">
                <TodoFormContainer />

                <div className="Todo-List">
                    <TodoListContainer />
                </div>
            </div>
        );
    }
}

export default TodoApp;