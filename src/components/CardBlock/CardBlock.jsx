import React, { Component } from 'react';
import { connect } from "react-redux";
import { toggleCard, addMatch } from "../../actions";
import './style.css';

class CardBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            node_id: '',
            node: '',
        }
    }
    handleCardClick = (event) => {
        if (event.currentTarget.classList.contains('shown')) {
            event.preventDefault();
        } else {
            if (this.props.state.id.length === 0) {
                this.props.toggleCard(this.props.id, this.props.index);
                event.currentTarget.classList.add('shown');
            } else if (this.props.state.id !== this.props.id) {
                event.currentTarget.classList.add('shown');
                this.props.toggleCard('', '');
                event.currentTarget.classList.remove('shown');
                event.currentTarget.parentNode.children[this.props.state.node_id].classList.remove('shown');
            } else if (this.props.state.id === this.props.id) {
                event.currentTarget.classList.add('shown');
                this.props.addMatch(this.props.index);
                this.props.toggleCard('', '');
            }
        }
    }

    render() {
        const class_name = (this.props.classname !== undefined) ? "card " + this.props.classname : "card";
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