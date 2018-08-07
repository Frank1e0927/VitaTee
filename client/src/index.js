import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import store from './store'

import Test from './Test'

import './index.scss';

const App = () => {
  return (
    <Provider store={store} >
      <Test />
    </Provider>
  );
}
render(<App />, document.getElementById('app'));