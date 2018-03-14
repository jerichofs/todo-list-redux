import React from 'react';

import TodoTitle from './TodoTitle';
import TodoMessage from './TodoMessage';
import TodoAdd from './TodoAdd';


export default class TodoForm extends React.Component {

    render() {
        return (
            <div className="Todo-Form">
                <form onSubmit={this.props.checkInputs}>
                    <div className="Todo-Title">
                        <TodoTitle checkTitleForm={this.props.checkTitle} />
                    </div>

                    <div className="Todo-Message">
                        <TodoMessage checkMessageForm={this.props.checkMessage} />
                    </div>

                    <div className="Todo-Add">
                        <TodoAdd checkInputsForm={this.props.checkInputs} />
                    </div>
                </form>
                
            </div>
        );
    }
}

