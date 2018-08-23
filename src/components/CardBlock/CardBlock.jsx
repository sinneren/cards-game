import React, { Component } from 'react';
import { connect } from "react-redux";
import { toggleCard } from "../../actions";
import './style.css';

class CardBlock extends Component {
    handleCardClick = (event) => {
        event.currentTarget.className = event.currentTarget.className + ' shown';
        this.props.toggleCard(this.props.id, this.props.index);
    }
    render() {
        this.defaults = {
            class: 'card',
        }
        return (
            <div
                id={"card" + this.props.index}
                className={(this.props.class) ? this.props.class : this.defaults.class}
                onClick={this.handleCardClick.bind(this)}>
                {this.props.id}
            </div>
        );
    }
}
const mapStateToProps = state => ({
    propstate: state
});
const mapDispatchToProps = dispatch => ({
    toggleCard: (id, index) => dispatch(toggleCard(id, index))
});

export default connect(mapStateToProps, mapDispatchToProps)(CardBlock);