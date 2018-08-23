import React, { Component } from 'react';
import './style.css';

class CardBlock extends Component {
    render() {
        this.defaults = {
            class: 'card hided',
        }
        return (
            <div
                className={(this.props.class) ? this.props.class : this.defaults.class}
                onClick={this.props.handleCardClick}>
                {this.props.id}
            </div>
        );
    }
}

export default CardBlock;