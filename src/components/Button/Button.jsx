import React, { Component } from 'react';
import './style.css';

class Button extends Component {
    render() {
        this.defaults = {
            class: 'button',
            text: 'Button Text',
        }
        return (
            <button
                className={(this.props.class) ? this.props.class : this.defaults.class}
                onClick={this.props.handleClick}>
                {(this.props.text) ? this.props.text : this.defaults.text}
            </button>
        );
    }
}

export default Button;