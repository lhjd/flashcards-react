import React from 'react';
import { hot } from 'react-hot-loader';

import Card from '../client/components/card/card';

class App extends React.Component {
  render() {
    return (
      <div>
        Flash Cards
        <Card />
      </div>
    );
  }
}

export default hot(module)(App);
