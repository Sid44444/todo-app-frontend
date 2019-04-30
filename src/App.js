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
    const taskObject = { task: taskDescription, completed: false };
    currentTasks.push(taskObject);

    //tasks from input line(19) added into array. The new task is pushed into
    //the array(.push). Then the new array, which has one extra thing in it is set on state.
    this.setState({
      tasks: currentTasks
    });
  }

  deleteTask = (index) => {
    //this will remove the item from the specific place and update the state.
    console.log(index)

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
            <AddTask addTask={this.addTask} />
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
              this.state.tasks.map( (item, index) => {
                return <TaskItem taskDescription={item} key={index} index={index} deleteTask={this.deleteTask}/>
              })
            }
          </div>
        </div>
      </div>
    );
  }
}


export default App;
