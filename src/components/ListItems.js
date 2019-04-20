import React, { Component } from "react";

class ListItem extends Component {
    render() {
        return (
            <li>
                {this.props.task}
                <button>Done</button>
                <button>Delete</button>
            </li>
        );
    }
}
export default ListItem;