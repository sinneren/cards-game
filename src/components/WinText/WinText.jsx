import React, { Component } from 'react';
import './style.css';

class WinText extends Component {
    render() {
        return (
            <h1 className="Win-Text">{this.props.title}</h1>
        )
    }
}
export default WinText;
