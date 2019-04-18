import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import AddItem from './components/AddItem';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Nav text="Welcome to my app"/>
      <Nav text="Content Page"/>
      <Nav text="About us"/>
      <Nav text="How to add items to the list"/>
      <AddItem />
        <h4>Here is a list of things I nned to do</h4>
        <ul>
          <li>
            Buy chocolate
            <button>Done</button>
            <button>Delete</button>
            </li>
          <li>
            Tidy house
            <button>Done</button>
            <button>Delete</button>
            </li>
          <li>
            Feed the dog
            <button>Done</button>
            <button>Delete</button>
            </li>
            <AddItem />
        </ul>
      </div>
    );
  }
}

export default App;
