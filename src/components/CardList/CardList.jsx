import React, { Component } from 'react';
import CardBlock from  '../CardBlock/CardBlock';
import { connect } from "react-redux";
import './style.css';

class CardList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            node_id: ''
        }
    }
    createList = (list) => {
        let row = [];

        list.map((item, index)=> {
            row.push(<CardBlock
                key={index}
                id={item}
                index={index}
                classname={(this.state.node_id === index) ? "shown" : ""}
            />);
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
    state: state.cards
});

export default connect(mapStateToProps)(CardList);