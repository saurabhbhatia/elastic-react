import React from 'react';
import {render} from 'react-dom';
import CounterComponent from './CounterComponent.jsx';

class App extends React.Component {
  render () {
    return <p> Hello React!</p>;
    <CounterComponent />
  }
}

render(<App/>, document.getElementById('app'));
