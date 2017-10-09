import React, { Component } from 'react';

class Button extends Component {
    
        render() {
          return(
            <a href={this.props.link} id={this.props.buttonId} className="btn btn-primary" onClick={this.props.change}>{this.props.text}</a>
          );
        }
    }

export default Button;