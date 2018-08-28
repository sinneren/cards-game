import React, { Component } from 'react';
import { connect } from "react-redux";
import { toggleCard, addMatch } from "../../actions";
import './style.css';

class CardBlock extends Component {
    constructor(props) {
        super(props);
    }
    handleCardClick = (event) => {
        if (event.currentTarget.classList.contains('shown')) {
            event.preventDefault();
        } else {
            this.props.toggleCard(this.props.id, this.props.index);
        }
    }

    render() {
        let class_name = (this.props.classname !== undefined) ? "card " + this.props.classname : "card";
        class_name = (this.props.state.list[this.props.index].open) ? class_name + " shown " : class_name;
        return (
            <div
                className={class_name}
                onClick={this.handleCardClick.bind(this)}>
                <span className="card-text">{this.props.id}</span>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    state: state.cards,
});
const mapDispatchToProps = dispatch => ({
    toggleCard: (id, index) => dispatch(toggleCard(id, index)),
    addMatch: (id) => dispatch(addMatch(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CardBlock);