import React, { Component } from 'react';
import './App.css';
import AddTask from './components/AddTask';
import Header from './components/Header';
import TaskItem from './components/TaskItem';
import TaskCounter from './components/TaskCounter';
import uuid from "uuid/v4";

class App extends Component {

  state = {
    tasks: [
      { task: "Feed the dog", completed: false, taskId: uuid() },
      { task: "Tidy", completed: false, taskId: uuid() },
      { task: "Wash up", completed: false, taskId: uuid() },
      { task: "Practice JS", completed: false, taskId: uuid() },
    ],
  }//This is our array which now contains objects not just strings.

  addTask = (taskDescription) => {
    //Needs to add the new task (which will be a string) to our task list
    // Make a fresh copy of the task array with slice
    const currentTasks = this.state.tasks.slice();
    const taskObject = { task: taskDescription, completed: false, taskId: uuid() };
    currentTasks.push(taskObject);

    //tasks from input line(19) added into array. The new task is pushed into
    //the array(.push). Then the new array, which has one extra thing in it is set on state.
    this.setState({
      tasks: currentTasks
    });
  }

  deleteTask = (id) => {
    let currentTasks = this.state.tasks;

    currentTasks = currentTasks.filter((item) => {
      if(item.taskId !== id) {
        return true;
      }

      return false;
    });

    this.setState({tasks: currentTasks});
  };

  completeTask = (idComplete) => {
    let currentTasks = this.state.tasks;

    let taskToMarkComplete = currentTasks.filter((item) => {
      if(item.taskId === idComplete) {
        return true;
      }
      return false;
    })[0];

    taskToMarkComplete.completed = true;

    this.setState({tasks: currentTasks});


  }

  render() {
    //console.log (this.state)
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
              this.state.tasks.map((item, index) => {
                return <TaskItem
                  task={item}
                  key={index}
                  index={index}
                  completeTask={this.completeTask}
                  deleteTask={this.deleteTask} />
              })
            }
          </div>
        </div>
      </div>
    );
  }
}


export default App;
