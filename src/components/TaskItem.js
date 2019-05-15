import React from 'react';

class TaskItem extends React.Component {

  handleDeleteClick = () => {
    console.log(this.props.taskDescription.taskId)
    //we know the index position and now need to call the deleteTask function.
    this.props.deleteTask(this.props.taskDescription.taskId);
  }

  handleCompleteClick = () => {
    this.props.completeTask(this.props.taskId);
  }

  render() {

    let textColor = "black";

    if (this.props.taskDescription.completed) {
      textColor = "green";
    }

    return (
      <div className="row">
        <div className="col-sm-12 col-md-6" styles={{ color: textColor }}>
          {this.props.taskDescription.task}
        </div>
        <div className="col-sm-6 col-md-3">
          {this.props.taskDescription.completed ? <button type="button">Well done! Now remove</button> : <button>Complete</button>}
        </div>
        <div className="col-sm-6 col-md-3">
          {this.props.taskDescription.completed ? null : <button type="button" onClick={this.handleClick}>
            Delete
          </button>}

        </div>
      </div>
      // <div className="col-2">
      // {!this.props.completed && (
      //   <button onClick={this.handleCompleetClick}>Mark as complete</button>
      //   </div>
    );
  }
}

export default TaskItem;