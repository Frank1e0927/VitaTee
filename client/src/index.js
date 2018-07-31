import React from 'react';
import { render } from 'react-dom';

import './index.scss';

const App = () => {
  return (
    <div>
      <h3>Our Application Is Alive 132</h3>
    </div>
  );
}
render(<App />, document.getElementById('app'));