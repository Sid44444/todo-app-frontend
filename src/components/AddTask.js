import React, { Component } from "react";

class AddTask extends Component {
    state = {
        taskDescription: ''
    }


    // A function that updates state needs to live in the same component as the state it updates
    handleChange = (event) => {
        this.setState(
            {
                taskDescription: event.target.value
            }
        );
    }

    handleClick = () => {
        // const newTask = this.state.text;

        // Maybe add validation? Should I be allowed to add this task?
        // if (newTask.length > 0) 
        this.props.addTaskFunction(this.state.taskDescription);
    }

    render() {
        return (
            <div>
                {/* <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-8 col-lg-6"></div>
                        <form>
                            <label htmlFor="inputNewTodo">Your New Task:</label>
                            <input placeholder="Type your todo item" type="text" id="inputNewTodo" value={this.state.text} onChange={this.handleChange}></input>
                            <button type="button">Add task</button>
                        </form> */}
                <input type="test" onChange={this.handleChange} />
                <button type="button" onClick={this.handleClick}>
                Add Task
                </button>
            </div>


        );

    }
}

// const styles = {
//     addtask: {
//         color: "blue",
//         textDecoration: "underline",
//         textAlign: 'center',
//         backgroundColor: 'hsl(147, 50%, 70%)',
//     }
// }
export default AddTask;