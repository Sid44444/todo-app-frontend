import React from 'react';

class TaskItem extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-12 col-md-8">
          {this.props.taskDescription}
        </div>
        <div className="col-sm-6 col-md-2">
          <button type="button">Well done! Now Remove</button>
        </div>
        <div className="col-sm-6 col-md-2">
          <button type="button">Delete</button>
        </div>
      </div>
    );
  }
}

export default TaskItem;