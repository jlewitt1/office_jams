import React, { Component } from 'react';

class Header extends Component {
    render() {
        return(
            <h2>Welcome {this.props.userName}!</h2>
        )
    }
}

export default Header;