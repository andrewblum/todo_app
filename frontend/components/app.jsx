import React from 'react';
import { Route } from 'react-router-dom';
import TodoContainer from './todo/todo_container';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div>
        { this.props.state.todos }
      </div>
    );
  }
}

export default App;
