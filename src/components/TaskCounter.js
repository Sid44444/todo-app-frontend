import React from 'react';

class TaskCounter extends React.Component {
  render() {
    return (
      <p>
        You have {this.props.taskCount} tasks remaining.
      </p>
    );
  }
}

export default TaskCounter;