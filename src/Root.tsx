import React from 'react';
import * as ReactRedux from 'react-redux';

import Main from './components/Main';
import store from './redux/configureStore';

const Root = () => {
  return (
    <ReactRedux.Provider store={store}>
      <Main />
    </ReactRedux.Provider>
  )
}

export default Root;