import * as Redux from 'redux';
import * as ReduxDevTools from 'redux-devtools-extension';

import thunk from 'redux-thunk';
import characterReducer from './reducers/characterReducer';

const state = Redux.combineReducers({
    characterReducer: characterReducer,
});

export type IAppState = ReturnType<typeof state>;

const store = Redux.createStore(
    state,
    ReduxDevTools.composeWithDevTools(
        Redux.applyMiddleware(thunk)
    )
);

export default store;