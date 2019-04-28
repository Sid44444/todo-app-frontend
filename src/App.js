import React, { Component } from 'react';
import './App.css';
import AddTask from './components/AddTask';
import Header from './components/Header';
import TaskItem from './components/TaskItem';
import TaskCounter from './components/TaskCounter';


class App extends Component {

  state = {
    tasks: [],
  }//This is our array which now contains objects not just strings.

  addTask = (taskDescription) => {
    //Needs to add the new task (which will be a string) to our task list
    // Make a fresh copy of the task array with slice
    let currentTasks = this.state.tasks;
    // const taskObject = {task: currentTasks, completed: false};
    // currentTasks.push(taskObject);

    currentTasks.push(taskDescription);

    this.setState({
      tasks: currentTasks
    });
  }
  render() {
    return (
      <div className="container ">
        <div className="row">
          <div className="col-12 centered">
            <Header />
          </div>
        </div>


        <div className="row">
          <div className="col-12 centered">
            <AddTask addTaskFunction={this.addTask} />
          </div>
        </div>


        <div className="row">
          <div className="col-12 centered">
            <TaskCounter taskCount={this.state.tasks.length} />
          </div>
        </div>


        <div className="row">
          <div className="container">
            {
              this.state.tasks.map(function (item, index) {
                return <TaskItem taskDescription={item} key={index}  />
              })
            }
          </div>
        </div>
      </div>
    );
  }
}


export default App;
