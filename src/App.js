import React, { Component } from 'react';

import router from './utilities/router';

class App extends Component {
  render() {
    return (
      <div>
        {router}
      </div>
    );
  }
}

export default App;