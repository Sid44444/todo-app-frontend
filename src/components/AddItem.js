import React, { Component } from "react";

class AddItem extends Component {
    state = {
        text: ''
    }

    render() {
        return (
            
            <div>
                <div className="container-fluid">
                <div className="row">
                <div className="col-sm-12 col-md-8 col-lg-6"></div>
                <form>
                    <form style={styles.addtask}>
                        <label>Your New Task:</label>
                        <input type="text" />
                        <button type="button">Add task</button>
                    </form>
                </form>
                </div>
            </div>
            </div>
        );

    }
}

const styles = {
    addtask: {
        color: "blue",
        textDecoration: "underline",
        textAlign: 'center',
        backgroundColor: 'hsl(147, 50%, 70%)',
    }
}
export default AddItem;