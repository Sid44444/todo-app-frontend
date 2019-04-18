import React, { Component } from 'react';

class Nav extends Component {
    render() {
        return (
            <nav>
            <h1>
              {this.props.text}
            </h1>
          </nav>
        );
    }
}
export default Nav;