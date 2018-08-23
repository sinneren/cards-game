import React, { Component } from 'react';
import { connect } from "react-redux";
import { toggleCard } from "../../actions";
import './style.css';
class CardBlock extends Component {
    handleCardClick = (event) => {
        console.log(this.props)
        this.props.toggleCard(this.props.id)
    }
    render() {
        this.defaults = {
            class: 'card hided',
        }
        return (
            <div
                className={(this.props.class) ? this.props.class : this.defaults.class}
                onClick={this.handleCardClick.bind(this)}>
                {this.props.id}
            </div>
        );
    }
}
const mapStateToProps = state => ({
    state
});
const mapDispatchToProps = dispatch => ({
    toggleCard: (id) => dispatch(toggleCard(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(CardBlock);