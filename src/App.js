import React, { Component } from 'react';
import './App.css';
import AddItem from './components/AddItem';
import ListItem from './components/ListItems';
import Header from './components/Header';
import Body from './components/Body';
import { maxHeaderSize } from 'http';

//const todoListItems = [
// "Buy cough sweets",
//"Walk the dog",
// "Go to Tesco",
// "Email someone"
//];


class App extends Component {
  state = {
    task: [
      { task: "Feed the dog", completed: true },
      { task: "Buy food for dinner", completed: false },
      { task: "Arrange meetup with friend", completed: true },
      { task: "Javascript challenges", completed: false },
    ],
  }//This is our array which now contains objects

  render() {
    return (

      < div className = "container" >
        <div className="row">
          <Header />
        </div>

        <div className="container">
          <div className="row">
            <AddItem addTask={this.addTask} />
          </div>
          <div className="container">
            <div className="row">
            </div>


            <h4>Here is a list of things I need to do:</h4>
            <ul>
              {this.state.tasks.map(function (item) {
                return <ListItem task={item} />
              })
              }

            </ul>
          </div>
        </div>
        </div>

    );
  }
}


export default App;
