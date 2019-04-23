import React, {Component} from "react";

class AddItem extends Component {
    render() {
        return (
            <div>
                <form>
                    <label>Your new task:</label>
                    <input type="text" />
                    <button type="button">Add task here</button>
                    
                </form>
            </div>
        );
    }
}
export default AddItem;