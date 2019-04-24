import React, { Component } from "react";

class AddItem extends Component {
    render() {
        return (
            <div>
                <form>
                    <form style={styles.addtask}>
                        <label>Your New Task:</label>
                        <input type="text" />
                        <button type="button">Add task</button>
                    </form>
                </form>
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