import React from 'react';

class TaskItem extends React.Component {

  handleDeleteClick = () => {
    //we know the index position and now need to call the deleteTask function.
    this.props.deleteTask(this.props.task.taskId);
  }

  handleCompleteClick = () => {
    this.props.completeTask(this.props.task.taskId);
  }

  render() {

    let taskStyle = "none";

    if (this.props.task.completed) {
      taskStyle = "line-through";
    }

    return (
      <div className="row">
        <div className="col-sm-12 col-md-6" style={{ textDecoration:  taskStyle}}>
          {this.props.task.task}
        </div>
        <div className="col-sm-6 col-md-3">
          {this.props.task.completed ? <button type="button">Well done! Now remove</button> : <button type="button" onClick={this.handleCompleteClick}>Complete</button>}
        </div>
        <div className="col-sm-6 col-md-3">
          <button type="button" onClick={this.handleDeleteClick}>
            Delete
          </button>

        </div>
      </div>
    );
  }
}

export default TaskItem;