import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import AddItem from './components/AddItem';
import ListItem from './components/ListItems';
import Header from './components/Header';
import { maxHeaderSize } from 'http';

const todoListItems = [
  "Buy cough sweets",
  "Walk the dog",
  "Go to Tesco",
  "Email someone"
];


class App extends Component {

  render() {
    return (
      

      <div className="App">
      <h1 className="center blue-text">Welcome</h1>
        <Nav text="Welcome to my ToDo Application" />
        <Nav text="Content Page" />
        <Nav text="About us" />
        <Nav text="How to add items to the list" />
        <h4>Here is a list of things I need to do:</h4>
        <ul>
          {todoListItems.map(function (item) {
            return <ListItem task={item} />
          })}
          <AddItem />
        </ul>
      </div>
      
    );
  }
}

export default App;
