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

      <div className="container">
        <div className="row">
          <div className="col-sm-10">
          </div>
        </div>
        <div className="col=sm-4">
        </div>


        <div className="container">
          <div className="row">
          </div>
        </div>


        <div className="App">
          <Header />
          <AddItem />
          
          <h4>Here is a list of things I need to do:</h4>
          <ul>
            {todoListItems.map(function (item) {
              return <ListItem task={item} />
            })}
            
          </ul>
        </div>
      </div>

    );
  }
}


export default App;
