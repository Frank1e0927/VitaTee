import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import store from './store'

import './index.scss';

const App = () => {
  return (
    <Provider store={store} >
      <h3>beautiful start, game start</h3>
    </Provider>
  );
}
render(<App />, document.getElementById('app'));