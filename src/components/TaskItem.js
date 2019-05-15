import React from 'react';

class TaskItem extends React.Component {

  handleClick = () => {
    console.log(this.props.taskDescription.taskId)
    //we know the index position and now need to call the deleteTask function.
    this.props.deleteTask(this.props.taskDescription.taskId)
  }

  render() {

    let textColor = "black";

    return (
      <div className="row">
        <div className="col-sm-12 col-md-8" styles={{color: textColor}}>
          {this.props.taskDescription.task}
        </div>
        <div className="col-sm-6 col-md-2">
          {this.props.task.completed ? <button type="button">Well done! Now remove</button> : <button>Complete</button>}
        </div>
        <div className="col-sm-6 col-md-2">
          {this.props.task.completed ? null : <button type="button" onClick={this.handleClick}>
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