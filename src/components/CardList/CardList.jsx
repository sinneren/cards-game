import React, { Component } from 'react';
import CardBlock from  '../CardBlock/CardBlock';
import { connect } from "react-redux";
import { finishGame } from "../../actions";
import './style.css';

class CardList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            node_id: '',
        }
        this.list = [];
    }
    createList = (list) => {
        let row = [];

        for (let i = 0, maxi = list.length; i < maxi; i++) {
            row[i] = <CardBlock
                key={i}
                index={i}
                id={list[i]}
            />;
        }

        return row;
    }
    componentWillMount () {
        this.list = this.createList(this.props.list);
    }
    componentWillUpdate () {
        if (!this.props.state.finish && (this.props.state.cards_matched === this.props.list.length / 2)) {
            this.props.finishGame();
        }
    }
    render() {
        return (
            <div className="Cards-Wrapper">
                {this.list}
            </div>
        );
    }
}
const mapStateToProps = state => ({
    state: state.cards
});
const mapDispatchToProps = dispatch => ({
    finishGame: () => dispatch(finishGame())
});
export default connect(mapStateToProps, mapDispatchToProps)(CardList);