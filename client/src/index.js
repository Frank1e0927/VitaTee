import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import store from './store'

import Layout from './container/Layout'

import './index.scss';

const App = () => {
  return (
    <Provider store={store} >
      <Layout />
    </Provider>
  );
}
render(<App />, document.getElementById('app'));