import React from 'react';
import ReactDOM from 'react-dom';

import {AppContainer} from 'react-hot-loader';

import {Provider} from 'react-redux';
import {createStore} from 'redux';

import TodoApp from './components/TodoAppComponent';
import mainTodoReducer from './reducers/index';

import "../css/TodoApp.css";

// create the store for the app
let store = createStore(mainTodoReducer);

ReactDOM.render(
    <Provider store={store}>
        <AppContainer>
            <TodoApp />
        </AppContainer>
    </Provider>,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept(TodoApp, () => 
        require('./components/TodoAppComponent').default);
}
