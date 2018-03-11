import React from 'react';
import ReactDOM from 'react-dom';

import {AppContainer} from 'react-hot-loader';

import {Provider} from 'react-redux';
import {createStore} from 'redux';

import TodoApp from './components/TodoApp';
import "../css/TodoApp.css";

/**
 * it's just an arrow function wrapper
 * for the final component which will be rendered in hot mode
 * 
 */
const render = component => {
    ReactDOM.render(
        <AppContainer>
        <component />
        </AppContainer>,
        document.getElementById('root')
    )
};

ReactDOM.render(
    <AppContainer>
    <TodoApp />
    </AppContainer>,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept('./components/TodoApp', () => 
        superRender(require('./components/TodoApp').default));

}
