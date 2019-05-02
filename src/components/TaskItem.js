import React from 'react';

class TaskItem extends React.Component {

  handleClick = () => {
    console.log(this.props.taskDescription.taskId)
    //we know the index position and now need to call the deleteTask function.
    this.props.deleteTask(this.props.taskDescription.taskId)
  }

  render() {
    return (
      <div className="row">
        <div className="col-sm-12 col-md-8">
          {this.props.taskDescription.task}
        </div>
        <div className="col-sm-6 col-md-2">
          <button type="button">Done</button> 
        </div>
        <div className="col-sm-6 col-md-2">
          <button type="button" onClick={this.handleClick}>
          Delete
          </button>
          
        </div>
      </div>
    );
  }
}

export default TaskItem;