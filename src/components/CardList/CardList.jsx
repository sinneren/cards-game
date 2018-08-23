import React, { Component } from 'react';
import CardBlock from  '../CardBlock/CardBlock';
import { connect } from "react-redux";
import { flushCard } from "../../actions";
import './style.css';

class CardList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            node_id: ''
        }
    }
    componentDidUpdate = () => {
        if (this.state.id.length === 0 && this.props.propstate.cards.id.length === undefined) {
            this.setState({
                id: this.props.propstate.cards.id,
                node_id: this.props.propstate.cards.node_id
            })
        } else {
            if (this.state.id !== this.props.propstate.cards.id) {
                this.props.flushCard(this.state, this.props.propstate.cards);
                this.setState({
                    id: '',
                    node_id: ''});
            }
        }
    }
    createList = (list) => {
        let row = [];
        list.map((item, index)=> {
            row.push(<CardBlock key={index} id={item} index={index} />);
        });

        return row;
    }
    render() {
        return (
            <div className="Cards-Wrapper">
               {this.createList(this.props.list)}
            </div>
        );
    }
}
const mapStateToProps = state => ({
    propstate: state
});
const mapDispatchToProps = dispatch => ({
    flushCard: (old_row, new_row) => dispatch(flushCard(old_row, new_row))
});

export default connect(mapStateToProps, mapDispatchToProps)(CardList);